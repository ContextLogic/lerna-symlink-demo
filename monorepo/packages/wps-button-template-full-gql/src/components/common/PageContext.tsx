import { createContext } from 'react';
import { GQLService, MerchantService } from 'types'; // Imported from types package

/** Package-level Service type - MODIFY THIS */
export type Services = {
  readonly gql: GQLService;
};

/** Package-level context containing service objects */
export const PageContext = createContext<Services>(
  {} as Services, // Necessary workaround since PageContext.Provider is guaranteed to wrap page
);
