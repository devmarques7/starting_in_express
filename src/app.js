import express from "express";
import "dotenv/config";
import router from "./routers/application.routes";
import database from "./database/base";

const app = express();

app.use(express.json());

app.use("", router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
