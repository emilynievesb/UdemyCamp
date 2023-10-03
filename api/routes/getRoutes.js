import { Router } from "express";
import {
  getEmailController,
  getSectionsController,
  getUserController,
} from "../controllers/getControllers.js";
import { limitPets, limitSize } from "../utils/limit.js";
import { getEmailDTO, getSectionsDTO, getUserDTO } from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/getUser", limitPets, limitSize, getUserDTO, getUserController);
  router.get(
    "/getEmail",
    limitPets,
    limitSize,
    getEmailDTO,
    getEmailController
  );
  router.get(
    "/getSections",
    limitPets,
    limitSize,
    getSectionsDTO,
    getSectionsController
  );
  return router;
};

export { getInitRoute };
