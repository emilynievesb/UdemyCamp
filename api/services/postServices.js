import { Video } from "../collections/videos.js";

const postComment = async (
  type,
  course,
  sectionID,
  videoTitle,
  username,
  discordID,
  avatar,
  newComment
) => {
  const video = new Video();
  video.type = type;
  video.course = course;
  video.id = sectionID;
  video.videoTitle = videoTitle;
  video.username = username;
  video.discordID = discordID;
  video.avatar = avatar;
  video.newComment = newComment;
  const result = type
    ? await video.postCommentText()
    : await video.postComment();
  return result;
};

export { postComment };
