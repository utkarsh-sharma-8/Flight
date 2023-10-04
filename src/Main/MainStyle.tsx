import { StyleSheet } from "react-native";

const mainStyle=StyleSheet.create({
    mainView:{
        margin:'10%',
        borderColor:'blue',
        borderWidth:1,
        borderRadius:7
    },
    firstView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderBottomColor:'grey',
        borderBottomWidth:2,
    },
    touchable:{
        marginTop:'5%',
        marginBottom:'5%',
        borderWidth:2,
        borderColor:'blue',
        borderRadius:7,
    },
    text:{
        padding:5,
        color:'black',
    },
    textinput:{
        color:'black',
        padding:10,
    },
    placeView:{
        borderBottomColor:'grey',
        borderBottomWidth:2,
    }
})

export default mainStyle;