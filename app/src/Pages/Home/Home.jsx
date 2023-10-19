import React, {useContext, useState} from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from '../Home/components/NavBar'
import Heading from '../Home/components/Heading'
import ContentCover from '../Home/components/Elements/ContentCover'
import Filters from '../Home/components/Filters'
import CardContainer from '../Home/components/CardContainer'
import PropertyCard from '../Home/components/Elements/PropertyCard'
import Loader from '../Home/components/Elements/Loader'
import {HomeContext} from '../../Context/HomeContext'
const Home = () => {
  const {properties, isLoading} = useContext(HomeContext)
  return (
    <Box>
        <NavBar/>
        <ContentCover>
          {isLoading ? <Loader/> : <>
        <Heading/>
        <Filters/>
        <CardContainer>
          {properties.length ? properties.map((ele) => (
            <>
            <PropertyCard key={ele?.city} data={ele}/>
            <PropertyCard key={ele?.city} data={ele}/>
            <PropertyCard key={ele?.city} data={ele}/>
            <PropertyCard key={ele?.city} data={ele}/>
            <PropertyCard key={ele?.city} data={ele}/>
            <PropertyCard key={ele?.city} data={ele}/>
            <PropertyCard key={ele?.city} data={ele}/>
            <PropertyCard key={ele?.city} data={ele}/>
            <PropertyCard key={ele?.city} data={ele}/>
            </>
          )) : null}
        </CardContainer>
          </>}
        </ContentCover>
    </Box>
  )
}

export default Home