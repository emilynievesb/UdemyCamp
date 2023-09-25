import { Router } from "express";
import { postUserController } from "../controllers/postControllers.js";
import { limitPets, limitSize } from "../utils/limit.js";
import { postUserDTO } from "./DTO/postDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post(
    "/agregarUser",
    limitPets,
    limitSize,
    postUserDTO,
    postUserController
  );
  return router;
};

export { postInitRoute };
