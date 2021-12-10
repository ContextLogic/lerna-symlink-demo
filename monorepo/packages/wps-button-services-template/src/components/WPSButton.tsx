import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { useGenericProviderContext } from './GenericContextProvider';

type Props = {
  readonly text: string;
};

const WPSButton = ({ text }: Props): ReactElement => {
  const newMap = useGenericProviderContext();
  return (
    <Button
      id={'service-test'}
      onClick={async () => {
        await newMap?.merchant?.getSearchResult().then((res) => {
          res.data?.items?.length > 0 && window.open(res.data.items[0]?.link);
        });
      }}>
      {text}
    </Button>
  );
};

export default WPSButton;
