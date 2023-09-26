import express from "express";
import session from "express-session";
import cors from "cors";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { Strategy as DiscordStrategy } from "passport-discord";
import passport from "passport";
import { authentication } from "./utils/config.js";
import { initAPIRoutes } from "./routes/routes.js";
import { loginRoute } from "./routes/authRoute.js";

const app = express();
app.use(
  session({
    secret: "some secret",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(express.json()); //! Middleaware para leer json
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use("/api", initAPIRoutes());
app.use("/auth", loginRoute);

export default app;
