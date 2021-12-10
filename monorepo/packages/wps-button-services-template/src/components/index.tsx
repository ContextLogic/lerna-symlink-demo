import { FC } from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.svg';
import { GenericProvider } from './GenericContextProvider';
import axios from 'axios';
import lernaDemoTypes from "types";
import WPSButton from './WPSButton';

const userSvcObject: lernaDemoTypes.UserService = {
    getUser: (id: string) : lernaDemoTypes.User => {
        return {
            id : id,
            name: "asdf"
        }
    },
    findUser: (id: string) : lernaDemoTypes.User => {
        return {
            id : id,
            name: "asdf"
        }
    }
}

const merchantSvcObject: lernaDemoTypes.MerchantService = {
    getMerchant: (id: string) : lernaDemoTypes.Merchant => {
        return {
            id : id,
            merchantname: "asdf"
        }
    },
    findMerchant: (id: string) : lernaDemoTypes.Merchant => {
        return {
            id : id,
            merchantname: "asdf"
        }
    },
    getSearchResult: async () : Promise<lernaDemoTypes.SearchObject> => {
        const callString = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCqWcIPnxmD1yawBc2eNhVVgVs_uSI1Hyk&cx=8dedd47a8c8b92bb1&q=wish parcel service"
        const ret = {}
        try {
          const response = await axios.get(callString);
          return(response as lernaDemoTypes.SearchObject)
        } catch (error) {
          console.error(error);
          return(ret as lernaDemoTypes.SearchObject)
        }
    }
}

const svcObjectMap = {
  user: userSvcObject,
  merchant: merchantSvcObject
};

/** Home page (demo) */
const Home: FC = () => {
  return (
    <GenericProvider m={svcObjectMap}>
      <StyledContainer>
        <StyledTitle>
            <pre>create-react-app</pre> template for use in Lerna monorepo
        </StyledTitle>
        <h3>Read the README for usage details! </h3>
        <img src={Logo} alt="React logo" />
      </StyledContainer>
      <WPSButton text="hello world"></WPSButton>
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
