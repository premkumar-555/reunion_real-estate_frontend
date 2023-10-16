import React from 'react'
import { Text  } from '@chakra-ui/react'

const TxtItem = ({children, _hover, as}) => {
  return (
    <Text fontSize={['sm', 'md' , 'lg']} fontWeight={as} _hover={_hover}>{children}</Text>
  )
}

export default TxtItem