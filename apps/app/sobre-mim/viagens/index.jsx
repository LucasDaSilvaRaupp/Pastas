import React from "react";
import {View, Text, StyleSheet, ScrollView, Pressable, Image} from "react-native";
import { Link } from 'expo-router'
import Header from "../../../components/header";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
      },
      imgContainer: {
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          width: 100,
          height: 100,
          borderRadius: '10%',
          marginBottom: 5,
      },
      texto1: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#4a235a',
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          marginBottom: 20,
      },
      butt: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 15,
      color: '#512e5f',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      border: '3px solid #512e5f',
      color: 'white',
      backgroundColor: '#512e5f',
      }
})

export default Viagens = () => {
    return <ScrollView style={styles.container}>
    <Header style={styles.titulo} titulo="Viagens dos Sonhos"/>
    <Image style={styles.imgContainer}
        
                source={require('../../image/inglaterra.jpg')} />
        <Text style={styles.texto1}>Inglaterra</Text>
        <Image style={styles.imgContainer}
                source={require('../../image/grecia.jpg')} />
        <Text style={styles.texto1}>Grécia</Text>
        <Image style={styles.imgContainer}
                source={require('../../image/usa.jpg')} />
        <Text style={styles.texto1}>Eua</Text>
        <Image style={styles.imgContainer}
                source={require('../../image/canada.jpg')} />
        <Text style={styles.texto1}>Canada</Text>
    <Link href="/sobre-mim" asChild>
      <Pressable>
        <Text style={styles.butt}>Volte à página inicial!</Text>
      </Pressable>
      </Link>
    </ScrollView>
}