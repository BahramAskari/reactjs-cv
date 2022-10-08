import {configureStore, ThunkAction, Action, getDefaultMiddleware,} from '@reduxjs/toolkit';

//  import authReducer from './slices/authSlice';
//  import usersReducer from './slices/users';


const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
  reducer: {
    //  auth: authReducer,
    //  users: usersReducer,
  },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
        serializableCheck: false,
    }),
},
    );

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
