import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../src/services/mongodb";
import { Project } from "../../../src/services/mongodb/Project";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db();

  const { method, body, query } = req;

  if (method === "POST") {
    try {
      const project = await Project.create(body);

      return res.status(201).json({ project });
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }

  if (method === "GET") {
    const { userId, projectType } = query;

    try {
      const projects = await Project.find({ userId }).where({ projectType });

      return res.status(200).json({ projects });
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }

  try {
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}
