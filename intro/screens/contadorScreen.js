//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState}from 'react';

//2. Main: Zona de componentes
export default function App() {

  const [contador,setContador]=useState(0); /* Destructuración */

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Contador:</Text> 
      <Text style={styles.numer}> {contador} </Text> 
     
      <Button title="Agregar" onPress={()=>setContador(contador+1)}  style={styles.cuadro}/> {/* Otra forma de agregar un boton */}
      <Button title="Quitar" onPress={()=>setContador(contador-1)}/> {/* Desminuimos al contador */}
      <Button title="Reiniciar" onPress={()=>setContador(0)}/> {/* Reiniciamos el contador */}
      <StatusBar style="auto" />
    </View>
  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6f0cdfff',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  texto:{
    color:'yellow',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through'
  },
  numer:{
    color:'orange',
    fontSize: 35,
    fontFamily: 'Courier',
    fontWeight: 700,
    fontStyle: 'normal',
    textDecorationLine: 'underline'
  }
});

