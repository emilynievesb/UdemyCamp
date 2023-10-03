import { Users } from "../collections/users.js";
import { Video } from "../collections/videos.js";

const getUser = async (username) => {
  const user = new Users();
  user.username = username;
  const result = await user.searchUser();
  return result;
};
const getEmail = async (email) => {
  const user = new Users();
  user.email = email;
  const result = await user.searchEmail();
  return result;
};

const getSections = async (course) => {
  const videos = new Video();
  videos.course = course;
  const result = await videos.getSections();
  return result;
};

export { getUser, getEmail, getSections };
