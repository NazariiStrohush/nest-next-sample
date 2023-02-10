import { User } from 'lib/apollo/generated.graphql';
import { USER_ACTIONS } from '../actions/users';

const initialState: { currentUser: null | User; collection: User[] } = {
  currentUser: null,
  collection: [],
};

export default function (
  state = initialState,
  action: { type: USER_ACTIONS; payload: { user: User } },
) {
  switch (action.type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.user };
    case USER_ACTIONS.UNSET_CURRENT_USER:
      return { ...state, currentUser: null };
    default:
      return state;
  }
}
