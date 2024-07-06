import express from 'express';
import healthController from './src/controller/health.controller.js';
import morgan from 'morgan';
import allRouter from './router/router.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'


const app = express();  /// create express app


app.use(express.json());
app.use(express.urlencoded({extended: true}));  /// accept form data
app.use(morgan('dev'));

app.use(cookieParser())
app.use(cors())





 


app.use("/api", allRouter);

app.get('/health', healthController);

app.use("*", (req, res) => {
    res.status(404).send("Not found this page in backend server");
});

export default app;