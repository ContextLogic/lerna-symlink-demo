import React, { ReactElement, useContext } from "react";
import types from "types";  
import axios from "axios";

type svcObjectMap = {
    user: types.UserService,
    merchant: types.MerchantService
};

const userSvcObject: types.UserService = {
    getUser: (id: string) : types.User => {
        return {
            id : "1",
            name: "asdf"
        }
    },
    findUser: (id: string) : types.User => {
        return {
            id : "1",
            name: "asdf"
        }
    }
}

const merchantSvcObject: types.MerchantService = {
    getMerchant: (id: string) : types.Merchant => {
        return {
            id : "1",
            merchantname: "asdf"
        }
    },
    findMerchant: (id: string) : types.Merchant => {
        return {
            id : "1",
            merchantname: "asdf"
        }
    },
    getSearchResult: async () : Promise<types.SearchObject> => {
        const callString = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCqWcIPnxmD1yawBc2eNhVVgVs_uSI1Hyk&cx=8dedd47a8c8b92bb1&q=wish parcel service"
        const ret = {}
        try {
          const response = await axios.get(callString);
          const resp2 = response as types.SearchObject;
          console.log(resp2.data.items[0].link);
          console.log(response);
          console.log("default context");
          return(response as types.SearchObject)
        } catch (error) {
          console.error(error);
          return(ret as types.SearchObject)
        }
    }
}

const defaultContext = {
    user: userSvcObject,
    merchant: merchantSvcObject
}

export const GenericContext = React.createContext<svcObjectMap>(defaultContext);

// export const GenericProvider = GenericContext.Provider;

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

export const useGenericProviderContext = (): any =>
  useContext(GenericContext);