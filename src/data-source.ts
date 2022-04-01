import { DataSource } from "typeorm";
import 'dotenv/config'

import User from "./app/models/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.MONGODB_CLUSTER,
  entities: [User],
})

AppDataSource.initialize()
  .then((res) => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })