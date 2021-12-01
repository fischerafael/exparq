import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "../src/contexts/useSession";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
