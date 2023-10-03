import { Router } from "express";
import {
  getSectionsController,
  getSourcesController,
  getUserController,
} from "../controllers/getControllers.js";
import { limitPets, limitSize } from "../utils/limit.js";
import { getSectionsDTO, getSourcesDTO, getUserDTO } from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/getUser", limitPets, limitSize, getUserDTO, getUserController);
  router.get(
    "/getSections",
    limitPets,
    limitSize,
    getSectionsDTO,
    getSectionsController
  );
  router.get(
    "/getSources",
    limitPets,
    limitSize,
    getSourcesDTO,
    getSourcesController
  );
  return router;
};

export { getInitRoute };
