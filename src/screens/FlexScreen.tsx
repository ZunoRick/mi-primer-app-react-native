import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.caja1 }>Caja 1</Text>
      <Text style={ styles.caja2 }>Caja 2</Text>
      <Text style={ styles.caja3 }>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  caja1: {
    // flex: 1,  // 1/6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    // flex: 2,  // 2/6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    // flex: 3,   // 3/6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  }
});