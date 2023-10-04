import { Video } from "../collections/videos.js";

const postComment = async (
  course,
  videoTitle,
  username,
  discordID,
  avatar,
  newComment
) => {
  const video = new Video();
  video.course = course;
  video.videoTitle = videoTitle;
  video.username = username;
  video.discordID = discordID;
  video.avatar = avatar;
  video.newComment = newComment;
  const result = await video.postComment();
  return result;
};

export { postComment };
