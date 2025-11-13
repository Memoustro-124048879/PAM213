import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TIAScreen from './TIAScreen'
import ISScreen from './ISScreen'
import SVScreen from './SVScreen'
import AIScreen from './AIScreen'
import FSLScreen from './FSLScreen'
import ModalScreen from './ModalScreen'
import BSScreen from './BSScreen'
import RepasoScreen from './RepasoScreen'
import FLScreen from './FLScreen'



export default function MenuScreen() {

    const [screen, setScreen] = useState('menu'); /* desestructuración */ /* declaración del estado e inicialización del menu */

    switch (screen) {
      case 'contador':
        return <ContadorScreen />;
      case 'botones':
        return <BotonesScreen />;
      case 'text input & alert':
        return <TIAScreen />;
      case 'imageBackgroung & slapshScreen':
        return <ISScreen />;
      case 'scrollView':
        return <SVScreen />;
      case 'activityIndicator':
        return <AIScreen />;
      case 'FlatList':
        return <FSLScreen />;
      case 'Section List':
        return <FLScreen />;
      case 'modal':
        return <ModalScreen />;
      case 'bottom sheet':
        return <BSScreen />;
      case 'repaso':
        return <RepasoScreen />;
      case 'menu':
          default:
            return (
                <View style={styles.container}>
                    <Text style={styles.texto}>Menú de Prácticas</Text>
                  <View style={styles.celdas}>
                    <Button title='Pract: Contador' onPress={()=>setScreen('contador')}/>{/* el valor que esté dentro de setScreen debe ser igual al del switch */}
                    <Button title='Pract: Buttons' onPress={()=>setScreen('botones')}/>
                    <Button title='Pract: Text Input & Alert' onPress={()=>setScreen('text input & alert')}/>
                    <Button title='Pract: ImageBackgroung & SlapshScreen' onPress={()=>setScreen('imageBackgroung & slapshScreen')}/>
                    <Button title='Pract: ScrollView' onPress={()=>setScreen('scrollView')}/>
                    <Button title='Pract: ActivityIndicator' onPress={()=>setScreen('activityIndicator')}/>
                    <Button title='Pract: Section List' onPress={()=>setScreen('Section List')}/>
                    <Button title='Pract: Modal ' onPress={()=>setScreen('modal')}/>
                    <Button title='Pract: Bottom Sheet ' onPress={()=>setScreen('bottom sheet')}/>
                    <Button title='Pract: Repaso ' onPress={()=>setScreen('repaso')}/>
                    <Button title='Pract: FlatList' onPress={()=>setScreen('FlatList')}/>
                  </View>
                </View>
              )
    }
  }


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
  },
  celdas:{
    marginTop: 15,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  }
})