import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";

import client from "./client/apollo_client";
import PageLayout from "./layouts/layout";

export default function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <ApolloProvider client={client}>
        {" "}
        <Component {...pageProps} />
      </ApolloProvider>
    </PageLayout>
  );
}
