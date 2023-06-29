import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { API_URL, queryClient } from "@/lib/config";
import Layout from "@/modules/layout/templates";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={API_URL}
    >
      <Layout>
        <div className=" min-h-screen items-center justify-between p-4 bg-white">
          <Component {...pageProps} />
        </div>
      </Layout>
    </MedusaProvider>
  );
}
