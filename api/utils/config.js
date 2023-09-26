import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "SERVER");
const auth = loadEnv("development", process.cwd(), "DISCORD");

const credentials = {
  user: env.SERVER_USER,
  pass: env.SERVER_PASSWORD,
  secret: env.SERVER_PRIVATE_KEY,
  db: env.SERVER_DATABASE,
  hostname: env.SERVER_HOSTNAME,
  port: env.SERVER_PORT,
};

const authentication = {
  client: auth.DISCORD_CLIENT_ID,
  secret: auth.DISCORD_SECRET,
};

export { credentials, authentication };
