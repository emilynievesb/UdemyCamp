import { object, string, date } from "yup";

const postUserDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      username: string().required(),
      email: string().required(),
      password: string().required(),
      fechaNacimiento: date().required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { postUserDTO };
