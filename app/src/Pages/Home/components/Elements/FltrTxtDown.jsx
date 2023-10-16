import React from 'react'
import { Text  } from '@chakra-ui/react'
const FltrTxtDown = ({children}) => {
  return (
     <Text fontSize='sm' as='b' _hover={{cursor: 'pointer'}}>{children}</Text>
  )
}

export default FltrTxtDown