import React from 'react'
import { Box, Text  } from '@chakra-ui/react'
import FlexItem from './Elements/FlexItem'
import Btn from './Elements/Button'
import TxtItem from './Elements/TxtItem'
import HomeLogo from '../../../assets/icons8-real-estate-50.png'
import AvatarElement from './Elements/AvatarElement'
const NavBar = () => {
  return (
    <Box h='70px' w='100%' pos='absolute' top='0' left='0' right='0' bg='#81E6D9' px={['15px', '50px', '75px']}
    display='flex' justifyContent='space-between' alignItems='center'>
     <FlexItem>
     <AvatarElement name='home logo' source={HomeLogo}/>
     <TxtItem _hover={{cursor: 'pointer'}}>Home</TxtItem>
     </FlexItem>
     <FlexItem>
    <Btn colorScheme='#90CDF4'>Login</Btn>
    <Btn colorScheme='#EBF8FF'>Signup</Btn>
     </FlexItem>
    </Box>
  )
}

export default NavBar