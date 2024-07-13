import express from 'express';
import healthController from './src/controller/health.controller.js';
import morgan from 'morgan';
import allRouter from './router/router.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import ApiResponse from './src/utils/apiResponse.js';


const app = express();  /// create express app


app.use(express.json());
app.use(express.urlencoded({extended: true}));  /// accept form data
app.use(morgan('dev'));

app.use(cookieParser())
app.use(cors())





app.get('/api/getkey', (req, res) => {

    res
    .json(
        new ApiResponse(200, "key fetched successfully", process.env.RAZORPAY_KEY_ID)
    );
})
 


app.use("/api", allRouter);

app.get('/health', healthController);

app.use("*", (req, res) => {
    res.status(404).send("Not found this page in backend server");
});

export default app;