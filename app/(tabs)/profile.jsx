import { View, Text  , Image  , ScrollView} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Stack } from 'expo-router'
import { ProfileHeader } from '../../components/Header'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function profile() {
  return (
    <>
      <Stack.Screen options={{
        header: ()=> <ProfileHeader/>,
      }} />
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:30 , flexDirection:'column' , gap:8}}>
              <Image style={{width:140 , height:140 , borderRadius:30}} source={require('../../assets/images/person.jpeg')} alt='pic'/>
              <Text style={{color:'white' , fontWeight:'bold' , fontSize:20}}>
                Parsa shams
              </Text>
          </View>


          <View style={{marginTop:40}}>
            <Text style={{color:'white' , fontSize:16 , fontWeight:'400'}}>
              App setting
            </Text>
            <View style={{marginTop:20 , backgroundColor:Colors.gray2 , paddingVertical:20 , borderRadius:50 , display:'flex' , gap:7 , flexDirection:'row' , alignItems:'center' , justifyContent:'center'}}>
              <FontAwesome name="moon-o" size={24}  color="white" />
              <Text style={{ color:'white' , fontSize:16 }}>App theme</Text>
            </View>
          </View>


          <View style={{marginTop:40}}>
            <Text style={{color:'white' , fontSize:16 , fontWeight:'400'}}>
              How it works
            </Text>
            <View style={{marginTop:20 , backgroundColor:Colors.gray2 , paddingVertical:20 , borderRadius:50 , display:'flex' , gap:7 , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , paddingHorizontal:15}}>
              <View style={{display:'flex' , flexDirection:'row' , gap:6 , alignItems:'center'}}>
              <MaterialCommunityIcons name="book-education-outline" size={24} color="white" />
              <Text style={{ color:'white' , fontSize:16 }}>How to use Finance</Text>
              </View>
              <AntDesign name="right" size={24} color="white" />
            </View>
          </View>


          <View style={{marginTop:40}}>
            <Text style={{color:'white' , fontSize:16 , fontWeight:'400'}}>
              Contact Us
            </Text>
            <View style={{marginTop:20 , backgroundColor:Colors.gray2 , paddingVertical:20 , borderRadius:50 , display:'flex' , gap:7 , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , paddingHorizontal:15}}>
               <View style={{display:'flex' , flexDirection:'row' , gap:6 , alignItems:'center'}}>
                <MaterialIcons name="support-agent" size={24} color="white" />
                <Text style={{ color:'white' , fontSize:16 }}>Customer support</Text>
               </View>
               <AntDesign name="right" size={24} color="white" />
            </View>
          </View>


          <View style={{marginTop:40}}>
            <Text style={{color:'white' , fontSize:16 , fontWeight:'400'}}>
              About Finance
            </Text>
            <View style={{marginTop:20 , backgroundColor:Colors.gray2 , paddingVertical:20 , borderRadius:50 , display:'flex' , gap:7 , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , paddingHorizontal:15}}>
                <View style={{display:'flex' , flexDirection:'row' , gap:6 , alignItems:'center'}}>
                  <Ionicons name="checkbox" size={24} color="white" />
                  <Text style={{ color:'white' , fontSize:16 }}>Terms and conditions</Text>
               </View>
               <AntDesign name="right" size={24} color="white" />
            </View>
            <View style={{marginTop:6 , backgroundColor:Colors.gray2 , paddingVertical:20 , borderRadius:50 , display:'flex' , gap:7 , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , paddingHorizontal:15}}>
               <View style={{display:'flex' , flexDirection:'row' , gap:6 , alignItems:'center'}}>
                <MaterialIcons name="privacy-tip" size={24} color="white" />
                <Text style={{ color:'white' , fontSize:16 }}>Privacy policy</Text>
               </View>
               <AntDesign name="right" size={24} color="white" />
            </View>
          </View>

          <View style={{display:'flex' , justifyContent:'center' , alignItems:'center' ,  marginTop:40 , marginBottom:50 , flexDirection:'column'}}>
          <Image style={{width:140 , height:140 , borderRadius:30}} source={require('../../assets/images/logo.png')} alt='pic'/>
          
          </View>

        </ScrollView>
         
      </View>
   </>
  
  )
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:Colors.light,
        paddingHorizontal:30,
        
    }
})
