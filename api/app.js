import express from "express";
import session from "express-session";
import cors from "cors";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { Strategy as DiscordStrategy } from "passport-discord";
import passport from "passport";
import { authentication, credentials, front } from "./utils/config.js";
import { initAPIRoutes } from "./routes/routes.js";
import { loginRoute } from "./routes/authRoute.js";
import MongoStore from "connect-mongo";

const app = express();
const corsOptions = {
  origin: `http://${front.host}:${front.port}`,
  allowedHeaders: ["Content-Type", "Authorization", "idVideo"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(express.json()); //! Middleaware para leer json
app.use(
  session({
    secret: credentials.secret,
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${credentials.user}:${credentials.pass}@cluster0.wibpscy.mongodb.net/${credentials.db}`,
    }),
    ttl: 1 * 24 * 60 * 60,
    autoRemove: "interval",
    autoRemoveInterval: 0.5,
    cookie: {
      maxAge: 3600000 * 3,
      secure: false,
      httpOnly: true,
    },
  })
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use("/api", initAPIRoutes());
app.use("/auth", loginRoute);

export default app;
