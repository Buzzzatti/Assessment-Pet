import { useEffect, useState } from 'react';

import { ErrorButton, Sidebar } from '@/widgets';
import { Box } from '@mui/material';

import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from '@/store/configureStore';

function App() {
    const [hasError, setHasError] = useState(false);

    const throwError = () => {
        setHasError(true);
    };

    useEffect(() => {
        if (hasError) {
            throw new Error('This is a simulated error!');
        }
    }, [hasError]);

    return (
        <Provider store={store}>
            <Box display="flex">
                <Box width="350px">
                    <Sidebar />
                </Box>
                <Box flexGrow={1} padding="1rem">
                    <AppRouter />
                    <ErrorButton onClick={throwError} />
                </Box>
            </Box>
        </Provider>
    );
}

export default App;
