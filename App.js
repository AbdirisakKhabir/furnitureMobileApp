import React from 'react'
import { View } from 'react-native-web';
import { StyleSheet, Text, View,  } from 'react-native';
export default function App () {
  return (
    <View styele={styles.container}>
        <Text>Start Hello World</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})