import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({path: './env'});
const app = express();

connectDB();


/*(async () => {
    try {
        await mongoose.connect(`${process.env.MONOGODB_URL}/${DB_NAME}`);
        app.on("error", () => {
            console.log("Error", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(`Connection Failed - ${error}`);
    }
})();*/