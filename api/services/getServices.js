import { Users } from "../collections/users.js";
import { Video } from "../collections/videos.js";

const getUser = async (username) => {
  const user = new Users();
  user.username = username;
  const result = await user.searchUser();
  return result;
};

const getSections = async (course) => {
  const videos = new Video();
  videos.course = course;
  const result = await videos.getSections();
  return result;
};
const getSources = async (course, section) => {
  const videos = new Video();
  videos.course = course;
  videos.sectionName = section;
  const result = await videos.getSources();
  return result;
};
const getComments = async (course, videoTitle) => {
  const videos = new Video();
  videos.course = course;
  videos.videoTitle = videoTitle;
  const result = await videos.getComments();
  return result;
};
export { getUser, getSections, getSources, getComments };
