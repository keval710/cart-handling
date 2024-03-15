import express from "express";
import { getProductController } from "../controller/getProductController";

const route = express.Router();

route.get("/products", getProductController);
route.post("/placeOrder")

export default route;
