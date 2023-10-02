import DiscordStrategy from "passport-discord";
import { authentication, credentials } from "../config.js";
import passport from "passport";
import session from "express-session";
import { Users } from "../../collections/users.js";

passport.use(
  new DiscordStrategy(
    {
      clientID: authentication.client,
      clientSecret: authentication.secret,
      callbackURL: `http://${credentials.hostname}:${credentials.port}/auth/redirect`,
      // Cambia esto según tu configuración
      scope: ["identify", "guilds", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const userGuild = profile.guilds.find(
          (guild) =>
            guild.id === "1101581994355347526" &&
            guild.name === "CampusLands 🚀"
        );
        if (userGuild) {
          const existingUser = new Users({
            username: profile.username,
            discordId: profile.id,
            email: profile.email,
            avatar: profile.avatar,
          });
          const searchUser = await existingUser.searchUser();
          if (searchUser.length === 0) {
            await existingUser.postUser();
          }
          return done(null, profile);
        } else {
          done("'Usuario no pertenece a campuslands'", null);
        }
      } catch (error) {
        done(error, null);
        throw error;
      }
    }
  )
);

export { passport as passportStrategy };
