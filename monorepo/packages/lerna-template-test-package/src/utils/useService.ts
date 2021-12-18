import { useContext } from 'react';
import { Services, PageContext } from 'components/common/PageContext';

/** Custom hook for retrieving service */
const useService = <T = any>(serviceKey: keyof Services): T => {
  // Use `any` as temporary workaround since typechecking is done at compile time
  // TODO: Remove use of `any`
  const service = useContext(PageContext);
  return service[serviceKey] as unknown as T;
};

export default useService;
