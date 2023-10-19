import React from 'react'
import {Button  } from '@chakra-ui/react'
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
const Btn = ({ children, colorScheme, clickEvent}) => {
  return (
    <Button bg={colorScheme} size={{base: 'xs', sm: 'sm', md:'lg'}} border='none' >
    {children}
  </Button>
  )
}

export default Btn