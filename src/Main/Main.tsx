import { Slider } from '@miblanchard/react-native-slider';
import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import flight from '../JSON/db.json';
import mainStyle from './MainStyle';

const Main = () => {
  // to conver date to dateString
  const formatDate = date => {
    return date.toDateString();
  };
  // to update slider value whenever changed
  const handleSliderChange = value => {
    setSliderValue(value);
    searchFlights();
  };
  
  const [data, setData] = useState(flight.flights); // json data
  const [twoWay, setTwoWay] = useState(false); //for return date option
  const [sliderValue, setSliderValue] = useState(20); //slider value above slider
  const [from, setFrom] = useState(''); //text input  From
  const [to, setTo] = useState(''); //text input to
  const [date, setDate] = useState(new Date().toDateString()); //to print default date before choosing from date picker
  const [returnDate, setReturnDate] = useState(new Date(date).toDateString()); //for return date
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); //date picker for flights
  const [isReturnDatePickerVisible, setReturnDatePickerVisible] = useState(false); //return date picker
  const [matchingFlights, setMatchingFlights] = useState([]); //filtered flights storage
  const searchFlights = () => {
    // Filter flights based on user input
    const filteredFlights = data.filter(flight => {
      return(
        flight.From.toLowerCase() === from.toLowerCase() &&
        flight.To.toLowerCase() === to.toLowerCase() &&
        parseFloat(flight.Price) <= sliderValue * 1000
      );
    });
    setMatchingFlights(filteredFlights);
  };
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
    <>
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
          <TouchableOpacity
            style={mainStyle.searchOpacity}
            onPress={() => searchFlights()}>
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

      {/* if the matching Flights variable gets any data or not */}
      {matchingFlights.length ? (
        matchingFlights.map((item,index) => (
          <View style={mainStyle.flightView}>
            {/* To show the name of service */}
            <Text style={mainStyle.flightName}>{item.name}</Text> 
            <View style={mainStyle.flightPlaceView}>

              {/* Destination and departure place */}

              <MaterialCommunityIcons
                name="airplane-takeoff"
                size={35}
                color={'blue'}
                style={{marginRight: '2%'}}
              />
              <Text style={mainStyle.flightFrom}>{item.From}</Text>
              <Text style={mainStyle.symbol}>-></Text>
              <Text style={mainStyle.destination}>{item.To}</Text>
              <MaterialCommunityIcons
                name="airplane-landing"
                size={35}
                color={'blue'}
                style={{marginLeft: '2%'}}
              />
            </View>
            <View style={mainStyle.timePrice}>

              {/* Arrival time departure time and the price of the flight */}
              <View style={{flexDirection: 'row'}}>
                <Text style={mainStyle.departure}>{item.Departure}</Text>
                <Text style={mainStyle.symbol2}>-></Text>
                <Text style={mainStyle.arrival}>{item.Arrival}</Text>
              </View>
              <Text style={mainStyle.price}>₹{item.Price}</Text>
            </View>
            <View style={mainStyle.moreDetailsView}>
              {/* a dummy click for details  */}
              <TouchableOpacity style={mainStyle.detailsOpacity} onPress={()=>Alert.alert("This is just dummy button")}>
                <Text style={mainStyle.detailsText}>
                  Click For More Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text style={mainStyle.info}>
            *Please put valid destination and departure place and select the price range correctly
          </Text>
        </View>
      )}
    </>
  );
};
export default Main;
