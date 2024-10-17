import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, Image, View, FlatList } from "react-native";
import { Link } from 'expo-router'
import Cabecalho from '../../components/Cabecalho'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Memorias = () => {
    const [mem, setMem] = useState([])

    useEffect(() => {
        async function Memories() {
            const value = await AsyncStorage.getItem('lembra');
            if (value !== null) {
                setMem(JSON.parse(value))
            } else {
                setMem([])
            }
        }
        Memories()
    }, [])

    return (
        <View style={styles.container}>
            <Cabecalho titulo="Memórias" />
            <View style={styles.container}>
                <FlatList
                    data={mem}
                    renderItem={({ item }) => (
                        <View style={styles.memoria}>
                            <Image source={{ uri: item.imagem }} style={styles.img} />
                            <Text style={styles.titulo}>{item.titulo}</Text>
                            <Text style={styles.texto1}>{item.sobre}</Text>
                            <Text style={styles.texto2}>{item.quando}</Text>
                            <Text style={styles.texto3}>{item.onde}</Text>
                        </View>
                    )}
                />
             </View>
              <Link href="./add" asChild>
                <Pressable>
                  <Text style={styles.butt}>Adicionar!</Text>
                </Pressable>
              </Link>
            </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    memoria: {
        backgroundColor: '#f5eef8',
        marginTop: 10,
        marginBottom: 20,
    },
    img: {
        width: '100',
        height: 350,
    },
    titulo: {
        fontSize: 40,
        color: '#4a235a',
        fontWeight: 'bold',
        marginBottom: 5,
       marginLeft: 10,
    },
    texto1: {
        fontSize: 30,
        color: '#4a235a',
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
    },
    texto2: {
      fontSize: 20,
      color: '#4a235a',
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 10,
  },
   texto3: {
    fontSize: 15,
    color: '#4a235a',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
},
    butt: {
      backgroundColor: '#4a235a',
      color: 'white',
      justifyContent: 'center',
      fontSize: 20,
      padding: 15,
      alignItems: 'center',
      textAlign: 'center',
    },
})