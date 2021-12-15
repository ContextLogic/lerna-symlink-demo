import React from "react";
import { useApollo } from "./clients/apolloClient";
import { OperationVariables, DocumentNode } from "@apollo/client";

export function useLazyQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode
) {
  const client = useApollo(null);
  return React.useCallback(
    (variables: TVariables) =>
      client.query<TData, TVariables>({
        query: query,
        variables: variables,
      }),
    [client]
  );
}
