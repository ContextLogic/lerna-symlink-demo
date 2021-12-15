/*
    This file hydrates the index.html with the top-level React page for local testing.
*/

import ReactDOM from 'react-dom';
import Page from 'components';

ReactDOM.render(
  <Page
    services={{
      gql: {
        getSpaceXLaunches: async (limit: number) => {
          return {
            launchesPast: [
              {
                mission_name: 'Starlink-15 (v1.0)',
                launch_date_local: '2020-10-24T11:31:00-04:00',
                launch_site: {
                  site_name_long:
                    'Cape Canaveral Air Force Station Space Launch Complex 40',
                },
              },
            ],
          };
        },
      },
    }}
    text="Wish Parcel Service"
  />,
  document.getElementById('root'),
);
