import { useEffect, useState } from "react";
import { IProject } from "../interfaces/IProject";
import { api } from "../services/axios";

interface Props {
  userEmail?: string;
  projectType?: "reference" | "project";
}

export const useGetProjectsByUser = ({ userEmail, projectType }: Props) => {
  const [projects, setProjects] = useState([] as IProject[]);

  const DEFAULT_EMAIL = "wakeup";
  const DEFAULT_PROJECT_TYPE = "wakeup";

  useEffect(() => {
    (async () => {
      api
        .get(
          `/projects?userId=${userEmail || DEFAULT_EMAIL}&projectType=${
            projectType || DEFAULT_PROJECT_TYPE
          }`
        )
        .then((res) => {
          const projects = res.data.projects as IProject[];
          setProjects(projects);
        })
        .catch((err) => {
          console.log("ERROR LOADING REFERENCES", err);
        });
    })();
  }, [userEmail, projectType]);

  return { projects, setProjects };
};
