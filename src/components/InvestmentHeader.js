import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
const Card=()=>{
    return(
     <View style={styles.card}>
             <View style={{flexDirection:'row'}}>
             <View style={{flexDirection:'column',marginLeft:25,marginTop:20,}}>
             <Text style={{color:'grey',fontSize:13,}}>
                  CURRENT
             </Text>
             <Text style={{color:'black',fontSize:17,}}>
                  $51,XXX
                 </Text>
                 <Text style={{color:'grey',fontSize:13,marginTop:10,}}>
                  RETURNS
                 </Text>
                 <Text style={{color:'red',fontSize:17,}}>
                  $-2,XXX
                 </Text>

             </View>
             <View style={{flexDirection:'column',marginLeft:90,marginTop:20,}}>
             <Text style={{color:'grey',fontSize:13,}}>
                 INVESTED
                 </Text>
                 <Text style={{color:'black',fontSize:17,}}>
                 $49,XXX
                 </Text>
                 <Text style={{color:'grey',fontSize:13,marginTop:10,}}>
                 TOTAL RETURNS %
                 </Text>
                 <Text style={{color:'red',fontSize:17,}}>
                 $-4.00%
                 </Text>
             </View>
             </View>

     </View>
    );
}
export const InvestmentHeader=()=>{

    return(
        <View >

           <Card />
        </View>
    )
}

const styles=StyleSheet.create({

    card:{
            backgroundColor:'white',
            height:130,
            width:'88%',
            alignSelf:'center',
            marginTop:50,
            borderRadius:10,
            marginBottom:30,
    }

})