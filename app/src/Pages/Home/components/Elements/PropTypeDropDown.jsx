import React, {useState} from 'react'
import { Select } from '@chakra-ui/react'
const PropTypeDropDown = () => {
    const [data, setData] = useState(['Flats', 'Houses', 'Villas', 'Duplexes/Triplexes', 'Office Spaces', 'Retail Spaces', 'Warehouses', 'Industrial Sheds', 'Farmhouses', 'Hotels', 'Resorts']);
  return (
    <Select borderRadius='lg' style={{padding: '0', height: '30px'}} icon='none'   fontSize={['14px', '14px', '16px']} 
    _hover={{cursor: 'pointer'}} fontWeight='600' onChange={(e) => {console.log(e.target.value.toLowerCase())}} placeholder='Select Property Type'  size='sm' >
       {data.length && data.map((ele) => (
         <option key={ele} value={ele}>{ele}</option>
       ))}
    </Select >
  )
}

export default PropTypeDropDown