import { Box } from '@mui/material'
import { AppRouter } from './router'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { Sidebar } from '@/widgets'

function App() {


  return (
    <Box display="flex">
      <Box width="250px">
        <Sidebar />
      </Box>
      <Box flexGrow={1} padding="1rem">
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </Box>
    </Box>
  )
}

export default App
