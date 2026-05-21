import mongoose from "mongoose";
import { serverConfig } from ".";


export async function connectDB() {
    try {
        await mongoose.connect(serverConfig.MONGO_URI);
        console.log('Connected to mongodb')
    } catch (error) {
        console.error("Error connecting to mongodb", error)
        throw error;
    }
}