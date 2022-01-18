import { useEffect, useState } from "react";

export const useLoading = (initialState: boolean = true, dependency?: any) => {
  const [isLoading, setLoading] = useState(initialState);

  useEffect(() => {
    if (!dependency) {
      setLoading(true);
      return;
    }
    setLoading(false);
  }, [dependency]);

  return {
    isLoading,
    setLoading,
  };
};
