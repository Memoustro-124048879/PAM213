import { Text, StyleSheet, View } from 'react-native'

export default function ISScreen()  {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Proximamente por Guillermo & equipo</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    texto:{
    color:'#a409c0ff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',  
  }
})