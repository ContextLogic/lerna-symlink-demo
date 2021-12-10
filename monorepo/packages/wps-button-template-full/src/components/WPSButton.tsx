import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { MerchantService } from 'types';
import useService from '../utils/useService';

type Props = {
  readonly text: string;
};

const WPSButton = ({ text }: Props): ReactElement => {
  const merchantService: MerchantService = useService('merchant');

  return (
    <Button
      id={'full-demo'}
      onClick={async () => {
        await merchantService?.getSearchResult().then((res) => {
          res.data?.items?.length > 0 && window.open(res.data.items[0]?.link);
        });
      }}>
      {text}
    </Button>
  );
};

export default WPSButton;
