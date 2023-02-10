import { createStore } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import combinedReducers from './reducers/index';

// const persistConfig = {
//   key: 'primary',
//   storage,
//   whitelist: ['users'],
// };

export default createStore(combinedReducers);
