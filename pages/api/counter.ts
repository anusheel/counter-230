import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  count: number
}

let count = 0;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    count++;
    res.status(200).json({ count: count })
  } else {
    res.status(405).end() // Method Not Allowed
  }
}