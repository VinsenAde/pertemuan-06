import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import {createStore}from 'redux'
import reducer from './reducer';
import naikTurunReducer from './redux/counter/naikTurunSlice';

const persistConfig = {
    key: process.env.NEXT_PUBLIC_FINGERPRINT_NAME,
    storage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers({
    auth: authReducer,
    counter: naikTurunReducer, // Added the counter reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });
const store = createStore(reducer);

const persistor = persistStore(store);

export { store, persistor };
export default store;