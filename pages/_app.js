import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import "../styles/globals.css";

import client from "../client/apollo_client";
import PageLayout from "./layouts/layout";
import { useStore } from "../store/store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <PageLayout>
        <ApolloProvider client={client}>
          {" "}
          <Component {...pageProps} />
        </ApolloProvider>
      </PageLayout>
     </Provider>
  );
}
