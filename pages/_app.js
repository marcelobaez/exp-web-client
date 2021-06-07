import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ConfigProvider } from "antd";
import esES from "antd/lib/locale/es_ES";
import { makeServer } from "../mirage";

if (process.env.NODE_ENV === "production") {
  makeServer({ environment: "production" });
}

export default function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ConfigProvider locale={esES}>
          <Component {...pageProps} />
        </ConfigProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
