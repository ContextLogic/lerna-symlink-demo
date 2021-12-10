import { useContext } from 'react';
import { Services, PageContext } from 'components/common/PageContext';
import { MerchantService, User, UserService } from 'types';

/** Custom hook for retrieving service */
const useService = (serviceKey: keyof Services): any => {
  // Use `any` as temporary workaround since typechecking is done at compile time
  // TODO: Remove use of `any`
  const services = useContext(PageContext);

  if (services) {
    return services[serviceKey];
  }

  return null;
};

export default useService;
