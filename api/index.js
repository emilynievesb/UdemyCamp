import app from "./app.js";
import { credentials } from "./utils/config.js";
const config = {
  hostname: credentials.hostname,
  port: parseInt(credentials.port, 10),
};
const main = () => {
  // configuracion de env
  app.listen(config, () =>
    console.log(`http://${config.hostname}:${config.port}`)
  );

  console.log(`Running...`);
};

// funcion que arranca todo
main();
