import React from "react";
import { StyleSheet,Text, View ,Image, TouchableOpacity, Keyboard} from "react-native";
import { TextInput } from "react-native";
export const PromoCode=()=>{

    return(
        <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}} >
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:15,}}>Do you have a code?</Text>

            <Image style={styles.image} source={require('../assets/promocode.jpg')} />
            </View> 
            <Text style={{marginLeft:15,}}>Note-Max 1 code can be used per account.</Text>
            <View style={{flexDirection:'row'}}>
                
            <TextInput style={styles.textinput} placeholder="Enter code"/>
            <TouchableOpacity style={styles.button} onPress={()=>Keyboard.dismiss()}>            
            <Text style={{justifyContent:'center',alignSelf:'center',marginTop:8,color:'white',fontSize:15,}}>Apply</Text>
            </TouchableOpacity>
            
            </View>
            <Text style={{color:'red',fontSize:12,marginTop:5,marginLeft:25,}}>
                Please enter a code
            </Text>

         
    </View>
    );
}

const styles=StyleSheet.create({
 
    container:{
      height:160,
      backgroundColor:'#E2E8E8',
      marginTop:20,
      marginBottom:20,
      marginRight:20,
      borderRadius:20,
    },
    image:{
     height:50,
     width:50,
     marginRight:20,
    },
    textinput:{
     height:40,
     width:200,
     backgroundColor:'white',
     flex:3,
     marginLeft:15,
     marginTop:15,
     borderRadius:5,
    },
    button:{
     backgroundColor:'#4C5078',
     height: 40,
     flex:1,
     
     marginLeft:15,
     marginTop:15,
     marginRight:15,
     borderRadius:5,
    },


})

