import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props{
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ( { title, onPress, position = 'br' }:Props ) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={ 0.75 }
        style={[ 
          styles.fabLocation, 
          ( position === 'bl' ? {
            left: 25
          } : {
            right: 25
          } )
        ]}
        onPress={ onPress }
      >
        <View style={ styles.fab }>
          <Text style={ styles.fabText }>{ title }</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const android = () => {
    return (
      <View
        style={[ 
          styles.fabLocation, 
          ( position === 'bl' ? {
            left: 25
          } : {
            right: 25
          } )
        ]}
      >
        <TouchableNativeFeedback
            onPress={ onPress }
            background={ TouchableNativeFeedback.Ripple('#0444ce', false, 30) }
          >
          <View style={ styles.fab }>
            <Text style={ styles.fabText }>{ title }</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
  fabLocation:{
    position: 'absolute',
    bottom: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8
  },
  fabText:{
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})