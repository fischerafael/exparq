import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../src/services/mongodb";
import { Project } from "../../../../src/services/mongodb/Project";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db();

  const { method, body, query } = req;
  const { id } = query;

  if (method === "GET") {
    try {
      const project = await Project.findById(id);

      if (!project) res.status(404).json({ project: "Not Found" });

      return res.status(200).json({ project });
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }

  if (method === "PUT") {
    try {
      const hasProject = await Project.findById(id);

      if (!hasProject) throw new Error("Project not found");

      const updatedProject = await Project.findByIdAndUpdate(id, body, {
        new: true,
      });

      return res.status(200).json({ updatedProject });
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }
}
