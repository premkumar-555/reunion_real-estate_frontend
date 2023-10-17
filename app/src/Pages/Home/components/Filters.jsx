import React from 'react'
import { Box  } from '@chakra-ui/react'
import FilterItem from '../components/Elements/FilterItem'
import FltrTxtUp from '../components/Elements/FltrTxtUp'
import FltrTxtDown from '../components/Elements/FltrTxtDown'
import FilterBar from '../components/Elements/FilterBar'
import ApplyBtn from '../components/Elements/applyBtn'
import LocationDropdown from './Elements/LocationDropdown'
import DateDropdown from './Elements/DateDropdown'
const Filters = () => {
  return (
    <Box h={['auto', 'auto', '55px']} maxW='100%' display='flex' justifyContent={['flex-start', 'space-evenly', 'space-between']} alignItems='center' my='20px' flexWrap={['wrap', 'wrap', 'no-wrap']}
    bg='#E2E8F0' borderRadius='xl' px='15px' py='10px'>
     <FilterItem>
    <FltrTxtUp>City</FltrTxtUp>
    {/* <FltrTxtDown>Select Location</FltrTxtDown> */}
    <LocationDropdown />
     </FilterItem>
     <FilterItem>
     <FilterBar />
     </FilterItem>
     <FilterItem>
    <FltrTxtUp>Available From</FltrTxtUp>
    <DateDropdown />
    {/* <FltrTxtDown>Select Move-in Date</FltrTxtDown> */}
     </FilterItem>
     <FilterItem>
     <FilterBar />
     </FilterItem>
     <FilterItem>
    <FltrTxtUp>Price</FltrTxtUp>
    <FltrTxtDown>Select Price Range</FltrTxtDown>
     </FilterItem>
     <FilterItem>
     <FilterBar />
     </FilterItem>
     <FilterItem>
    <FltrTxtUp>Property Type</FltrTxtUp>
    <FltrTxtDown>Select Property Type</FltrTxtDown>
     </FilterItem>
     <FilterItem>
     <FilterBar />
     </FilterItem>
     <ApplyBtn />
    </Box>
  )
}

export default Filters