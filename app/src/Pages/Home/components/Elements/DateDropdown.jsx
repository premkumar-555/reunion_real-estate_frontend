import React from 'react'
import { Input } from '@chakra-ui/react'
const DateDropdown = () => {
  return (
    <Input w='100%' style={{padding: '0'}} ml='-3px' py='10px' h='30px' _hover={{cursor: 'pointer'}}
placeholder="Select Move-in Date"
 size="md"
 type="date" min={new Date()?.toISOString()?.split('T')[0]}
/>
  )
}

export default DateDropdown