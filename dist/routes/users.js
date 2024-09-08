import { Router } from "express";
import { createUser } from "../controllers/user.js";
const app = Router();
app.post("/new", createUser);
export default app;
