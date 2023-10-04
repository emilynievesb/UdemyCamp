import { Router } from "express";
import { limitPets, limitSize } from "../utils/limit.js";
import { postCommentController } from "../controllers/postControllers.js";
import { postCommentDTO } from "./DTO/postDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post(
    "/postComment",
    limitPets,
    limitSize,
    postCommentDTO,
    postCommentController
  );
  return router;
};

export { postInitRoute };
