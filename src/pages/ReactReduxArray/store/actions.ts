import { getInfo } from './requestsUrls';
import exampleSlice from './slice';

const { init } = exampleSlice.actions;

const getMW = () => async (dispatch: any) => {
    try {
        dispatch(init({ data: [], status: 'loading' }));
        const response = await getInfo();
        const { data } = response;
        dispatch(init({ data, status: 'success' }));
    } catch (error) {
        dispatch(init({ data: [], status: 'error' }));
        console.error('Ошибка при получении данных:', error);
    }
};

export default { getMW };
