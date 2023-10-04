import { postComment } from "../services/postServices.js";

const postCommentController = async (req, res, next) => {
  try {
    const { username, discordID, avatar, newComment } = req.body;
    const { course, videoTitle } = req.query;
    const result = await postComment(
      course,
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
