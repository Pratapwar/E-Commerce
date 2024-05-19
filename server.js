import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/database.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors'

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.subscribe(cors());
const port = process.env.PORT;
app.use('/api/v1/auth' , authRoute);

app.get("/" , (req , res) => {
    res.send("Server Running Successfully")
})

app.listen(port , () => {
    console.log(`Server Running Successfully`)
})