import { postUser } from "../services/postServices.js";

const postUserController = async (req, res, next) => {
  try {
    const { username, password, email, fechaNacimiento } = req.body;
    const result = await postUser(username, password, email, fechaNacimiento);
    // if (result.length === 0) {
    //   res.status(200).json("El paciente no ha tenido citas finalizadas");
    //   return;
    // }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export { postUserController };
