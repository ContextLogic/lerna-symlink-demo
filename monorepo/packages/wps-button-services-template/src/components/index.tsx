import { FC } from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.svg';
import { GenericContext, GenericProvider, useGenericProviderContext } from '../GenericContextProvider';
import React, { ReactElement } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import types from "types";

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
        console.log("hi!")
        const callString = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCqWcIPnxmD1yawBc2eNhVVgVs_uSI1Hyk&cx=8dedd47a8c8b92bb1&q=wish parcel service"
        const ret = {}
        try {
          const response = await axios.get(callString);
          const resp2 = response as types.SearchObject;
          console.log(resp2.data.items[0].link);
          console.log(response);
          return(response as types.SearchObject)
        } catch (error) {
          console.error(error);
          return(ret as types.SearchObject)
        }
    }
}

const svcObjectMap = {
  user: userSvcObject,
  merchant: merchantSvcObject
};

type Props = {
  readonly text: string;
};

const WPSButton = ({ text }: Props): ReactElement => {
  return (
    <Button
      onClick={() => {
        window.open("http://parcel.wish.com");
      }}
    >
      {text}
    </Button>
  );
};

/** Home page (demo) */
const Home: FC = () => {
  const context = React.useContext(GenericContext);
 // const context = (): typeof svcObjectMap => React.useContext(GenericContext);
  // const {
  //   svcObjectMap
  // } = useGenericProviderContext();
  return (
    <GenericProvider m={svcObjectMap}>
      <StyledContainer>
        <StyledTitle>
            <pre>create-react-app</pre> template for use in Lerna monorepo
        </StyledTitle>
        <h3>Read the README for usage details! </h3>
        <img src={Logo} alt="React logo" />
      </StyledContainer>
      <button onClick={context.merchant.getSearchResult}>
        <h3>hello world</h3>
      </button>
      {/* <WPSButton text="hello world"></WPSButton> */}
    </GenericProvider>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* React logo */
  & > img {
    height: 128px;
    width: 128px;
  }
`;

const StyledTitle = styled.h1`
  /* Inline code */
  & > pre {
    display: inline;
  }
`;

export default Home;
