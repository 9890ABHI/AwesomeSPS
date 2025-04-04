// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { authReducer } from "./reducers";
// const RootReducers = combineReducers({
//   auth: authReducer,
// });

// export const store = createStore(RootReducers, applyMiddleware(thunk));

import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers'; // Adjust the path to match your project structure

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add your reducers here
  },
});
