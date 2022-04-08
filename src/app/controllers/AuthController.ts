import { Request, Response } from 'express';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
// @ts-ignore
import { ObjectId } from 'mongodb';

import { AppDataSource } from '../../data-source';
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

    const token = jwt.sign({ id: user.id }, `help-duck-secret-${user.role}`, { expiresIn: '8h' })

    // @ts-expect-error proteção para o usuário, sem expor a senha para o client-side
    delete user.password;

    res.statusCode = 200
    return res.json({
      user,
      token
    })
  }

  async authorize(req: Request, res: Response) {
    try {

      const { authorization } = req.headers;

      if (!authorization) {
        return res.sendStatus(401);
      }

      const token = authorization.replace('Bearer', '').trim()

      const userRepository = AppDataSource.getMongoRepository(User)

      const id = req.body.id

      // @ts-ignore
      const user = await userRepository.findOne({ "_id": ObjectId(id) });

      if (!user) {
        res.statusCode = 401
        return res.json({
          "authorized": false
        })
      }

      jwt.verify(token, `help-duck-secret-${user.role}`);
      res.statusCode = 200
      return res.json({
        "authorized": true
      })
    } catch {
      res.statusCode = 401
      return res.json({
        "authorized": false
      })
    }
  }
}

export default new AuthController();