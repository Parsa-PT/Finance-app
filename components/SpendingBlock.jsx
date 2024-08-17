import { View, Text } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import { Colors } from '../constants/Colors';

export default function SpendingBlock() {
  return (
    <View>
      <View  style={{marginTop:30 , marginBottom:20}}>
        <Text style={{ color: "white", fontSize: 16 }}>
        July <Text style={{ fontWeight: "700" }}>Spending</Text>
        </Text>

      {Array(7).fill(1).map(( item, index)=>(
        <View key={index}  style={{width:'100%' , display:'flex' , justifyContent:'space-between' ,alignItems:'center' , flexDirection:'row' , marginTop:20}}>
                <View style={{display:'flex' , flexDirection:'row' }}>

                <View style={{width:40 , height:40, borderRadius:50 , backgroundColor:Colors.gray , marginRight:10 ,  display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                     <Fontisto name="netflix" size={16} color="white" />
                </View>
                <View style={{display:'flex' , flexDirection:'column' , gap:1}}>
                    <Text style={{color:'white' , fontWeight:'700' , fontSize:16}}>Netflix</Text>
                    <Text style={{color:'white'}}>2024-05-01</Text>
                 </View>

                </View>


               <Text style={{color:'white' , fontWeight:'700' , fontSize:16}}>$555</Text>
            </View>
      ))}
            
            
      
      </View>
    </View>
  )
}