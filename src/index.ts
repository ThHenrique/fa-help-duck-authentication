import "reflect-metadata"
import express from 'express';
import swaggerUi from "swagger-ui-express";

import swaggerDocs from "./swagger.json"
import cors from 'cors';
import routes from './routes';

const port = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(port, () => {
  console.log(`The Bugger Duck API: Server Started at http://localhost:${port}`)
});