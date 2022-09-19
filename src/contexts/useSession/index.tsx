import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookie from "js-cookie";
import Router from "next/router";
import { handleGoogleLogIn } from "../../services/firebase";
import { useRouter } from "next/router";

interface ISessionUserData {
  displayName: string;
  email: string;
  photoURL: string;
}

interface ISessionContextProps {
  sessionUserData: ISessionUserData;
  setSessionUserData: (data: ISessionUserData) => void;
  handleLogin: () => Promise<void>;
  handleLogout: () => void;
  handleManualLogin: (email: string) => void;
}

const SessionContext = createContext({} as ISessionContextProps);

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessionUserData, setSessionUserData] = useState<ISessionUserData>({
    displayName: "",
    email: "",
    photoURL: "",
  });

  const { asPath } = useRouter();

  useEffect(() => {
    const cookies = Cookie.get("@ux");

    if (!cookies && asPath.includes("app")) {
      Router.push("/");
      return;
    }

    if (cookies) {
      const parsedCookies = JSON.parse(cookies);
      setSessionUserData(parsedCookies);
      // Router.push("/app");
    }
  }, []);

  const handleLogin = async () => {
    try {
      const { displayName, email, photoURL } = await handleGoogleLogIn();

      if (!displayName || !email || !photoURL)
        throw new Error("Missing Information");

      const userData = { displayName, email, photoURL };

      setSessionUserData(userData);
      Cookie.set("@ux", JSON.stringify(userData));
      Router.push("/app");
    } catch (e: any) {
      throw new Error("Unable to login with Google");
    }
  };

  const handleManualLogin = async (email: string) => {
    const userData = { displayName: "backdoor", email: email, photoURL: "" };
    setSessionUserData(userData);
    Cookie.set("@ux", JSON.stringify(userData));
    Router.push("/app");
  };

  const handleLogout = () => {
    Cookie.remove("@ux");
    setSessionUserData({ displayName: "", email: "", photoURL: "" });
    Router.push("/");
  };

  return (
    <SessionContext.Provider
      value={{
        sessionUserData,
        setSessionUserData,
        handleLogin,
        handleLogout,
        handleManualLogin,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  return useContext(SessionContext);
};

export { SessionProvider, useSession };
