import { createContext, ReactNode, useContext, useState } from "react";

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
