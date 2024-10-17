import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cabecalho = ({ titulo }) => {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.title}>{titulo}</Text>
    </View>
  );
};
export default Cabecalho;

const styles = StyleSheet.create({
cabecalho: {
  backgroundColor: '#9b59b6',
},
title: {
   backgroundColor: '#9b59b6',
  color: 'white',
  fontSize: 25,
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: 40, 
  marginBottom: 20,
}
  });