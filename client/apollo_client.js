import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

//handle errors
const errorsLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path, locations }) =>
      console.log(
        `[GraphQL Error: Message: ${message} Path:${path} , Locations : ${locations}]`
      )
    );
  }
  if (networkError) console.log(`[Network Error] :${networkError}`);
});
const httpLink = new HttpLink({
  uri: "http://localhost:5000/shop-api",
});
const client = new ApolloClient({
  ssrMode: true,
  link: from([errorsLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
