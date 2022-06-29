import AuthReducer from "./auth/auth"
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: AuthReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

    });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];