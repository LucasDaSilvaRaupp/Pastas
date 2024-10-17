import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ titulo }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{titulo}</Text>   
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
title: {
  backgroundColor: '#9b59b6',
  color: 'white',
  fontSize: 25,
  marginTop: 15,
  marginBottom: 15,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
  });

