//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState}from 'react';

//2. Main: Zona de componentes
export default function App() {

  const [contador,setContador]=useState(0); /* Destructuración */

  return (
    <View style={styles.container}>
      <Text> Contador: {contador} </Text> {/* soy un comentario */}
     {/*  <Button></Button> */}
      <Button title="Agregar" onPress={()=>setContador(contador+1)}/> {/* Otra forma de agregar un boton */}
      <Button title="Quitar" onPress={()=>setContador(contador-1)}/> {/* Desminuimos al contador */}
      <Button title="Reiniciar" onPress={()=>setContador(contador-contador)}/> {/* Reiniciamos el contador */}
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
