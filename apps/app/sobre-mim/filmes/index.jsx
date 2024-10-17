import React from "react";
import {Text, StyleSheet, ScrollView, Pressable, Image} from "react-native";
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
      },
      texto2: {
          fontSize: 12,
          fontWeight: 'bold',
          color: '#ff1c07',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          marginBottom: 20,
      },
      butt: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 15,
      color: '#ff1c07',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      border: '3px solid #ff1c07',
      color: 'white',
      backgroundColor: '#ff1c07',
      }
})

export default Filmes = () => {
    return  <ScrollView style={styles.container}>
        <Header titulo="Meu Filme Favorito"/>

        <Link style={styles.imgContainer}
        href={{
                pathname: `sobre-mim/detalhe/nefarious`,
                params: {'filme': ('Nefarious', ' 14 de abril de 2023')}
        }}>
        <Image style={styles.imgContainer}
                source={require('../../image/nefarious.jpg')} />
        </Link>
        <Text style={styles.texto1}>Nefarious</Text>
        <Text style={styles.texto2}> 14 de abril de 2023</Text>

        <Link href="/sobre-mim" asChild>
      <Pressable>
        <Text style={styles.butt}>Volte à página inicial!</Text>
      </Pressable>
      </Link>
        </ScrollView>
}