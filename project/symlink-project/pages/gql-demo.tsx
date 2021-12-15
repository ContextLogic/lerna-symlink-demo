import Page from "wps-button-template-full-gql";
import lernaDemoTypes from "types";
import { gql } from "graphql-tag";
import { useLazyQuery } from "../src/util";
import axios from "axios";

const GQL_QUERY = gql`
  query getPastSpaceXLaunches($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;

const gqlSvcObject: lernaDemoTypes.GQLService = {
  getSpaceXLaunches: (limit: number): Promise<lernaDemoTypes.SearchObject> => {
    return useLazyQuery(GQL_QUERY)({
      limit: limit,
    });
  },
};

const merchantSvcObject: lernaDemoTypes.MerchantService = {
  getMerchant: (id: string): lernaDemoTypes.Merchant => {
    return {
      id: id,
      merchantname: "asdf",
    };
  },
  findMerchant: (id: string): lernaDemoTypes.Merchant => {
    return {
      id: id,
      merchantname: "asdf",
    };
  },
  getSearchResult: async (): Promise<lernaDemoTypes.SearchObject> => {
    const callString =
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCqWcIPnxmD1yawBc2eNhVVgVs_uSI1Hyk&cx=8dedd47a8c8b92bb1&q=wish parcel service";
    const ret = {};
    try {
      const response = await axios.get(callString);
      return response as lernaDemoTypes.SearchObject;
    } catch (error) {
      console.error(error);
      return ret as lernaDemoTypes.SearchObject;
    }
  },
};

const svcObjectMap = {
  gql: gqlSvcObject,
  merchant: merchantSvcObject,
};

export default function Template() {
  return <Page text="WPS Service Button" services={svcObjectMap}></Page>;
}
