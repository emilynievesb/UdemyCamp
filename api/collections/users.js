import { connection } from "../utils/connect.js";

class Users {
  username;
  discordId;
  email;
  avatar;
  rol;
  constructor({ username, discordId, email, avatar }) {
    this.username = username;
    this.discordId = discordId;
    this.email = email;
    this.avatar = avatar;
  }
  async connect() {
    try {
      const result = await connection("users");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async searchUser() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({ discordID: this.discordId })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async searchEmail() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find({ email: this.email }).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async postUser() {
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        username: this.username,
        discordID: this.discordId,
        email: this.email,
        avatar: this.avatar,
        rol: "usuario",
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Users };
