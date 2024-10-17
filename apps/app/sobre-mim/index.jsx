import React from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Link } from 'expo-router'
import Header from "../../components/header";

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
        borderRadius: '50%',
        marginBottom: 15,
    },
    texto1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff1c07 ',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 15,
    },
    texto2: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ff1c07',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    },
    texto3: {
        marginTop: 25,
        marginBottom: 30,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4a235a',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
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

export default Sobre = () => {
    return <View style={styles.container}>
        <Header titulo="Meu App"/>
        <Image style={styles.imgContainer}
                source={require('../image/eu.jpg')} />
        <Text style={styles.texto1}>Bem-Vindo(a) ao Meu App</Text>
        <Text style={styles.texto2}>Olá!</Text>
        <Text style={styles.texto2}>Me chamo Lucas da Silva Raupp!</Text>
        <Text style={styles.texto2}>Nasci no dia 06/02, em Florianópolis.</Text>
        <Text style={styles.texto2}>Tenho 17 anos de idade.</Text>
        <Text style={styles.texto2}>E estou cursando o terceiro ano do ensino médio na escola Sesi Senai em São José.</Text>
        <Text style={styles.texto3}>Clique abaixo no que deseja visitar!</Text>
        <Link href="./filmes" asChild>
      <Pressable>
        <Text style={styles.butt} >Veja meu filme favorito!</Text>
      </Pressable>
      </Link>
      <Link href="./viagens" asChild>
      <Pressable>
        <Text style={styles.butt} >Veja minhas viagens dos sonhos!</Text>
      </Pressable>
      </Link>
    </View>
}