import { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const KEY = process.env.JWT_KEY;

const USERS = [
  {
    id: 1,
    email: 'test@test.com',
    password: '$2b$10$doJMyjx/ZygmFcVa.HSwyeAtajqJ5VdLcNyLmGlOViGKHJyUOj0/S',
    createdAt: '2020-06-14 18:23:45',
  }
];

export default (req: NextApiRequest, res: NextApiResponse) => {

  // const hashPwd = bcrypt.hashSync('test', 10);
  // console.log(hashPwd);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: 'error', error: 'Nome ou senha inválidos' });
  }

  const user = USERS.find(user => {
    return user.email === email;
  });

  if (!user) {
    res.status(400).json({ status: 'error', error: 'Usuário inválido' });
  }

  const userId = user.id
  const userEmail = user.email
  const userPassword = user.password
  const userCreated = user.createdAt

  bcrypt.compare(password, userPassword).then(isMatch => {
    if (isMatch) {
      const payload = {
        id: userId,
        email: userEmail,
      };
      jwt.sign(
        payload,
        KEY,
        {
          expiresIn: 31556926, // 1 year in seconds
        },
        (err, token) => {
          res.status(200).json({
            success: true,
            token: 'Bearer ' + token,
          });
        },
      );
    } else {
      res.status(400)
        .json({ status: 'error', error: 'Password incorrect' });
    }
  });
}