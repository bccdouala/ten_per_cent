import { db } from "./config/database";
// Seed roles data
async function seedRoles() {
  const roles = [
    { name: "Admin", description: "Administrator role", isDelete: false },
    { name: "Member", description: "Regular user role", isDelete: false },
  ];

  for (const role of roles) {
    const query = `
      INSERT INTO public.roles (name, description, isdelete, createdat, updatedat)
      VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `;
    await db.query(query, [role.name, role.description, role.isDelete]);
  }
  console.log("Roles seeded successfully!");
}

// Seed users data
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
      role_id: 1, // Assuming Admin
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
      role_id: 2, // Assuming Member
    },
  ];

  for (const user of users) {
    const query = `
      INSERT INTO public.users
        (firstname, lastname, dateofbirth, email, phone, password, isontrack, isvalid, role_id, createdat, updatedat)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `;
    await db.query(query, [
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
  console.log("Users seeded successfully!");
}

// Seed payments data
async function seedPayments() {
  const payments = [
    {
      amount: 50.0,
      createdBy: "Admin",
      paymentMode: "Credit Card",
      user_id: 1, // Assuming payment by Admin (John Doe)
    },
    {
      amount: 30.0,
      createdBy: "Jane",
      paymentMode: "PayPal",
      user_id: 2, // Assuming payment by Member (Jane Smith)
    },
  ];

  for (const payment of payments) {
    const query = `
      INSERT INTO public.payments
        (amount, createdby, paymentmode, user_id, createdat, updatedat)
      VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `;
    await db.query(query, [
      payment.amount,
      payment.createdBy,
      payment.paymentMode,
      payment.user_id,
    ]);
  }
  console.log("Payments seeded successfully!");
}

// Seed tracking sheets data
async function seedTrackingSheets() {
  const trackingSheets = [
    {
      payment_id: 1, // Assuming tracking for John Doe's payment
      user_id: 1,
    },
    {
      payment_id: 2, // Assuming tracking for Jane Smith's payment
      user_id: 2,
    },
  ];

  for (const sheet of trackingSheets) {
    const query = `
      INSERT INTO public.trackingsheets (payment_id, user_id, createdat, updatedat)
      VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `;
    await db.query(query, [sheet.payment_id, sheet.user_id]);
  }
  console.log("Tracking Sheets seeded successfully!");
}

// Main seeding function
async function seed() {
  try {
    await seedRoles();
    await seedUsers();
    await seedPayments();
    await seedTrackingSheets();
    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await db.end();
  }
}

// Run seed function
seed();
