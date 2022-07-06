import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Script from "next/dist/client/script";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <Head>
        <title>BreakingEventsHub</title>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {router.pathname === "/login" || router.pathname === "/register" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}

export default MyApp;
