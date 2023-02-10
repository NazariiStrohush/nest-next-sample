import { createStore } from "redux";

import combinedReducers from "./reducers/index";

export default createStore(combinedReducers);
