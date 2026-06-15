/**
 * Seed script — creates admin user + sample employees
 * Usage: node src/scripts/seed.js
 */
require("dotenv").config({ path: "./src/.env" });

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Employee = require("../models/Employee");

const EMPLOYEES = [
  { name: "Admin User",      email: "admin@portal.com",  password: "Admin@123",    role: "admin",    department: "Management",   position: "System Admin",       status: "active" },
  { name: "Alice Johnson",   email: "alice@portal.com",  password: "Employee@123", role: "manager",  department: "Engineering",  position: "Engineering Manager",status: "active" },
  { name: "Bob Smith",       email: "bob@portal.com",    password: "Employee@123", role: "employee", department: "Engineering",  position: "Software Engineer",  status: "active" },
  { name: "Carol White",     email: "carol@portal.com",  password: "Employee@123", role: "employee", department: "Design",       position: "UI Designer",        status: "active" },
  { name: "Dan Brown",       email: "dan@portal.com",    password: "Employee@123", role: "employee", department: "Marketing",    position: "Marketing Lead",     status: "on-leave" },
  { name: "Eve Davis",       email: "eve@portal.com",    password: "Employee@123", role: "employee", department: "Finance",      position: "Financial Analyst",  status: "active" },
  { name: "Frank Miller",    email: "frank@portal.com",  password: "Employee@123", role: "employee", department: "Operations",   position: "Ops Engineer",       status: "active" },
  { name: "Grace Lee",       email: "grace@portal.com",  password: "Employee@123", role: "employee", department: "HR",           position: "HR Specialist",      status: "active" },
  { name: "Henry Wilson",    email: "henry@portal.com",  password: "Employee@123", role: "employee", department: "Engineering",  position: "Backend Developer",  status: "inactive" },
  { name: "Ivy Chen",        email: "ivy@portal.com",    password: "Employee@123", role: "employee", department: "Design",       position: "Product Designer",   status: "active" },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected");

    // Clear existing
    await Employee.deleteMany({});
    console.log("🗑  Cleared existing employees");

    // Hash passwords and insert
    const hashed = await Promise.all(
      EMPLOYEES.map(async (e) => ({
        ...e,
        password: await bcrypt.hash(e.password, 10),
        phone: "+1 555 000 000" + EMPLOYEES.indexOf(e),
        attendance: Math.floor(Math.random() * 15) + 85,
        hiredAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000 * 3),
      }))
    );

    await Employee.insertMany(hashed);
    console.log(`✅ Seeded ${hashed.length} employees`);
    console.log("\n🔑 Admin credentials:");
    console.log("   Email:    admin@portal.com");
    console.log("   Password: Admin@123\n");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
    process.exit(1);
  }
}

seed();
