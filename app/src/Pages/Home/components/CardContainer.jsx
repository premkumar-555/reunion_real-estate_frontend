import React from 'react'
import { Box, Grid  } from '@chakra-ui/react'
const CardContainer = ({children}) => {
  return (
    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={25} border='1px solid none'>
        {children}
    </Grid>
  )
}

export default CardContainer