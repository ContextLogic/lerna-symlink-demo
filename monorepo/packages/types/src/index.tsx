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
