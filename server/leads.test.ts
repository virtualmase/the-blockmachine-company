import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

function createUserContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("leads procedures", () => {
  it("should allow public lead submission", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    });

    const result = await caller.leads.submit({
      name: "John Doe",
      company: "ABC Construction",
      email: "john@example.com",
      phone: "555-1234",
      message: "Interested in rental",
      interestType: "rental",
    });

    expect(result).toBeDefined();
    expect(result.id).toBeGreaterThan(0);
    expect(result.name).toBe("John Doe");
    expect(result.status).toBe("new");
  });

  it("should allow admin to retrieve all leads", async () => {
    const adminCtx = createAdminContext();
    const caller = appRouter.createCaller(adminCtx);

    const leads = await caller.leads.getAll();
    expect(Array.isArray(leads)).toBe(true);
  });

  it("should allow admin to update lead status", async () => {
    const adminCtx = createAdminContext();
    const caller = appRouter.createCaller(adminCtx);

    // Submit a lead first
    const publicCaller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    });

    const lead = await publicCaller.leads.submit({
      name: "Status Test",
      company: "Status Co",
      email: "status@example.com",
      phone: "555-9999",
      message: "Status test",
      interestType: "consultation",
    });

    // Update status
    const updated = await caller.leads.updateStatus({
      id: lead.id,
      status: "contacted",
    });

    expect(updated.status).toBe("contacted");
  });

  it("should allow admin to delete leads", async () => {
    const adminCtx = createAdminContext();
    const caller = appRouter.createCaller(adminCtx);

    // Submit a lead
    const publicCaller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    });

    const lead = await publicCaller.leads.submit({
      name: "Delete Test",
      company: "Delete Co",
      email: "delete@example.com",
      phone: "555-0000",
      message: "Delete test",
      interestType: "other",
    });

    // Delete it
    const result = await caller.leads.delete({ id: lead.id });
    expect(result.success).toBe(true);
  });

  it("should prevent non-admin users from accessing admin procedures", async () => {
    const userCtx = createUserContext();
    const caller = appRouter.createCaller(userCtx);

    try {
      await caller.leads.getAll();
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("FORBIDDEN");
    }
  });

  it("should validate required lead fields", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    });

    try {
      await caller.leads.submit({
        name: "",
        company: "",
        email: "invalid-email",
        phone: "",
        message: "",
        interestType: "quote",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });
});
