import { createSlice } from '@reduxjs/toolkit';

interface dataObject {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface initialType {
    something: {
        data: dataObject[];
        status: 'loading' | 'success' | 'error';
    };
}

const initialState: initialType = {
    something: {
        data: [],
        status: 'success',
    },
};

export default createSlice({
    name: 'exampleSlice',
    initialState,
    reducers: {
        init: (
            state: initialType,
            action: { payload: initialType['something'] },
        ) => {
            state.something = action.payload;
        },
    },
});
