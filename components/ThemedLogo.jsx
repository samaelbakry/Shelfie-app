import { Image, useColorScheme } from 'react-native'
import React from 'react'

import lightLogo from "../assets/images/logo1.jpg"
import darkLogo from "../assets/images/logo2.jpg"

const ThemedLogo = ({...props}) => {
    const theme = useColorScheme()

    const logo = theme == "dark" ? darkLogo : lightLogo
  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo