import { useQuery } from '@apollo/react-hooks';

import { GET_SCUBA, getScubaInfoById } from '../graphql/jobs.query';

export const LOADING = 'loading';
export const ERRORS = 'errors';

const manageStates = (errors, loading) => {
  if (errors) return ERRORS;
  if (loading) return LOADING;
  return 'DATA';
  // return LOADING;
};

export const getScuba = () => {
  const { errors, loading, data } = useQuery(GET_SCUBA);
  const clientState = manageStates(errors, loading);
  return clientState == 'DATA' ? data.scubaCollection.items : clientState;
};

export const getScubaById = (id) => {
  const { errors, loading, data } = useQuery(getScubaInfoById(id));

  const clientState = manageStates(errors, loading);
  return clientState == 'DATA' ? data.scuba : clientState;
};
