import { Slider } from '@miblanchard/react-native-slider';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import mainStyle from './MainStyle';

const Main = () => {
  // to conver date to dateString
  const formatDate = date => {
    return date.toDateString();
  };
  // to update slider value whenever changed
  const handleSliderChange = value => {
    setSliderValue(value);
  };

  //to fetch data from json file
  const apiData = async() =>{
    const url ="http://10.0.2.2:3000/flights"
    let result = await fetch (url)
    result = await result.json()
    console.log(result)
  }
  useEffect(()=>{
    apiData()
  },[])

  const [twoWay, setTwoWay] = useState(false); //for return date option
  const [sliderValue, setSliderValue] = useState(1); //slider value above slider
  const [from, setFrom] = useState(''); //text input  From
  const [to, setTo] = useState(''); //Text input to
  const [date, setDate] = useState(new Date().toDateString()); //to print default date before choosing from date picker
  const [returnDate, setReturnDate] = useState(new Date(date).toDateString()); //for return date
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); //date picker for flights
  const [isReturnDatePickerVisible, setReturnDatePickerVisible] = useState(false); //return date picker
    
  //function when date on date picker is selected
  const handleConfirm = date => {
    setDate(formatDate(date));
    setDatePickerVisibility(false);
  };

  //function when return date is selected
  const handleTwoWayConfirm = date => {
    setReturnDate(formatDate(date));
    setReturnDatePickerVisible(false);
  };
  return (
    <View style={mainStyle.mainView}>
      <View style={mainStyle.firstView}>

        {/* one way tab */}
        <TouchableOpacity
          style={mainStyle.touchable}
          onPress={() => {
            setTwoWay(false);
          }}>
          <Text
            style={[
              mainStyle.text,
              {backgroundColor: twoWay ? 'white' : '#c6d7f4'},
            ]}>
            One Way
          </Text>
        </TouchableOpacity>

        {/* return tab */}
        <TouchableOpacity
          style={mainStyle.touchable}
          onPress={() => setTwoWay(true)}>
          <Text
            style={[
              mainStyle.text,
              {backgroundColor: twoWay ? '#c6d7f4' : 'white'},
            ]}>
            Return
          </Text>
        </TouchableOpacity>
      </View>

      {/* From text input */}
      <View style={mainStyle.placeView}>
        <EvilIcons name="location" size={25} style={{marginTop: '4%'}} />
        <TextInput
          placeholder="From"
          placeholderTextColor={'black'}
          style={mainStyle.textinput}
          value={from}
          onChangeText={text => {
            setFrom(text);
          }}
        />
      </View>

      {/* to text input */}
      <View style={mainStyle.placeView}>
        <EvilIcons name="location" size={25} style={{marginTop: '4%'}} />
        <TextInput
          placeholder="To"
          placeholderTextColor={'black'}
          style={mainStyle.textinput}
          value={to}
          onChangeText={text => {
            setTo(text);
          }}
        />
      </View>

      {/* To select the date picker */}
      <View style={mainStyle.calendarView}>
        <Pressable
          style={mainStyle.pressable}
          onPress={() => {
            setDatePickerVisibility(true);
          }}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={new Date(date)}
            minimumDate={new Date()}
            onConfirm={handleConfirm}
            onCancel={() => setDatePickerVisibility(false)}
          />
          <View style={{flexDirection: 'row'}}>
            <FontAwesome5
              name="calendar"
              size={20}
              color={'black'}
              style={{marginRight: 3}}
            />
            <Text style={mainStyle.date}>{date}</Text>
          </View>
        </Pressable>

        {/* Date picker */}
        {twoWay ? (
          <Pressable
            style={mainStyle.pressable}
            onPress={() => setReturnDatePickerVisible(true)}>
            <DateTimePickerModal
              isVisible={isReturnDatePickerVisible}
              mode="date"
              date={new Date(returnDate)}
              minimumDate={new Date(date)}
              onConfirm={handleTwoWayConfirm}
              onCancel={() => setDatePickerVisibility(false)}
            />
            <View style={{flexDirection: 'row'}}>
              <FontAwesome5
                name="calendar"
                size={20}
                color={'black'}
                style={{marginRight: 3}}
              />
              <Text style={mainStyle.date}>{returnDate}</Text>
            </View>
          </Pressable>
        ) : null}
      </View>

      {/* slider  to selct price */}
      <View style={mainStyle.sliderView}>
        <Slider
          maximumTrackStyle={{maxWidth: 'auto'}}
          minimumValue={1}
          maximumValue={99}
          maximumTrackTintColor="blue"
          minimumTrackTintColor="red"
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
          renderAboveThumbComponent={() => (
            <View
              style={{
                backgroundColor: '#072357',
                width: 50,
                marginLeft: -15,
                height: 20,
                marginBottom: -5,
              }}>
              <Text style={{color: 'white', paddingLeft: 2}}>
                ₹{sliderValue * 1000}
              </Text>
            </View>
          )}
        />
      </View>

      {/* Search button */}
      <View style={mainStyle.searchView}>
        <TouchableOpacity style={mainStyle.searchOpacity}>
          <AntDesign
            name="search1"
            size={26}
            color={'white'}
            style={{marginTop: '6%', marginRight: '2%'}}
          />
          <Text style={mainStyle.searchText}>Search Flights</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Main;