import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Leads table: stores all inquiries and quote requests from the contact form
 */
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  message: text("message"),
  interestType: varchar("interestType", { length: 50 }).notNull(), // "quote", "rental", "demo", "consultation", "other"
  status: mysqlEnum("status", ["new", "contacted", "qualified", "closed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

/**
 * Machines table: concrete block machine models and specifications
 */
export const machines = mysqlTable("machines", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  model: varchar("model", { length: 100 }).notNull(),
  category: varchar("category", { length: 50 }).notNull(), // "semi-automatic", "fully-automatic", "mobile", "paver"
  description: text("description"),
  outputPerHour: varchar("outputPerHour", { length: 100 }), // e.g., "3000 blocks/hour"
  power: varchar("power", { length: 100 }), // e.g., "15 kW"
  dimensions: varchar("dimensions", { length: 100 }), // e.g., "2.5m x 1.8m x 1.2m"
  weight: varchar("weight", { length: 100 }), // e.g., "2500 kg"
  compatibleMolds: text("compatibleMolds"), // JSON or comma-separated
  price: decimal("price", { precision: 10, scale: 2 }),
  imageUrl: text("imageUrl"),
  brochureUrl: text("brochureUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Machine = typeof machines.$inferSelect;
export type InsertMachine = typeof machines.$inferInsert;

/**
 * Rentals table: rental inquiries and availability
 */
export const rentals = mysqlTable("rentals", {
  id: int("id").autoincrement().primaryKey(),
  machineId: int("machineId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  rentalType: varchar("rentalType", { length: 50 }).notNull(), // "short-term", "long-term"
  startDate: timestamp("startDate"),
  endDate: timestamp("endDate"),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "approved", "rejected", "completed"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Rental = typeof rentals.$inferSelect;
export type InsertRental = typeof rentals.$inferInsert;