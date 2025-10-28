import React, { useState } from "react";
import { StatusBar } from "react-native";
import { View, Text, StyleSheet, ImageBackground, Alert, TextInput, Platform, Button, Switch } from "react-native";

const SPLASH_IMAGE = require("../assets/Recursos/IMG_1797.jpg");
const MAIN_IMAGE = require("../assets/Recursos/1311951.jpg");

export default function RepasoScreen() {
    const [showSplash, setShowSplash] = useState(true);
    const [terminos, setTerminos] = useState(false);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const validarEmail = (mail) => {
        return mail.length > 0 && mail.includes('@') && mail.includes('.');
    };

    const MostrarAlerta = () => {
        let mensaje = "";
        
        if (nombre.trim() === "") {
            mensaje = "Debes ingresar tu nombre para continuar.";
        } else if (email.trim() === "") {
            mensaje = "Debes ingresar tu correo electrónico para continuar.";
        } else if (!validarEmail(email.trim())) {
            mensaje = "El formato del correo electrónico no es válido (debe contener @ y .).";
        } else if (!terminos) {
            mensaje = "Debes aceptar los términos y condiciones para continuar.";
        }

        if (mensaje !== "") {
            if (Platform.OS === 'web') {
                alert(mensaje);
            } else {
                Alert.alert('Error', mensaje, [{text: 'Aceptar'}]);
            }
            return;
        }
    if (Platform.OS === 'web') {
                alert('¡Ingreso exitoso!');
                setShowSplash(false);
            } else {
                Alert.alert(
                    'Éxito', 
                    '¡Ingreso exitoso!',
                    [{text: 'OK', onPress: () => setShowSplash(false)}]
                );
            }
    };

    if (showSplash) {
        return (
            <ImageBackground
                source={SPLASH_IMAGE}
                resizeMode="cover"
                imageStyle={styles.mainImageStyle}
                style={styles.mainBackground}
            >
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
                <Text style={styles.welcome}>
                <View style={styles.splashOverlay}>
                    <Text style={styles.welcome}>¡Bienvenido!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu nombre"
                        placeholderTextColor="#ccc"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Escribe tu correo'
                        placeholderTextColor="#ccc"
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <View style={styles.SwitchRow}>
                        <Text style={styles.switchText}>Aceptar términos y condiciones...</Text>
                        <Switch 
                            value={terminos} 
                            onValueChange={setTerminos}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Ingresar"
                            onPress={MostrarAlerta}
                            color={Platform.OS === 'ios' ? '#fff' : 'blue'}
                        />
                    </View>
                </View>
                </Text>
            </ImageBackground>
        );
    }

    return (
        <ImageBackground
            source={MAIN_IMAGE}
            resizeMode="cover"
            imageStyle={styles.mainImageStyle}
            style={styles.mainBackground}
        >
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Button 
                title="Cerrar Sesión / Volver" 
                onPress={() => setShowSplash(true)} 
            />
        </ImageBackground>
    );
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        padding: 20,
    },
    welcome: {
        color: '#fff',
        fontSize: 28, 
        marginBottom: 40,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: '#000',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    SwitchRow: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        marginTop: 10, 
    },
    switchText: {
        color: '#fff', 
        fontSize: 16,
        flexShrink: 1, 
        marginRight: 10,
    },
    buttonContainer: { 
        width: '80%',
        borderRadius: 8,
        overflow: 'hidden', 
        marginTop: 10,
        backgroundColor: Platform.OS === 'ios' ? '#007AFF' : 'transparent', 
    },
});