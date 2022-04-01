import { Router, Request, Response } from 'express';

import AuthController from "./app/controllers/AuthController";
import authMiddleware from "./app/middlewares/authMiddlewares";

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.statusCode = 200
  return res.json({
    "message": "The Bugger Duck API: Server Started OK"
  })
})
router.post('/auth', AuthController.authenticate)
router.post('/auth/authorization', authMiddleware)

export default router;