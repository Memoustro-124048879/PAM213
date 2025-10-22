import React, {useState} from "react";
import {View, TextInput, Text, Button, Alert, StyleSheet, Platform} from "react-native";

export default function TIAScreen() {
  const[nombre, setNombre] = useState("");
  const[contrasena, setContrasena] = useState("");
  const[multexto, setMultitexto] = useState("");
  const MostrarAlerta = () => {
    if (nombre.trim() === "") {
      if(Platform.OS === 'web') {
        alert("Por favor, ingresa tu nombre antes de continuar.");
      } 
      else {
        Alert.alert(
          'Atencion', 
          'Por favor, escribe tu nombre antes de continuar.',
          [
            {text: 'Cancelar'},
            {text: 'Aceptar'}
          ]
        );
      }
    }
    else{
      if(Platform.OS === 'web') {
        alert(`Bienvenido, ${nombre}!`);
      }
      else {
        Alert.alert(
          `Hola`, `Bienvenido, ${nombre}!`,
          [
            {text: 'Cancelar'},
            {text: 'Aceptar'}
          ]
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Práctica: TextInput y Alert</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
    <TextInput
          style={styles.input}
          placeholder='Escribe tu contraseña'
          secureTextEntry={true}
          keyboardType='numeric'
          value={contrasena}
          onChangeText={setContrasena}
     />
    <TextInput
        style={styles.input}
        placeholder='Escribe tu texto'
         multiline={true}
        value={multexto}
        onChangeText={setMultitexto}
    />
      <Button title="Mostrar alerta" onPress={MostrarAlerta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    maarginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 15,
  }
});