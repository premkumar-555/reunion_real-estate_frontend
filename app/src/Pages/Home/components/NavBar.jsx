import React, {useEffect, useRef} from 'react'
import { Box  } from '@chakra-ui/react'
import FlexItem from './Elements/FlexItem'
import Btn from './Elements/Button'
import TxtItem from './Elements/TxtItem'
import HomeLogo from '../../../assets/icons8-real-estate-50.png'
import AvatarElement from './Elements/AvatarElement'
import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
  base: "0px",
  sm: "360px",
  md: "800px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
const theme = extendTheme({ breakpoints });
const NavBar = () => {
  const navRef = useRef(0)
  useEffect(() => {
    const handleScroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if(scrollTop > 200){
        navRef.current.style.top='-80px'
        }else{
         navRef.current.style.top='0px'
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <Box ref={navRef} h='55px'  maxW='100%' pos='fixed' top='0' left='0' right='0' bg='#81E6D9' px={{ base: "10px", sm: "15px", md: "50px", lg: "75px" }}
    display='flex' justifyContent='space-between' alignItems='center' zIndex='5'  py='32px' transition='0.75s'
     boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'>
     <FlexItem spacing="10px">
     <AvatarElement name='home logo' source={HomeLogo}/>
     <TxtItem _hover={{cursor: 'pointer'}} fontWeight='500'>Home</TxtItem>
     </FlexItem>
     <FlexItem spacing="10px">
    <Btn clickEvent={() => alert('Working Fine')} colorScheme='#90CDF4'>Login</Btn>
    <Btn colorScheme='#EBF8FF'>Signup</Btn>
     </FlexItem>
    </Box>
  )
}

export default NavBar