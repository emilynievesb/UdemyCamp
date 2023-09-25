import { Router } from "express";
import {
  getEmailController,
  getUserController,
} from "../controllers/getControllers.js";
import { limitPets, limitSize } from "../utils/limit.js";
import { getEmailDTO, getUserDTO } from "./DTO/getDTO.js";

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
  return router;
};

export { getInitRoute };
