import { AppTemplate } from "../../../components/templates/AppTemplate";
import { useState } from "react";

import { useSession } from "../../../contexts/useSession";

export const BackDoorPage = () => {
  const { handleManualLogin } = useSession();

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    handleManualLogin(email);
  };

  return (
    <AppTemplate
      header={<p>backdoor</p>}
      body={
        <>
          <input
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
        </>
      }
    />
  );
};
