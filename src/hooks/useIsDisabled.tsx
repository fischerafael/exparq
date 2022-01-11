import { useEffect, useState } from "react";

interface IProps {
  image: string;
  location: string;
  name: string;
}

export const useIsDisabled = (generalInfo: IProps) => {
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    const { image, location, name } = generalInfo;

    if (!image) {
      setDisabled(true);
      return;
    }
    if (!location) {
      setDisabled(true);
      return;
    }
    if (!name) {
      setDisabled(true);
      return;
    }

    setDisabled(false);
  }, [generalInfo]);

  return { isDisabled };
};
