import React from 'react'
import { ImageBackground, View } from 'react-native'
import styles from './HeaderStyles'

const Background = ({children}) => {
  return (
    <View>
    <ImageBackground source={require('../image/image.png')} style={styles.backgroundImage}/>
    <View style={{position:'absolute'}}>
        {children}
    </View>
    </View>
  )
}

export default Background