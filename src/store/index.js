import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice.js';

/**
 * Set up a Redux store using Redux Toolkit in order to get the user infos (app dev)
 * configureStore initializes the Redux store with the provided reducers
 * The reducer object maps state keys to their respective slice reducers:
 * The `user` slice of the Redux state is managed by userReducer from userSlice.js
 */

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
