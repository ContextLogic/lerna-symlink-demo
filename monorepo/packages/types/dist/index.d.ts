export declare type User = {
    readonly id: string;
    readonly name: string;
};
export declare type Merchant = {
    readonly id: string;
    readonly merchantname: string;
};
export declare type UserService = {
    readonly getUser: (id: string) => User;
    readonly findUser: (id: string) => User;
};
export declare type MerchantService = {
    readonly getMerchant: (id: string) => Merchant;
    readonly findMerchant: (id: string) => Merchant;
    readonly getSearchResult: () => Promise<any>;
};
export declare type GQLService = {
    readonly getSpaceXLaunches: (limit: number) => Promise<any>;
};
export declare type SearchObject = {
    readonly data: DataObject;
};
export declare type DataObject = {
    readonly items: ReadonlyArray<Item>;
};
export declare type Item = {
    readonly link: string;
};
//# sourceMappingURL=index.d.ts.map