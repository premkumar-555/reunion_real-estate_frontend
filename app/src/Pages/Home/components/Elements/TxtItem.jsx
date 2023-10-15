import React from 'react'
import { Text  } from '@chakra-ui/react'

const TxtItem = ({children, _hover}) => {
  return (
    <Text fontSize={['sm', 'md' , 'lg']} as='b' _hover={_hover}>{children}</Text>
  )
}

export default TxtItem