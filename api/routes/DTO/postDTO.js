import { object, string, date } from "yup";

const postCommentDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      avatar: string().required(),
      discordID: string().required(),
      newComment: string().required(),
      username: string().required(),
    });
    const querySchema = object({
      course: string().required(),
      videoTitle: string().required(),
    });
    await productSchema.validate(req.body);
    await querySchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { postCommentDTO };
