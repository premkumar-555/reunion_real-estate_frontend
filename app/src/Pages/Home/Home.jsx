import React from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from '../Home/components/NavBar'
import Heading from '../Home/components/Heading'
import ContentCover from '../Home/components/Elements/ContentCover'
import Filters from '../Home/components/Filters'
const Home = () => {
  return (
    <Box>
        <NavBar/>
        <ContentCover>
        <Heading/>
        <Filters/>
        </ContentCover>
    </Box>
  )
}

export default Home