import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const houses =[
    {
        title: 'DC Comics', 
        data: [
            'Batman',
            'Batman',
            'Batman',
        ],
    },
    {
        title: 'Marvel Comics',
        data: [
            'Black Panter',
            'Black Panter',
            'Black Panter',
        ],
    }
];

const FLScreen = () => {
  return (
    <View style={Styles.container}>
      <SectionList
        sections={houses}
        keyExtractor={(item)=>item}
        renderItem={({item})=><Text style={Styles.item}>{item}</Text>}
        renderSectionHeader={({section})=>(
          <Text style={Styles.sectionHeader}>{section.title}</Text>
        )}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    marginTop:20,
  },
  item:{
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader:{
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
});

export default FLScreen;