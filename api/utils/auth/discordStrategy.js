import DiscordStrategy from "passport-discord";
import { authentication } from "../config.js";
import passport from "passport";
import session from "express-session";
import { Users } from "../../collections/users.js";

passport.use(
  new DiscordStrategy(
    {
      clientID: authentication.client,
      clientSecret: authentication.secret,
      callbackURL: "http://127.0.0.1:3000/auth/redirect", // Cambia esto según tu configuración
      scope: ["identify", "guilds", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        const existingUser = new Users({
          username: profile.username,
          discordId: profile.id,
          email: profile.email,
          avatar: profile.avatar,
        });
        const searchUser = await existingUser.searchUser();
        console.log(searchUser);
        if (searchUser.length === 0) {
          await existingUser.postUser();
        }
        return done(null, profile);
      } catch (error) {
        done(error, null);
        throw error;
      }
    }
  )
);

export { passport as passportStrategy };
