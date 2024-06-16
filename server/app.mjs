
import express from 'express';
import healthController from './src/controller/health.controller.js';
import router from './router/router.js';


const app = express();  /// create express app


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));








app.use("/api", router);

app.get('/health', healthController);

app.use("*", (req, res) => {
    res.status(404).send("Not found this page in backend server");
});

export default app;