import React from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from '../Home/components/NavBar'
import Heading from '../Home/components/Heading'
import ContentCover from '../Home/components/Elements/ContentCover'
import Filters from '../Home/components/Filters'
import CardContainer from '../Home/components/CardContainer'
import PropertyCard from '../Home/components/Elements/PropertyCard'
const Home = () => {
  return (
    <Box>
        <NavBar/>
        <ContentCover>
        <Heading/>
        <Filters/>
        <CardContainer>
         <PropertyCard />
         <PropertyCard />
         <PropertyCard />
        </CardContainer>
        </ContentCover>
    </Box>
  )
}

export default Home