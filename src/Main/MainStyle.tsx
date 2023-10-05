import { StyleSheet } from 'react-native';

const mainStyle = StyleSheet.create({
  mainView: {
    margin: '10%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 30,
  },
  firstView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  touchable: {
    marginTop: '5%',
    marginBottom: '5%',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 7,
  },
  text: {
    padding: 5,
    color: 'black',
  },
  textinput: {
    color: 'black',
    padding: 10,
    paddingLeft: 20,
  },
  placeView: {
    borderBottomColor: 'grey',
    flexDirection: 'row',
    borderBottomWidth: 2,
  },
  calendarView: {
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pressable: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    color: 'black',
  },
  searchView: {
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    backgroundColor: '#FFA500',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  searchOpacity: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchText: {
    fontSize: 20,
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  sliderView: {
    borderTopColor: 'grey',
    borderTopWidth: 2,
    marginTop: '2%',
    padding: 20,
  },
  slider: {
    width: '80%',
    height: 'auto',
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 30,
  },
});

export default mainStyle;
