import React from 'react'
import { Spinner, Box} from '@chakra-ui/react'
const Loader = () => {
  return (
    <Box display='flex' maxW='100%' h='25vh' justifyContent='center' alignItems='center'>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size={['md', 'lg', 'xl']}
/>
  </Box>
  )
}

export default Loader