import React from 'react'
import { Box  } from '@chakra-ui/react'
const ContentCover = ({children}) => {
  return (
    <Box position='relative' top='75px' margin='auto' border='1px solid none'
    px={['15px', '50px', '85px']} pt='10px'>
        {children}
        </Box>
  )
}

export default ContentCover