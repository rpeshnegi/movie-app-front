import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import authReducer from './slices/auth/auth-slice';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer: any = combineReducers({
  auth: authReducer.reducer,
});

export { rootPersistConfig, rootReducer };
