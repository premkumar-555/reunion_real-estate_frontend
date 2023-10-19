import React from 'react'
import { Box  } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
  base: "0px",
  sm: "360px",
  md: "800px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
const theme = extendTheme({ breakpoints });
const ContentCover = ({children}) => {
  return (
    <Box position='relative' top='75px' margin='auto' border='1px solid none'
    px={{ base: "10px", sm: "15px", md: "50px", lg: "75px" }} pt='10px'>
        {children}
        </Box>
  )
}

export default ContentCover