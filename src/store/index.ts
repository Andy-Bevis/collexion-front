import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app';
import collectionsReducer from './reducers/collections';

const store = configureStore({
  // The store is divided in 5 main reducers for structuration purposes.
  reducer: {
    // objects: objectsReducer,
    collections: collectionsReducer,
    // categories: categoriesReducer,
    // user: userReducer,
    app: appReducer,
  },
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
