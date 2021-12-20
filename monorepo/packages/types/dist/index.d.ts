import { UserSchema, AddressSchema, Datetime, BrandPartnerInfoSchema } from "mdTypes";
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
    readonly getMDUserSettings: (request: RequestType) => Promise<SettingsInitialDataSearchObject>;
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
export declare type SettingsInitialDataSearchObject = {
    readonly data: SettingsInitialData;
};
export declare type SettingsInitialData = {
    readonly currentUser: Pick<UserSchema, "id" | "firstName" | "lastName" | "email" | "phoneNumber" | "companyName" | "hasTfaBackupCodes" | "twoFactorEnabled"> & {
        readonly businessAddress: Pick<AddressSchema, "streetAddress1" | "streetAddress2" | "city" | "countryCode" | "zipcode" | "state">;
    } & {
        readonly tfaTokenSentTime: Pick<Datetime, "iso8061">;
    };
    readonly currentBrandPartner: Pick<BrandPartnerInfoSchema, "professionalTitle">;
};
export declare type RequestType = {};
//# sourceMappingURL=index.d.ts.map