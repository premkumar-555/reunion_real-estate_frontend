import './App.css'
import { Box } from '@chakra-ui/react'
import Home from "./Pages/Home/Home"
function App() {

  return (
    <>
     <Box w='100vw' h='100vh' padding='0' 
     position='relative' margin='0'>
      <Home/>
     </Box>
    </>
  )
}

export default App
