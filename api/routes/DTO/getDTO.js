import { object, string, number, date } from "yup";

const getUserDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      username: string().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getSectionsDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      course: string().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};
const getSourcesDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      course: string().required(),
      section: string().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};
const getCommentsDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      course: string().required(),
      videoTitle: string().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};
export { getUserDTO, getSectionsDTO, getSourcesDTO, getCommentsDTO };
