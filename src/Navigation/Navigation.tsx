import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Navigation = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View style={styles.head}>
            <Header/>
        </View>

        <View style={styles.main}>
            <Main/>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Navigation

const styles=StyleSheet.create({
    head:{
        height:hp("30%"),
        width:wp("100%")
    },
    main:{
        height:'100%',
        width:'100%',
        flex:1
    }
})