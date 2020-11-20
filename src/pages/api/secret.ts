import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_KEY;

export default function (req: NextApiRequest, res: NextApiResponse) {

  try {
    const { token } = req.body
    const logged = jwt.verify(token, KEY)

    if (logged === null) {
      res.status(200).json({ logged: false, Error: 'Invalid token' })
    } else {
      res.status(200).json({ logged: true, Error: '' })
    }
  } catch (error) {
    res.status(200).json({ logged: false, Error: error })
  }
}
