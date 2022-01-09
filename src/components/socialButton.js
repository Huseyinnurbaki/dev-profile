import * as React from "react"
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar'

const SocialButton = (props) => {
  const { uri } = props
  return (
    <Link href={uri} target="_blank">   
      <Avatar {...props} >
      </Avatar>
    </Link>
  )
}

export default SocialButton
