import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Script from "next/dist/client/script";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleFinish = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleFinish);
  }, [router]);
  return (
    <Provider store={store}>
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
