import { connection } from "../utils/connect.js";

class Video {
  course;
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
      const resultado = await connection
        .aggregate([
          {
            $group: {
              _id: null,
              sectionNames: { $addToSet: "$sectionName" },
            },
          },
          {
            $project: {
              _id: 0,
              sectionNames: 1,
            },
          },
        ])
        .toArray();
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
}
export { Video };
