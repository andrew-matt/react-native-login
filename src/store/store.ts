import {combineReducers, legacy_createStore as createStore} from 'redux';
import {loginReducer} from '../login/login-reducer';

const rootReducer = combineReducers({
    login: loginReducer,
});

export const store = createStore(rootReducer);

//types
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;