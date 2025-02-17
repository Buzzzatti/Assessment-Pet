import { Box } from '@mui/material'
import React, { Component, ReactNode } from 'react'
import Error from './Error.png'
interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        hasError: false,
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        console.error('Error caught by Error Boundary:', error, info)
    }

    render() {
        if (this.state.hasError) {
            return <Box
                component="img"
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={Error}
            />
        }

        return this.props.children
    }
}

export default ErrorBoundary
