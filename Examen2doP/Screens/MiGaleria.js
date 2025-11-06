import { Text, StyleSheet, View, Button, Image,ImageBackground,TextInput, Platform, StatusBar } from 'react-native'
import React, { useState, use } from 'react'
import Full from './Full'

const SPLASH_IMAGE = require("../assets/Recursos/IMG_1797.jpg");

export default function MiGaleria() {

    const [screen, setScreen] = useState('menu');
    const [showSplash, setShowSplash] = useState(true);

    if (showSplash){
    switch(screen){
        case 'full':
            return <Full/>
        case 'menu':
            default:
                
                return (
                    <ImageBackground source={SPLASH_IMAGE}
                        resizeMode='cover'
                        imageStyle={styles.mainImageStyle}
                        style={styles.mainBackground}
                    >
                        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
                    <Text style={styles.welcome}>
                        <View style={styles.splashOverlay}>
                            <View style={styles.Text}>
                                <Text style={styles.texto} >Mi Galeria</Text>
                                <Button title='Mi Galeria' onPress={() =>setScreen('full')}/>
                            </View>
                        </View>
                    </Text>
                    </ImageBackground>
                )
            }
    }
}

    

const styles = StyleSheet.create({
    mainBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    mainImageStyle: {
        opacity: 0.9,
    },
    splashOverlay: {
        flex: 1, 
        justifyContent: 'center',  
        alignItems: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        padding: 20,
    },
    welcome: {
        alignItems: 'center',
        color: '#fff',
        fontSize: 28, 
        marginBottom: 40,
        fontWeight: 'bold',
    },
    texto: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: '#000',
        marginBottom: 5,
    },
    Text: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        height: 60,
    },
})