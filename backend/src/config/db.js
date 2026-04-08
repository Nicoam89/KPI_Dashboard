import mongoose from "mongoose";

export async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error(
      "Falta la variable MONGO_URI. Creá backend/.env con MONGO_URI=mongodb://..."
    );
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB conectado");
  } catch (err) {
    console.error("❌ Error Mongo:", err.message);
    throw err;
  }
}
