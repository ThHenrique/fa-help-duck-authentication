import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const userRepository = AppDataSource.getMongoRepository(User)

    const { nome, password } = req.body;

    const user = await userRepository.findOne({ where: { nome } });
    console.log(user);

    if (!user) {
      return res.sendStatus(401);
    }

    // const isValidPassword = await bcrypt.compare(password, user.password)
    // const isValidPassword = password == user.password;

    // console.log(password);
    // console.log(user.password);

    // if (!isValidPassword) {
    //   console.log('oi');

    //   return res.sendStatus(401)
    // }

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1d' })

    return res.json({
      user,
      token
    })
  }
}

export default new AuthController();