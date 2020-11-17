import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_KEY;

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;
  const { loged } = jwt.verify(token, KEY) as { [key: string]: boolean }

  res.json({ loged: true })
}
