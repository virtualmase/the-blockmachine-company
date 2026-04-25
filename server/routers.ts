import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
  getAllMachines,
  getMachineById,
  createMachine,
  createRental,
  getRentalsByMachineId,
  getAllRentals,
} from "./db";
import { notifyOwner } from "./_core/notification";
import { TRPCError } from "@trpc/server";

// Admin-only procedure wrapper
const adminProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Leads router
  leads: router({
    // Public: submit a new lead
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          company: z.string().min(1, "Company is required"),
          email: z.string().email("Invalid email"),
          phone: z.string().min(1, "Phone is required"),
          message: z.string().optional(),
          interestType: z.enum(["quote", "rental", "demo", "consultation", "other"]),
        })
      )
      .mutation(async ({ input }) => {
        const lead = await createLead({
          name: input.name,
          company: input.company,
          email: input.email,
          phone: input.phone,
          message: input.message || null,
          interestType: input.interestType,
          status: "new",
        });

        // Send owner notification
        try {
          await notifyOwner({
            title: "New Lead Submission",
            content: `New inquiry from ${input.name} (${input.company})\nEmail: ${input.email}\nPhone: ${input.phone}\nInterest: ${input.interestType}`,
          });
        } catch (error) {
          console.error("Failed to notify owner:", error);
        }

        return { success: true, leadId: lead.insertId };
      }),

    // Admin: get all leads
    getAll: adminProcedure.query(async () => {
      return getAllLeads();
    }),

    // Admin: get single lead
    getById: adminProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => {
      return getLeadById(input.id);
    }),

    // Admin: update lead status
    updateStatus: adminProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["new", "contacted", "qualified", "closed"]),
        })
      )
      .mutation(async ({ input }) => {
        await updateLeadStatus(input.id, input.status);
        return { success: true };
      }),

    // Admin: delete lead
    delete: adminProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
      await deleteLead(input.id);
      return { success: true };
    }),
  }),

  // Machines router
  machines: router({
    // Public: get all machines
    getAll: publicProcedure.query(async () => {
      return getAllMachines();
    }),

    // Public: get single machine
    getById: publicProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => {
      return getMachineById(input.id);
    }),

    // Admin: create machine
    create: adminProcedure
      .input(
        z.object({
          name: z.string(),
          model: z.string(),
          category: z.string(),
          description: z.string().optional(),
          outputPerHour: z.string().optional(),
          power: z.string().optional(),
          dimensions: z.string().optional(),
          weight: z.string().optional(),
          compatibleMolds: z.string().optional(),
          price: z.string().optional(),
          imageUrl: z.string().optional(),
          brochureUrl: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        return createMachine({
          name: input.name,
          model: input.model,
          category: input.category,
          description: input.description || null,
          outputPerHour: input.outputPerHour || null,
          power: input.power || null,
          dimensions: input.dimensions || null,
          weight: input.weight || null,
          compatibleMolds: input.compatibleMolds || null,
          price: input.price ? (parseFloat(input.price) as any) : (null as any),
          imageUrl: input.imageUrl || null,
          brochureUrl: input.brochureUrl || null,
        });
      }),
  }),

  // Rentals router
  rentals: router({
    // Public: submit rental inquiry
    submit: publicProcedure
      .input(
        z.object({
          machineId: z.number(),
          name: z.string().min(1, "Name is required"),
          company: z.string().min(1, "Company is required"),
          email: z.string().email("Invalid email"),
          phone: z.string().min(1, "Phone is required"),
          rentalType: z.enum(["short-term", "long-term"]),
          startDate: z.date().optional(),
          endDate: z.date().optional(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const rental = await createRental({
          machineId: input.machineId,
          name: input.name,
          company: input.company,
          email: input.email,
          phone: input.phone,
          rentalType: input.rentalType,
          startDate: input.startDate || null,
          endDate: input.endDate || null,
          message: input.message || null,
          status: "pending",
        });

        // Send owner notification
        try {
          await notifyOwner({
            title: "New Rental Inquiry",
            content: `New rental request from ${input.name} (${input.company})\nEmail: ${input.email}\nPhone: ${input.phone}\nRental Type: ${input.rentalType}`,
          });
        } catch (error) {
          console.error("Failed to notify owner:", error);
        }

        return { success: true, rentalId: rental.insertId };
      }),

    // Admin: get all rentals
    getAll: adminProcedure.query(async () => {
      return getAllRentals();
    }),

    // Admin: get rentals by machine
    getByMachineId: adminProcedure
      .input(z.object({ machineId: z.number() }))
      .query(async ({ input }) => {
        return getRentalsByMachineId(input.machineId);
      }),
  }),
});

export type AppRouter = typeof appRouter;
