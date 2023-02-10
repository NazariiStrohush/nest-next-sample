import { MyUser } from 'lib/apollo/generated.graphql';

export enum USER_ACTIONS {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  UNSET_CURRENT_USER = 'UNSET_CURRENT_USER',
}
export const setCurrentUser = (user: MyUser) => {
  return { type: USER_ACTIONS.SET_CURRENT_USER, payload: { user } };
};

export const unsetCurrentUser = () => {
  return { type: USER_ACTIONS.UNSET_CURRENT_USER };
};
