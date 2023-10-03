import { getEmail, getSections, getUser } from "../services/getServices.js";

const getUserController = async (req, res, next) => {
  try {
    const { username } = req.query;
    const result = await getUser(username);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getEmailController = async (req, res, next) => {
  try {
    const { email } = req.query;
    const result = await getEmail(email);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSectionsController = async (req, res, next) => {
  try {
    const { course } = req.query;
    const result = await getSections(course);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export { getUserController, getEmailController, getSectionsController };
