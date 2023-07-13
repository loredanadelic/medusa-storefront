import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "@/lib/config";
import Layout from "@/modules/layout/templates";
import { CartProvider, useCart } from "react-use-cart";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
          <Layout>
            <div className=" min-h-screen items-center justify-between p-4 bg-white">
              <Component {...pageProps} />
            </div>
          </Layout>
      </CartProvider>
    </QueryClientProvider>
  );
}
