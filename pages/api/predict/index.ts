import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      return res.status(201).json(body);
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }
}
