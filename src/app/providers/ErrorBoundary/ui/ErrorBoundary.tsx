import { Box, Button } from '@mui/material';
import React, { Component, ErrorInfo } from 'react';
import Error from './Error.png'

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error: error, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorInfo: errorInfo,
        });
    }

    render() {
        if (this.state.hasError) return (
            <Box>
                <Box
                    component="img"
                    sx={{
                        height: '50vh',
                        width: '100%',

                    }}
                    src={Error}
                />
                <Button href='/' >Ладно, Ладно пойдем домой </Button>
            </Box>
        );

        return this.props.children;
    }
}
