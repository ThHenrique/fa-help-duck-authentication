import { Router } from "express";

import AuthController from "./app/controllers/AuthController";
import authMiddleware from "./app/middlewares/authMiddlewares";

const router = Router()

router.post('/auth', AuthController.authenticate)
router.post('/auth/authorization', authMiddleware)

export default router;