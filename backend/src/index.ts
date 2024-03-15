import express from "express";
import "./connection/conn";
import route from "./router/Router";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(route);

app.listen(5000, () => console.log("server started on port 5000"));
