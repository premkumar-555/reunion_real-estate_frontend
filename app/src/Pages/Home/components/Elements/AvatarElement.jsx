import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
const AvatarElement = ({name, source}) => {
  return (
    <Avatar name={name} src={source}  size={['sm', 'md']}/>
  )
}

export default AvatarElement