import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',

    },
    backgroundImage:{
        height:'100%',
        width:'100%',
    },
    image:{
        marginTop:0,
        height:hp('23%'),
        width:wp('100%'),
    },
    headerView:{
        flex:1,
        flexDirection:'row'
    },
    headerText:{
        fontSize:30,
        color:'white',
        marginLeft:'5%',
        marginTop:'5%',
        fontFamily:'cursive'

    },
    pressable:{
        marginLeft:'15%',
        marginTop:'7%',
    },
    headerTextBar:{
        color:'white'
    }
});

export default styles;