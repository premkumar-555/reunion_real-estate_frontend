import React from 'react'
import { Box  } from '@chakra-ui/react'
import FlexItem from './Elements/FlexItem'
import Btn from './Elements/Button'
import TxtItem from './Elements/TxtItem'
import HomeLogo from '../../../assets/icons8-real-estate-50.png'
import AvatarElement from './Elements/AvatarElement'
const NavBar = () => {
  return (
    <Box h='55px' w='100%' pos='absolute' top='0' left='0' right='0' bg='#81E6D9' px={['15px', '50px', '85px']}
    display='flex' justifyContent='space-between' alignItems='center' zIndex='3'>
     <FlexItem spacing="10px">
     <AvatarElement name='home logo' source={HomeLogo}/>
     <TxtItem _hover={{cursor: 'pointer'}} fontWeight='500'>Home</TxtItem>
     </FlexItem>
     <FlexItem spacing="5px">
    <Btn clickEvent={() => alert('Working Fine')} colorScheme='#90CDF4'>Login</Btn>
    <Btn colorScheme='#EBF8FF'>Signup</Btn>
     </FlexItem>
    </Box>
  )
}

export default NavBar