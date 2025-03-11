import { useEffect, useState } from 'react';

import { ErrorButton, Sidebar } from '@/widgets';
import { Box } from '@mui/material';

import { AppRouter } from './router';

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
        <Box display="flex">
            <Box width="350px">
                <Sidebar />
            </Box>
            <Box flexGrow={1} padding="1rem">
                <AppRouter />
                <ErrorButton onClick={throwError} />
            </Box>
        </Box>
    );
}

export default App;
