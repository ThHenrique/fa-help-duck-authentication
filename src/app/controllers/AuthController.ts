import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const userRepository = AppDataSource.getMongoRepository(User)

    const { email, password } = req.body;

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: user.id }, `help-duck-secret-${user.role}`, { expiresIn: '1d' })

    // @ts-expect-error proteção para o usuário, sem expor a senha para o client-side
    delete user.password;

    return res.json({
      user,
      token
    })
  }

  async test(req: Request, res: Response) {
    return res.json({
      "message": "ok"
    })
  }
}

export default new AuthController();