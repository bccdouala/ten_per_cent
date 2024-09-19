import { db } from "./config/database";

async function seedRoles() {
  const roles = [
    { name: "Admin", description: "Administrator role", isDeleted: false },
    { name: "Member", description: "Regular user role", isDeleted: false },
  ];

  for (const role of roles) {
    const sql =
      "INSERT INTO roles (name, description, isDeleted) VALUES (?, ?, ?)";
    await db.query(sql, [role.name, role.description, role.isDeleted]);
  }
  console.log("Roles seeded!");
}

async function seedUsers() {
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-01",
      email: "john.doe@example.com",
      phone: "123456789",
      password: "password123",
      isOntrack: true,
      isValid: true,
      role_id: 1,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      dateOfBirth: "1995-05-10",
      email: "jane.smith@example.com",
      phone: "987654321",
      password: "password456",
      isOntrack: false,
      isValid: true,
      role_id: 2,
    },
  ];

  for (const user of users) {
    const sql = `INSERT INTO users 
      (firstName, lastName, dateOfBirth, email, phone, password, isOntrack, isValid, role_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await db.query(sql, [
      user.firstName,
      user.lastName,
      user.dateOfBirth,
      user.email,
      user.phone,
      user.password,
      user.isOntrack,
      user.isValid,
      user.role_id,
    ]);
  }
  console.log("Users seeded!");
}

async function seedPayments() {
  const payments = [
    {
      amount: 50.0,
      createdBy: "Admin",
      paymentMode: "Credit Card",
      user_id: 1,
    },
    { amount: 30.0, createdBy: "Jane", paymentMode: "PayPal", user_id: 2 },
  ];

  for (const payment of payments) {
    const sql = `INSERT INTO payments 
      (amount, createdBy, paymentMode, user_id) 
      VALUES (?, ?, ?, ?)`;
    await db.query(sql, [
      payment.amount,
      payment.createdBy,
      payment.paymentMode,
      payment.user_id,
    ]);
  }
  console.log("Payments seeded!");
}

async function seedTrackingSheets() {
  const trackingSheets = [
    { payment_id: 1, user_id: 1 },
    { payment_id: 2, user_id: 2 },
  ];

  for (const sheet of trackingSheets) {
    const sql = `INSERT INTO trackingSheets (payment_id, user_id) VALUES (?, ?)`;
    await db.query(sql, [sheet.payment_id, sheet.user_id]);
  }
  console.log("Tracking sheets seeded!");
}

async function seed() {
  try {
    await seedRoles();
    await seedUsers();
    await seedPayments();
    await seedTrackingSheets();
    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await db.end();
  }
}

seed();
