import React from 'react'
import { Box, Grid  } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
  base: "0px",
  sm: "360px",
  md: "650px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
const theme = extendTheme({ breakpoints }); 
const CardContainer = ({children}) => {
  return (
    <Grid templateColumns={{sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={25} border='1px solid none'>
        {children}
    </Grid>
  )
}

export default CardContainer