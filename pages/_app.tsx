import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
    >
      <Component {...pageProps} />
    </MedusaProvider>
  );
}
