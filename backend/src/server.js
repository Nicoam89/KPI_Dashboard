import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import authRoutes from "../functions/routes/auth.routes.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("❌ No se pudo iniciar el backend:", error.message);
    process.exit(1);
  }
}

startServer();
