import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import personalRouter from './routes/personalRoutes.js';
import departementRouter from './routes/departementRoutes.js';
import serviceRouter from './routes/serviceRoutes.js';
import missionRouter from './routes/missionRoutes.js';
import UserRouter from './routes/userRoutes.js';
//require('colors');

dotenv.config();

//Connect with MongoDb
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err => {
    console.log(err.message);
}));

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan("dev"));

//Routes
app.use("/api/personals/", personalRouter);
app.use("/api/services/",  serviceRouter);
app.use("/api/missions/", missionRouter);
app.use("/api/departement/", departementRouter);
app.use("/api/user/", UserRouter);
app.use("/api/service/", serviceRouter);


//Create PORT
const PORT = process.env.PORT || 5000;

//Listen
app.listen(PORT, () => {
    console.log(`Serve on the port : http://localhost${PORT}`);
});
