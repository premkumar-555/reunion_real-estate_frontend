import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
const AlertMsg = ({status, msg}) => {
  return (
    <Alert status={status} variant='top-accent'>
    <AlertIcon />
   {msg}
  </Alert>
  )
}

export default AlertMsg