import React from 'react'
import { Input } from '@chakra-ui/react'
const DateDropdown = () => {
  return (
    <Input w='100%' style={{padding: '0'}} ml='-3px' py='10px' h='30px' _hover={{cursor: 'pointer'}}
    fontSize={['14px', '14px', '16px']}  fontWeight='600'
placeholder="Select Move-in Date"
 size="md"
 type="date" min={new Date()?.toISOString()?.split('T')[0]}
/>
  )
}

export default DateDropdown