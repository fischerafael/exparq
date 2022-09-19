import { Input } from "../../../components/molecules/Input";
import { AppTemplate } from "../../../components/templates/AppTemplate";

import { useSession } from "../../../contexts/useSession";

export const BackDoorPage = () => {
  const { handleManualLogin } = useSession();

  return (
    <AppTemplate
      header={<p>backdoor</p>}
      body={
        <>
          <Input label="Email" />
          <button>Entrar</button>
        </>
      }
    />
  );
};
