import { Text, StyleSheet, View, Button } from 'react-native'
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
        case 'menu':
            default:
                return (
                    <View>
                        <Text>Menu de Practicas</Text>
                        <Button title='Pract: Contador' onPress={()=>setScreen('contador')}/>
                    </View>
                )
    }  
  }

const styles = StyleSheet.create({})