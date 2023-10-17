import React from 'react'
import { Card, GridItem, Image, Box, Text, Divider, Icon } from '@chakra-ui/react'
import {LuBedSingle} from 'react-icons/lu'
const PropertyCard = () => {
  return (
    <GridItem w='100%' h='auto'>
     <Card bg='whitesmoke'>
      <Image 
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs' zIndex='0' borderTopRadius='lg'
    />
     <Box w='100%' px="10px" py='5px'>
     <Box mb='5px' display='flex' alignItems='center'>
     <Text fontSize='md' color='blue' fontWeight='500'>₹ 5000/</Text><Text fontSize='sm' as='b'>month</Text>
     </Box>
     <Text fontSize='md' mb='5px' fontWeight='600'>Property Name</Text>
     <Text fontSize='md' mb='3px'>Andheri, Mumbai, India</Text>
     <Divider orientation='horizontal' bg='grey' h='2px' mb='4px'/>
      <Box display='flex' w='100%' justifyContent='space-between' alignItems='center'>
     <Box display='flex' w='26%' justifyContent='space-evenly' alignItems='center'>
     <Icon as={LuBedSingle} boxSize={4}/> &nbsp;
     <Text fontSize='xs' as='b'>3 Beds</Text>
     </Box>
     <Box display='flex' w='41.5%' justifyContent='space-evenly' alignItems='center'>
     <Icon as={LuBedSingle} boxSize={4}/> &nbsp;
     <Text fontSize='xs' as='b'>3 Bathrooms</Text>
     </Box>
     <Box display='flex' w='27%' justifyContent='space-evenly' alignItems='center'>
     <Icon as={LuBedSingle} boxSize={4}/> &nbsp;
     <Text fontSize='xs' as='b'>5x7 m<sup>2</sup></Text>
     </Box>
     </Box>
     </Box>
   
    </Card>
    </GridItem>
  )
}

export default PropertyCard