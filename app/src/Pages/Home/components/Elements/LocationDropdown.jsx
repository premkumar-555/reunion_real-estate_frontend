import React, {useState} from 'react'
import { Select } from '@chakra-ui/react'
import data from '../../../../assets/indianCities.json'
const LocationDropdown = () => {
    const [cities, setcities] = useState([''])
  return (
    <Select borderRadius='lg' style={{padding: '0', height: '30px'}} icon='none'   fontSize={['14px', '14px', '16px']} fontWeight='600' onChange={(e) => {console.log(e.target.value.toLowerCase())}} placeholder='Select Location'  size='sm' >
       {data.length && data.map((ele) => (
         <option key={ele?.city} value={ele?.city}>{ele?.city}</option>
       ))}
    </Select >
  )
}

export default LocationDropdown