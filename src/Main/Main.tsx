import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import mainStyle from './MainStyle';

const Main = () => {
    const [ticket,setTicket]=useState(false);
    const[from,setFrom]=useState('');
    const[to,setTo]=useState('');
  return (
    <View style={mainStyle.mainView}>
      <View style={mainStyle.firstView}>
        <TouchableOpacity style={mainStyle.touchable} onPress={()=>{setTicket(false)}}>
            <Text style={[mainStyle.text,{backgroundColor:ticket?'white':'#c6d7f4'}]}>One Way</Text>
        </TouchableOpacity>
        <TouchableOpacity style={mainStyle.touchable} onPress={()=>setTicket(true)}>
            <Text style={[mainStyle.text,{backgroundColor:ticket?'#c6d7f4':'white'}]}>Return</Text>
        </TouchableOpacity>
      </View>
      <View style={mainStyle.placeView}>
        <TextInput placeholder='From' placeholderTextColor={'black'} style={mainStyle.textinput} value={from} onChangeText={(text)=>{setFrom(text)}}/>
      </View>
      <View style={mainStyle.placeView}>
        <TextInput placeholder='To' placeholderTextColor={'black'} style={mainStyle.textinput} value={to} onChangeText={(text)=>{setTo(text)}}/>
      </View>
    </View>
  )
}

export default Main