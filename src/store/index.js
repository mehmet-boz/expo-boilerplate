import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

// Slices
import languageReducer from './slices/language/languageSlice';
import ageGroupReducer from './slices/ageGroup/ageGroupSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'ageGroup',
        'language',
    ],

};

const reducers = combineReducers({
    language: languageReducer,
    ageGroup: ageGroupReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(thunkMiddleware),
});

export const persistor = persistStore(store);
export const AppDispatch = typeof store.dispatch;
export const AppThunk = ThunkAction;

export default {persistor, store};
