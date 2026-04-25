import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, leads, Lead, InsertLead, machines, InsertMachine, rentals, InsertRental } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Lead queries
export async function createLead(lead: InsertLead) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(leads).values(lead);
  return { insertId: (result as any).insertId || 0 };
}

export async function getAllLeads() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(leads).orderBy(desc(leads.createdAt));
}

export async function getLeadById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(leads).where(eq(leads.id, id)).limit(1);
  return result[0];
}

export async function updateLeadStatus(id: number, status: Lead["status"]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(leads).set({ status, updatedAt: new Date() }).where(eq(leads.id, id));
}

export async function deleteLead(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(leads).where(eq(leads.id, id));
}

// Machine queries
export async function getAllMachines() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(machines).orderBy(machines.category);
}

export async function getMachineById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(machines).where(eq(machines.id, id)).limit(1);
  return result[0];
}

export async function createMachine(machine: InsertMachine) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(machines).values(machine);
  return { insertId: (result as any).insertId || 0 };
}

// Rental queries
export async function createRental(rental: InsertRental) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(rentals).values(rental);
  return { insertId: (result as any).insertId || 0 };
}

export async function getRentalsByMachineId(machineId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(rentals).where(eq(rentals.machineId, machineId));
}

export async function getAllRentals() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(rentals).orderBy(desc(rentals.createdAt));
}
