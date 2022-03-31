import { DataSource } from "typeorm";
import User from "./app/models/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: "mongodb+srv://<user>:<password>@<domain>",
  database: "api3",
  entities: [User],
})

AppDataSource.initialize()
  .then((res) => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })