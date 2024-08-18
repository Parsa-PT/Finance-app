import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'


export default function transactions() {
  return (
    <>
    
      <View style={styles.container}>
      <Text>transactions</Text>
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
