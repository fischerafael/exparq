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

  if (method === "PUT") {
    try {
      const { projectId } = query;

      const hasProject = await Project.findById(projectId);

      if (!hasProject) throw new Error("Project not found");

      const updatedProject = await Project.findByIdAndUpdate(projectId, body, {
        new: true,
      });

      return res.status(200).json({ updatedProject });
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }

  if (method === "DELETE") {
    try {
      const { projectId } = query;

      const hasProject = await Project.findById(projectId);

      if (!hasProject) throw new Error("Project not found");

      await Project.findByIdAndRemove(projectId);

      return res.status(200).json({ message: "Project deleted successfully" });
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }
}
