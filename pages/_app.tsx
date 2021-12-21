import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "../src/contexts/useSession";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* <Head>
        <script src="//unpkg.com/brain.js" />
      </Head> */}
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
