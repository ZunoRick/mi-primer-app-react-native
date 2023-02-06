import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style= { styles.container }>
      <Text style= { styles.text }>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    text:{
      padding: 50,
      fontSize: 20,
      // width: 150,
      borderWidth: 10
    }
});