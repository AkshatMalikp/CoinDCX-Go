import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StyleSheet ,Text,View } from "react-native";
import { Header } from "./Header";
import { Data4 } from "../data/Data4";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { getMarketData } from "../services/cryptoService";
import { useEffect } from "react";
import { ListCard } from "./ListCard";

export const PriceScreen2=({navigation})=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMarketData=async ()=>{
            const MarketData = await getMarketData();
            setData(MarketData);
        }

      fetchMarketData();
    },[])
    const renderItem=({item})=>{
     return(
        <ListCard name={item.name} logoUrl={item.image} currentPrice={item.current_price} priceChange={item.price_change_percentage_24h_in_currency} />
     )
    }
return(
    <View>
        <Header/>
        <View style={styles.subheader}>

        <Text style={styles.textstyle}> COIN NAME </Text>
        <View style={styles.subheader2}>
            <Text style={{ marginLeft:10 , ...styles.textstyle}}> PRICE </Text>
            <Text style={styles.textstyle}> 24H CHANGE </Text>
        </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',margin:15,}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
     </View>
     <FlatList 
     data={data}
     renderItem={renderItem}
     keyExtractor={item=>item.id} 
     showsVerticalScrollIndicator={false}



     />
        </View>
);

};


const styles=StyleSheet.create({

     subheader:{
         flexDirection:'row',
         justifyContent:'space-between',
         marginLeft:15,
         marginRight:15,


     },
     subheader2:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    textstyle:{
        fontSize:13,
        color:'grey',

    }
})