import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookie from "js-cookie";
import Router from "next/router";

interface ISessionUserData {
  displayName: string;
  email: string;
  photoURL: string;
}

interface ISessionContextProps {
  sessionUserData: ISessionUserData;
  setSessionUserData: (data: ISessionUserData) => void;
}

const SessionContext = createContext({} as ISessionContextProps);

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessionUserData, setSessionUserData] = useState<ISessionUserData>({
    displayName: "",
    email: "",
    photoURL: "",
  });

  useEffect(() => {
    const cookies = Cookie.get("@ux");

    if (!cookies) {
      Router.push("/");
      return;
    }

    const parsedCookies = JSON.parse(cookies);
    setSessionUserData(parsedCookies);
    Router.push("/app");
  }, []);

  return (
    <SessionContext.Provider value={{ sessionUserData, setSessionUserData }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  return useContext(SessionContext);
};

export { SessionProvider, useSession };
