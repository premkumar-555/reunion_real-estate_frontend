import { Box  } from '@chakra-ui/react'
const FlexItem = ({ children, spacing}) => {
  return (
    <Box  h='100%' display='flex'  alignItems='center' gap={spacing}>
        { children }
     </Box>
  )
}

export default FlexItem