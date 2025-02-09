import { Sidebar } from '../widgets/Sidebar/Sidebar'
import { Box } from '@mui/material'
import { AppRouter } from './router'

function App() {


  return (
    <Box display="flex">
    <Box width="250px">
      <Sidebar />
    </Box>
    <Box flexGrow={1} padding="1rem">
      <AppRouter />
    </Box>
  </Box>
  )
}

export default App
