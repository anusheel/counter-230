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
    const { action } = req.body;
    if (action === 'increase') {
      count++;
    } else if (action === 'decrease') {
      count--;
    }
    res.status(200).json({ count: count })
  } else {
    res.status(405).end() // Method Not Allowed
  }
}