import { View, Text , FlatList , ScrollView } from 'react-native'
import React from 'react'
import { EXPENSE } from '../constants'
import { StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function ExpenseBlock() {
    

  return (
    <View>
       <View style={{display:'flex' , flexDirection:'row'}}>
        <View style={styles.add}>
        <FontAwesome5 name="plus" size={15} color="white" />
        </View>
        
        <FlatList data={EXPENSE} renderItem={({item , index})=>(
            <>
             <View style={[styles.block , {backgroundColor:item.title == 'Food' ? Colors.blue : item.title == 'Saving' ? Colors.white  : Colors.tint , }]}>
                    <Text style={{color:item.title == 'Saving' ? 'black' : item.title == 'Food' ? 'black' : 'white' , opacity:0.7}}>{item.title}</Text>   
                    <Text style={{color:item.title == 'Saving' ? 'black' : item.title == 'Food' ? 'black' : 'white', fontWeight:'bold' , marginBottom:6}}>${item.amount}</Text>   
                    <Text style={{color:'white' , backgroundColor:'black' , padding:4 , borderRadius:10}}>{item.percent}%</Text>   
            </View>
            
            </>
           

        )} showsHorizontalScrollIndicator={false} horizontal/>
       </View>
    </View>
  )
}



const styles = StyleSheet.create({
    block:{
        backgroundColor:Colors.tint,
        width:100,
        padding:15,
        borderRadius:15,
        marginTop:30,
        marginRight:20,
        gap:5,
        alignItems:'flex-start'
    },
    add:{
        backgroundColor:Colors.light,
        width:70,
        padding:10,
        borderRadius:15,
        marginTop:30,
        marginRight:20,
        gap:5,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderStyle:'dashed',
        borderWidth:2,
        borderColor:'white'
    }
})