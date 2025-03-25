import { useDispatch } from 'react-redux';
import {
    ActionCreator,
    ActionCreatorsMapObject,
    bindActionCreators,
} from 'redux';

import { AsyncThunk } from '@reduxjs/toolkit';

import { store } from './configureStore';

import exampleActions from '@/pages/ReactReduxArray/store/actions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BoundAsyncThunk<Action extends ActionCreator<any>> = (
    ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
        ? BoundAsyncThunk<Actions[key]>
        : Actions[key];
};

export const getDispatchedActions = <Actions extends ActionCreatorsMapObject>(
    actionCreators: Actions,
): BoundActions<Actions> => bindActionCreators(actionCreators, store.dispatch);

export type AppDispatch = typeof store.dispatch;

export const useMiddlewares = () => {
    const dispatch = useDispatch<AppDispatch>();

    return bindActionCreators(
        {
            ...exampleActions,
        },
        dispatch,
    );
};
