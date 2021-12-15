import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { SearchObject } from 'types';
import Page from '../../components';

test('renders learn react link', () => {
  render(<Page
    services={{
      user: {
        getUser: (id: string) => {
          return {
            id,
            name: 'Get User',
          };
        },
        findUser: (id: string) => {
          return {
            id,
            name: 'Find User',
          };
        },
      },
      merchant: {
        getMerchant: (id: string) => {
          return {
            id,
            merchantname: 'Get Merchant',
          };
        },
        findMerchant: (id: string) => {
          return {
            id,
            merchantname: 'Find Merchant',
          };
        },
        getSearchResult: async () => {
          const callString =
            'https://www.googleapis.com/customsearch/v1?key=AIzaSyCqWcIPnxmD1yawBc2eNhVVgVs_uSI1Hyk&cx=8dedd47a8c8b92bb1&q=wish parcel service';
          const ret = {};
          try {
            const response = await axios.get(callString);
            return response as SearchObject;
          } catch (error) {
            console.error(error);
            return ret as SearchObject;
          }
        },
      },
    }}
    text='Wish Parcel Service'
  />);

  expect(screen.getByText('create-react-app')).toBeInTheDocument();
  expect(
    screen.getByText('template for use in Lerna monorepo'),
  ).toBeInTheDocument();
});
