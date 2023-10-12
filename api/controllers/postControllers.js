import { postComment } from "../services/postServices.js";

const postCommentController = async (req, res, next) => {
  try {
    const { username, discordID, avatar, newComment } = req.body;
    const { type, course, videoTitle, sectionID } = req.query;
    console.log(
      type,
      username,
      discordID,
      avatar,
      newComment,
      course,
      videoTitle,
      sectionID
    );
    const result = await postComment(
      type,
      course,
      sectionID,
      videoTitle,
      username,
      discordID,
      avatar,
      newComment
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export { postCommentController };
