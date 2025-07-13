import express from 'express';
 //express = require ('express');
import cors from 'cors'
import dotenv from 'dotenv';

import path from 'path'
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();

//console.log(process.env.MONGO_URI)

//.log("PORT from env:", process.env.PORT);

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();


//middleware
// if (process.env.NODE_ENV !== "production") {
//   app.use(
//     cors({
//       origin: "http://localhost:5173",
//     })
//   );
// }



//middleware
app.use(express.json()); //it will parse the json bodies

app.use(rateLimiter);

app.use(cors({
    origin: "http://localhost:5173",
})
);

app.use("/api/notes", notesRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

//better practice
connectDB().then(()=>{
    app.listen(PORT, () => {
    console.log('Server running at port:', PORT);
})
})
