import { Box  } from '@chakra-ui/react'
const FlexItem = ({ children, spacing}) => {
  return (
    <Box w={['auto', '23%', '13%']} h='100%' display='flex' justifyContent='space-between' alignItems='center' gap={spacing}>
        { children }
     </Box>
  )
}

export default FlexItem