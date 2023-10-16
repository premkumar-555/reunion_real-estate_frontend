import React from 'react'
import { Box  } from '@chakra-ui/react'
const FilterItem = ({children}) => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-evenly' h='80%'>{children}</Box>
  )
}

export default FilterItem