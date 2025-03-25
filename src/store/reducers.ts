import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { Action, ThunkAction } from '@reduxjs/toolkit';

import { store } from './configureStore';

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
