import { Box  } from '@chakra-ui/react'
const FlexItem = ({ children }) => {
  return (
    <Box w={['35%', '23%', '13%']} display='flex' justifyContent='space-between' alignItems='center' spacing='15px'>
        { children }
     </Box>
  )
}

export default FlexItem