import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { API_URL, queryClient } from "@/lib/config";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={API_URL}
    >
      <Component {...pageProps} />
    </MedusaProvider>
  );
}
