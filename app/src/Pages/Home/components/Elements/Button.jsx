import React from 'react'
import {Button  } from '@chakra-ui/react'
const Btn = ({ children, colorScheme}) => {
  return (
    <Button bg={colorScheme} size={['xs', 'sm']} border='none'>
    {children}
  </Button>
  )
}

export default Btn