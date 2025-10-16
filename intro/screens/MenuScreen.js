import { Text, StyleSheet, View } from 'react-native'
import React, { use, useState } from 'react'
import contadorScreen from './contadorScreen'
import BotonesSceen from './BotonesSceen'

export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch(screen) {
        case 'contador':
            return <contadorScreen/>
        case 'botones':
            return <BotonesSceen/>
    }

    return (
      <View>
        <Text>MenuScreen</Text>
      </View>
    )
  }

const styles = StyleSheet.create({})