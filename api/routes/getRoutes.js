import { Router } from "express";
import {
  getCommentsController,
  getSectionsController,
  getSourcesController,
  getUserController,
} from "../controllers/getControllers.js";
import { limitPets, limitSize } from "../utils/limit.js";
import {
  getCommentsDTO,
  getSectionsDTO,
  getSourcesDTO,
  getUserDTO,
} from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/getUser", limitSize, getUserDTO, getUserController);
  router.get("/getSections", limitSize, getSectionsDTO, getSectionsController);
  router.get("/getSources", limitSize, getSourcesDTO, getSourcesController);
  router.get("/getComments", limitSize, getCommentsDTO, getCommentsController);
  return router;
};

export { getInitRoute };
