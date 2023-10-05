import { connection } from "../utils/connect.js";

class Video {
  id;
  course;
  username;
  discordID;
  avatar;
  newComment;
  type;
  sectionName;
  sectionID;
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
              id: Number(this.sectionID), // Reemplaza con la sectionName deseada
            },
          },
          {
            $unwind: "$sources",
          },
          {
            $match: {
              "sources.videoTitle": this.videoTitle, // Reemplaza con el videoTitle deseado
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
        {
          $and: [
            { id: Number(this.id) },
            { "sources.videoTitle": this.videoTitle },
          ],
        },

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
