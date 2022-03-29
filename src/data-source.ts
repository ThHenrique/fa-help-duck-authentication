import { DataSource } from "typeorm";
import User from "./app/models/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: "mongodb+srv://root:1234@fa-starting-no-sql.6vnsq.mongodb.net",
  database: "mercado-livre",
  entities: [User],
})

AppDataSource.initialize()
  .then((res) => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })