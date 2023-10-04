import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Background from './Background'
import styles from './HeaderStyles'

const Header = () => {
  return (
    <Background>
        <View style={styles.container}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Flights Search</Text>
              <TouchableOpacity style={styles.pressable}>
              <Text style={styles.headerTextBar}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pressable}>
              <Text style={styles.headerTextBar}>About Us</Text>
              </TouchableOpacity>
            </View>
            <Image source={require('../image/flight.png')} style={styles.image}/>
        </View>
    </Background>
  )
}

export default Header