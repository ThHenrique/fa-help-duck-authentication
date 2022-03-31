import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import User from '../models/User';

export default async function authMiddleware(req: Request, res: Response) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim()

  const userRepository = AppDataSource.getMongoRepository(User)

  const { email } = req.body
  const user = await userRepository.findOne({ where: { email } });

  if (!user) {
    res.statusCode = 401
    return res.json({
      "authorized": false
    })
  }

  try {
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