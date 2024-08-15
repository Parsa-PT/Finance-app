import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function profile() {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>profile</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.light
    }
})