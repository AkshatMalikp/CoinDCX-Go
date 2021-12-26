import React from "react";
import { SafeAreaView, ScrollView, View,Image, TouchableOpacity } from "react-native";
import { StyleSheet ,Text } from "react-native";
import { FlatList } from "react-native";


const Data=[
    {
    id:1,
    title:'Account Settings',
    subtitle:'Manage your KYC,Bank Details etc',
    link:require('../assets/settingicons/account.jpg'),


    },
    {
     
    id:2,
    title:'Security',
    subtitle:'Manage passwords & security',
    link:require('../assets/settingicons/security.jpg'),
    },
    {
         
    id:3,
    title:'Price Alerts',
    subtitle:'Get notified of price action',
    link:require('../assets/settingicons/pricealert.jpg'),
    },
    {

        id:4,
        title:'Invite and Earn',
        subtitle:'Invite your friends and earn Rewards ',
        link:require('../assets/settingicons/invite.jpg'),
    },
    {
     
    id:5,
    title:'Rate us',
    subtitle:'Having fun? Show us some love!',
    link:require('../assets/settingicons/rateus.jpg'),
    },
    {
       
    id:6,
    title:'Help & Support',
    subtitle:'Get help with your account',
    link:require('../assets/settingicons/support.jpg'),
    },
    {

        id:7,
        title:'Join Telegram Channel',
        subtitle:'Take part in discussions',
        link:require('../assets/settingicons/telegram.jpg'),
    },
    {

        id:8,
        title:'Follow Us on Twitter',
        subtitle:'Stay on top of the latest updates',
        link:require('../assets/settingicons/twitter.jpg'),
    },
    {

        id:9,
        title:'About CoinDCX',
        subtitle:'About, Terms of Use,Privacy Policy',
        link:require('../assets/settingicons/about.jpg'),
    },
    {

        id:10,
        title:'App Feedback',
        subtitle:'Help us improve your experience',
        link:require('../assets/settingicons/bug.jpg'),
    },

]
export const AccountScreen=()=>{
    const renderItem=({item})=>{
    return(
        <><TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={item.link} style={{ height: 40, width: 40, marginTop: 30 }} />
                    <View style={{ flexDirection: 'column',marginTop:30, marginLeft:10, }}>
                        <Text style={{fontSize:15,}}>{item.title}</Text>
                        <Text style={{color:'grey',fontSize:13,}}>{item.subtitle}</Text>
                    </View>
                </View>
                <Image source={require('../assets/settingicons/sidearrow.jpg')} style={{ height: 30, width: 30, marginTop: 38 }} />


            </View>
        </TouchableOpacity><View style={{ flexDirection: 'row', alignItems: 'center', margin: 15, }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey' }} />
            </View></>
    )

    }
return(
    <SafeAreaView>
        <ScrollView>
            <TouchableOpacity>
            <View  style={styles.invest}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                <View style={{flexDirection:'column'}}>
              <Text style={{color:'grey',marginLeft:10,marginTop:20,}}> AVAILABLE TO INVEST</Text>
              <Text style={{color:'black',marginLeft:10,fontSize:25,}}>$42,XXX</Text>
            </View>
            <Image source={require('../assets/settingicons/sidearrow.jpg')}  style={{height:30,width:30,marginTop:30,marginRight:10,}}/>
            </View>
            </View>
            </TouchableOpacity>

            <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />

            <View style={{flexDirection:"row",marginLeft:20,marginRight:20,justifyContent:'space-between',marginBottom:20,}}>
           <Text style={{color:'grey'}}>App Version :1.00.0.0</Text>
           <TouchableOpacity>
           <Text style={{color:'blue',fontSize:16,}}>Logout</Text>
           </TouchableOpacity>
            </View>

        </ScrollView>
    </SafeAreaView>
);

};


const styles=StyleSheet.create({
   invest:{
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#E2E8E8',
    height:100,
    marginTop:25,
    borderRadius:5,

   },
     
})