import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import "../styles/globals.css";

import client from "./client/apollo_client";
import PageLayout from "./layouts/layout";
import hive from "../store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={hive}>
      <PageLayout>
        <ApolloProvider client={client}>
          {" "}
          <Component {...pageProps} />
        </ApolloProvider>
      </PageLayout>
    </Provider>
  );
}
