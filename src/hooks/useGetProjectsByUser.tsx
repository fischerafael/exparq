import { useEffect, useState } from "react";
import { IProject } from "../interfaces/IProject";
import { api } from "../services/axios";
import { useLoading } from "./useLoading";
import { useSession } from "../contexts/useSession";

interface Props {
  projectType?: "reference" | "project";
}

export const useGetProjectsByUser = ({ projectType }: Props) => {
  const { sessionUserData } = useSession();
  const { isLoading, setLoading } = useLoading(true);

  const [projects, setProjects] = useState([] as IProject[]);

  const DEFAULT_EMAIL = "wakeup";
  const DEFAULT_PROJECT_TYPE = "wakeup";

  useEffect(() => {
    (async () => {
      api
        .get(
          `/projects?userId=${
            sessionUserData.email || DEFAULT_EMAIL
          }&projectType=${projectType || DEFAULT_PROJECT_TYPE}`
        )
        .then((res) => {
          const projects = res.data.projects as IProject[];
          setProjects(projects);
        })
        .catch((err) => {
          console.log("ERROR LOADING REFERENCES", err);
        })
        .finally(() => {
          setLoading(false);
        });
    })();
  }, [sessionUserData, projectType]);

  return { projects, setProjects, isLoading };
};
