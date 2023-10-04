import { connection } from "../utils/connect.js";

class Video {
  course;
  username;
  discordID;
  avatar;
  newComment;
  type;
  sectionName;
  videoTitle;
  videoUrl;
  links;
  texto;
  title;
  constructor() {}
  async connect() {
    try {
      const result = await connection(this.course);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getSections() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find({}).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async getSources() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({ sectionName: this.sectionName })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async getComments() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              sectionName: "Sección 1: Introducción", // Reemplaza con la sectionName deseada
            },
          },
          {
            $unwind: "$sources",
          },
          {
            $match: {
              "sources.videoTitle": "Introducción al curso", // Reemplaza con el videoTitle deseado
            },
          },
          {
            $project: {
              _id: 0,
              comments: "$sources.comments",
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async postComment() {
    try {
      const connection = await this.connect();
      const resultado = await connection.updateOne(
        { "sources.videoTitle": this.videoTitle },
        {
          $push: {
            "sources.$.comments": {
              discordID: this.discordID,
              username: this.username,
              avatar: this.avatar,
              newComment: this.newComment,
            },
          },
        }
      );
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Video };
