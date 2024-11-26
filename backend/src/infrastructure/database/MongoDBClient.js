import mongoose from "mongoose";
import { config } from "../../config/config.js";

export class MongoDBClient {
  static async connect() {
    try {
      await mongoose.connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }); // Intentamos conectarnos a MongoDB
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Cerramos el proceso en caso de error
    }
  }
}
