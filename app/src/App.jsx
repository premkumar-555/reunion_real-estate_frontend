import './App.css'
import { Box } from '@chakra-ui/react'
import Home from "./Pages/Home/Home"
import {HomeContextProvider} from './Context/HomeContext'
function App() {
  return (
    <>
     <Box w='100vw' h='100vh' padding='0'  margin='0'>
      <HomeContextProvider>
      <Home/>
      </HomeContextProvider>
     </Box>
    </>
  )
}

export default App
