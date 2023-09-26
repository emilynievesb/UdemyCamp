import { Router } from "express";
import session from "express-session";
import DiscordStrategy from "passport-discord";
import { authentication } from "../utils/config.js";
import { passportStrategy } from "../utils/auth/discordStrategy.js";
const loginRoute = Router();

loginRoute.get("/discord", passportStrategy.authenticate("discord"));
loginRoute.get(
  "/redirect",
  passportStrategy.authenticate("discord", { failureRedirect: "/auth/fail" }),
  (req, res) => {
    // Autenticación exitosa, puedes redirigir al usuario a una página de inicio de sesión, por ejemplo.
    res.redirect("/auth/");
  }
);
loginRoute.get("/", (req, res) => {
  res.send("Logeo exitosooooooooooooooooooooooooooooooo");
});
loginRoute.get("/fail", (req, res) => {
  res.send("Paila mi pa");
});
export { loginRoute };
