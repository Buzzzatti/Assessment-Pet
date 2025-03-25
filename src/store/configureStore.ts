import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '@/pages/ReactReduxArray/store/slice';

export const store = configureStore({
    reducer: {
        exampleSlice: exampleReducer.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
