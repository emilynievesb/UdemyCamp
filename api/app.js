import express from "express";
import { initAPIRoutes } from "./routes/routes.js";
import cors from "cors";
import passport from "passport";
import { loginRoute } from "./routes/authRoute.js";
const app = express();

app.use(express.json()); //! Middleaware para leer json
app.use(passport.initialize());
app.use(cors());
app.use("/api", initAPIRoutes());
app.use("/auth", loginRoute);

export default app;
