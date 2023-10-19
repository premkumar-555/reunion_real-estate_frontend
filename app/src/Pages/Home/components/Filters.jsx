import React from 'react'
import { Box  } from '@chakra-ui/react'
import FilterItem from '../components/Elements/FilterItem'
import FltrTxtUp from '../components/Elements/FltrTxtUp'
import FltrTxtDown from '../components/Elements/FltrTxtDown'
import FilterBar from '../components/Elements/FilterBar'
import ApplyBtn from '../components/Elements/applyBtn'
import LocationDropdown from './Elements/LocationDropdown'
import DateDropdown from './Elements/DateDropdown'
import PriceRange from './Elements/PriceRange'
import PropTypeDropDown from './Elements/PropTypeDropDown'
const Filters = () => {
  return (
    <Box h={['15%', '10%', '5%']} maxW='100%' display='flex' justifyContent={['space-evenly', 'space-evenly', 'space-between']} alignItems='center' my='20px' flexWrap={['wrap', 'wrap', 'no-wrap']}
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
    <Box w={['75px', '150px', '250px']} display='flex' justifyContent='flex-start' alignItems='center'>
      <PriceRange />
    </Box>
    {/* <FltrTxtDown>Select Price Range</FltrTxtDown> */}
     </FilterItem>
     <FilterItem>
     <FilterBar />
     </FilterItem>
     <FilterItem>
    <FltrTxtUp>Property Type</FltrTxtUp>
    <PropTypeDropDown />
     </FilterItem>
     <FilterItem>
     <FilterBar />
     </FilterItem>
     <ApplyBtn />
    </Box>
  )
}

export default Filters