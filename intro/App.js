//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState}from 'react';

//2. Main: Zona de componentes
export default function App() {
  return (
    <View style={styles.container}>
      <Text> Contador: </Text> {/* soy un comentario */}
     {/*  <Button></Button> */}
      <Button title="Agregar"/> {/* Otra forma de agregar un boton */}
      <StatusBar style="auto" />

    </View>
  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
