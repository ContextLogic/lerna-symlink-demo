import React from "react";
import { useApollo } from "../src/clients/apolloClient";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
