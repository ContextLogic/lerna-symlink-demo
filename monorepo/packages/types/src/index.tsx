import axios from 'axios';

export const userSvcObject: UserService = {
    getUser: (id: string) : User => {
        return {
            id : "1",
            name: "asdf"
        }
    },
    findUser: (id: string) : User => {
        return {
            id : "1",
            name: "asdf"
        }
    }
}

export const merchantSvcObject: MerchantService = {
    getMerchant: (id: string) : Merchant => {
        return {
            id : "1",
            merchantname: "asdf"
        }
    },
    findMerchant: (id: string) : Merchant => {
        return {
            id : "1",
            merchantname: "asdf"
        }
    },
    getSearchResult: async () : Promise<SearchObject> => {
        const callString = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCqWcIPnxmD1yawBc2eNhVVgVs_uSI1Hyk&cx=8dedd47a8c8b92bb1&q=wish parcel service"
        const ret = {}
        try {
          const response = await axios.get(callString);
          const resp2 = response as SearchObject;
          console.log(resp2.data.items[0].link);
          console.log(response);
          return(response as SearchObject)
        } catch (error) {
          console.error(error);
          return(ret as SearchObject)
        }
    }
}

export type User = {
    readonly id: string;
    readonly name: string;
}

export type Merchant = {
    readonly id: string;
    readonly merchantname: string;
}

export type UserService = {
    readonly getUser:  (id: string) => User,
    readonly findUser:  (id: string) => User,
}

export type MerchantService = {
    readonly getMerchant:  (id: string) => Merchant,
    readonly findMerchant:  (id: string) => Merchant,
    readonly getSearchResult: () => Promise<any>,
}

export type SearchObject = {
    readonly data: DataObject
};

export type DataObject = {
    readonly items: ReadonlyArray<Item>
};

export type Item = {
    readonly link: string
};