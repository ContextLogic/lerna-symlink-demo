import React, { ReactElement, useContext } from "react";
import * as lernaDemoTypes from "types";  

type svcObjectMap = {
    user?: lernaDemoTypes.UserService,
    merchant?: lernaDemoTypes.MerchantService
};

export const GenericContext = React.createContext<svcObjectMap | null>(null);

export const GenericProvider = <T,>({
    m, children,
}: {
    readonly m: svcObjectMap;
    readonly children: React.ReactNode;
}): ReactElement => {
    return (
        <GenericContext.Provider
            value={m}
            >
            {children}
        </GenericContext.Provider>
    );
};

export const useGenericProviderContext = (): svcObjectMap | null =>
  useContext(GenericContext);