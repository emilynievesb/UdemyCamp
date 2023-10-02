import { Router } from "express";
import session from "express-session";
import DiscordStrategy from "passport-discord";
import { authentication, front } from "../utils/config.js";
import { passportStrategy } from "../utils/auth/discordStrategy.js";
const loginRoute = Router();

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({ msg: "Not authorized" });
  }
};

loginRoute.get("/discord", passportStrategy.authenticate("discord"));
loginRoute.get(
  "/redirect",
  passportStrategy.authenticate("discord", {
    failureRedirect: `http://${front.host}:${front.port}/fail`,
  }),
  (req, res) => {
    res.redirect(`http://${front.host}:${front.port}/dashboard`);
  }
);
loginRoute.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  delete req.user;
});
loginRoute.get("/status", isAuth, (req, res) => {
  req.user ? res.status(200).json(req.user) : res.status(401).end();
});
export { loginRoute };
