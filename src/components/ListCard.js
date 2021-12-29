import React from "react";
import { View,Image,Text } from "react-native";
import { TouchableOpacity } from "react-native";

export const ListCard=({name, currentPrice, priceChange, logoUrl})=>{
    const priceChangeColor = priceChange > 0 ? '#34C759' : '#FF3B30';
    return(
        <View>
        <TouchableOpacity>

       
    <View style={{flexDirection:'row',justifyContent:"space-between",marginLeft:15,marginRight:15}}>
        <View style={{flexDirection:'row'}}>
        <Image source={{ uri: logoUrl }} style={{height:50,width:50}} />
        <Text style={{fontSize:15,marginLeft:10,marginTop:6,}}>{name}</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:15,}}>
       <Text style={{marginRight:30,}}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
       <Text style={{marginRight:10,color:priceChangeColor}}>{priceChange.toFixed(2)}%</Text>
        </View>

        
    </View>
    </TouchableOpacity>

    
   <View style={{flexDirection: 'row', alignItems: 'center',margin:15,}}>
   <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
      </View>

      </View>
    )
}