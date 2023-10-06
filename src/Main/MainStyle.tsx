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
  flightView:{
    display:'flex',
    borderWidth:1,
  },
  flightName:{
    fontSize:20,
    marginTop:'2%',
    marginLeft:'3%'
  },
  flightPlaceView:{
    flexDirection:'row',
    marginTop:'2%',
    marginLeft:'5%'
  },
  flightFrom:{
    fontSize:25,
    color:'red'
  },
  symbol:{
    fontSize:25,
    color:'blue',
    marginLeft:'5%'
  },
  destination:{
    fontSize:25,
    color:'red',
    marginLeft:'5%'
  },
  timePrice:{
    flexDirection:'row',
    marginTop:"3%",
    padding:'2%',
    justifyContent:"space-between"
  },
  departure:{
    fontSize:20,
    color:'black',
    marginLeft:'5%',
    flexWrap:'wrap'
  },
  arrival:{
    fontSize:20,
    color:'black',
    marginLeft:'5%',
    flexWrap:'wrap'
  },
  symbol2:{
    color:'blue',
    fontSize:20,
    marginLeft:'8%'
  },
  price:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
  },
  moreDetailsView:{
    alignItems:'center',
    justifyContent:'center'
  },
  detailsOpacity:{
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    marginBottom:'2%',
    backgroundColor:'orange'
  },
  detailsText:{
    padding:'2%',
    color:'white',
    fontSize:15,
    fontWeight:'bold'
  },
  info:{
    color:'black',
    fontWeight:'bold',
    fontSize:15,
    marginLeft:'5%',
  }
});

export default mainStyle;
