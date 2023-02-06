import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.cajaMorada }/>
      <View style={ styles.cajaNaranja }/>
      <View style={ styles.cajaAzul }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#28425B',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    cajaMorada: {
      // top: 100,
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#5856d6',
    },
    cajaNaranja: {
      top: 50,
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#F0A23B'
    },
    cajaAzul: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#2BC4D9',
    }
});