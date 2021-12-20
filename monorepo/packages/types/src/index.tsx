import {
  UserSchema,
  AddressSchema,
  Datetime,
  BrandPartnerInfoSchema,
} from "mdTypes";

export type User = {
  readonly id: string;
  readonly name: string;
};

export type Merchant = {
  readonly id: string;
  readonly merchantname: string;
};

export type UserService = {
  readonly getUser: (id: string) => User;
  readonly findUser: (id: string) => User;
};

export type MerchantService = {
  readonly getMerchant: (id: string) => Merchant;
  readonly findMerchant: (id: string) => Merchant;
  readonly getSearchResult: () => Promise<any>;
};

export type GQLService = {
  readonly getSpaceXLaunches: (limit: number) => Promise<any>;
  readonly getMDUserSettings: (
    request: RequestType
  ) => Promise<SettingsInitialDataSearchObject>;
};

export type SearchObject = {
  readonly data: DataObject;
};

export type DataObject = {
  readonly items: ReadonlyArray<Item>;
};

export type Item = {
  readonly link: string;
};

export type SettingsInitialDataSearchObject = {
  readonly data: SettingsInitialData;
};

export type SettingsInitialData = {
  readonly currentUser: Pick<
    UserSchema,
    | "id"
    | "firstName"
    | "lastName"
    | "email"
    | "phoneNumber"
    | "companyName"
    | "hasTfaBackupCodes"
    | "twoFactorEnabled"
  > & {
    readonly businessAddress: Pick<
      AddressSchema,
      | "streetAddress1"
      | "streetAddress2"
      | "city"
      | "countryCode"
      | "zipcode"
      | "state"
    >;
  } & {
    readonly tfaTokenSentTime: Pick<Datetime, "iso8061">;
  };
  readonly currentBrandPartner: Pick<
    BrandPartnerInfoSchema,
    "professionalTitle"
  >;
};

export type RequestType = {};
