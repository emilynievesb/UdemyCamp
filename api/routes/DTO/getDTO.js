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

const getEmailDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      email: string().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { getUserDTO, getEmailDTO };
