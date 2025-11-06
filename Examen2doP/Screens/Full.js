import { Text, StyleSheet, View, ImageBackground, ScrollView, Button, Alert } from 'react-native';
import React from 'react';

const im1 = require('../assets/Recursos/1.jpg');
const im2 = require('../assets/Recursos/2.jpg');
const im3 = require('../assets/Recursos/3.jpg');
const im4 = require('../assets/Recursos/4.jpg');
const im5 = require('../assets/Recursos/5.jpg');
const im6 = require('../assets/Recursos/6.jpg');

const IMAGE_DATA = [
  { 
    id: '1', 
    source: im1, 
    title: 'Sofi 1', 
    description: 'Es una foto editada',
    details: 'Esta foto me las compartio y la edite. Es el detalle extendido para Sofi 1.',
  },
  { 
    id: '2', 
    source: im2, 
    title: 'Sofi 2', 
    description: 'Es una foto editada',
    details: 'Esta foto me las compartio y la edite. Es el detalle extendido para Sofi 2.',
  },
  { 
    id: '3', 
    source: im3, 
    title: 'Sofi 3', 
    description: 'Es una foto editada',
    details: 'Esta foto me las compartio y la edite. Es el detalle extendido para Sofi 3.',
  },
  { 
    id: '4', 
    source: im4, 
    title: 'Sofi 4', 
    description: 'Es una foto editada',
    details: 'Esta foto me las compartio y la edite. Es el detalle extendido para Sofi 4.',
  },
  { 
    id: '5', 
    source: im5, 
    title: 'Sofi 5', 
    description: 'Es una foto editada',
    details: 'Esta foto me las compartio y la edite. Es el detalle extendido para Sofi 5.',
  },
  { 
    id: '6', 
    source: im6, 
    title: 'Sofi 6', 
    description: 'Es una foto editada',
    details: 'Esta foto me las compartio y la edite. Es el detalle extendido para Sofi 6.',
  },
];

const ImageCard = ({ data }) => {
  
  const handleDetailsPress = () => {
    Alert.alert(
      data.title, 
      data.details, 
      [{ text: 'Cerrar' }] 
    );
  };
  
  return (
    <View style={styles.card}>
      <ImageBackground 
        source={data.source} 
        style={styles.cardBackground} 
        imageStyle={{ borderRadius: 10 }}
        resizeMode="cover"
      >
        <View style={styles.cardOverlay}>
          <Text style={styles.cardTitle}>{data.title}</Text>
          <Text style={styles.cardDescription}>{data.description}</Text>
          <View style={styles.buttonContainer}>
             <Button 
               title="Ver detalles" 
               onPress={handleDetailsPress} 
               color="#3498DB" 
             />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default function Full() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Galería de Imágenes (Cards)</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {IMAGE_DATA.map((item) => (
          <ImageCard key={item.id} data={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EEF2FF', 
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2C3E50',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 20,
    alignItems: 'center',
  },

  card: {
    width: '95%', 
    minHeight: 250, 
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'flex-end', 
    borderRadius: 10,
    overflow: 'hidden', 
  },
  cardOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)', 
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F9FAFB', 
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#D1D5DB', 
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 5,
  },
}); 