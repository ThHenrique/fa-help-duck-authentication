import "reflect-metadata"
import express from 'express';
import swaggerUi from "swagger-ui-express";

import swaggerDocs from "./swagger.json"

import routes from './routes';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));