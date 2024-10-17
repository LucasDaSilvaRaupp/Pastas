import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Image, ScrollView } from "react-native";
import Cabecalho from '../../../components/Cabecalho'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default Adicione = () => {
    const [imagem, setImagem] = useState(null)
    const [titulo, setTitulo] = useState('')
    const [sobre, setSobre] = useState('')
    const [quando, setQuando] = useState('')
    const [onde, setOnde] = useState('')
    

    const adicionar = async () => {
        try {
            let mem = await AsyncStorage.getItem('lembra')
            if (mem !== null) {
                let json = JSON.parse(mem)
                json.push({
                    imagem: imagem,
                    titulo: titulo,
                    quando: quando,
                    onde: onde,
                    sobre: sobre,
                })
                await AsyncStorage.setItem('lembra', JSON.stringify(json))
            }
            else {
                let mem = JSON.stringify([{
                  imagem: imagem,
                  titulo: titulo,
                  quando: quando,
                  onde: onde,
                  sobre: sobre,
                }])
                await AsyncStorage.setItem('lembra', mem)
            }
            router.push('../');
        }
        catch (erro) {
            console.log(erro)
        }
    }

    const Imagem = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
      });
      console.log(result);
      if(!result.canceled){
          setImagem(result.assets[0].uri);
      }
  }

    return (
        <ScrollView style={styles.container}>
            <Cabecalho titulo="Adicionar Novas Memórias" />
            <View style={styles.input}>
                <TextInput style={styles.sobre} onChangeText={setTitulo}></TextInput>
                <TextInput style={styles.sobre} onChangeText={setSobre}></TextInput>
                <TextInput style={styles.sobre} onChangeText={setQuando}></TextInput>
                <TextInput style={styles.sobre} onChangeText={setOnde}></TextInput>
                <Pressable style={styles.butt} onPress={Imagem}>
                <Text style={styles.texto}>Selecione uma imagem!</Text>
                </Pressable>
               {imagem && <Image source={{ uri: imagem }} style={styles.img} />}  
            </View>
            <Pressable style={styles.butt} onPress={adicionar}>
                <Text style={styles.texto}>Adicionar</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5eef8',
    },
    input: {
        marginBottom: 20,
        padding: 10,
    },
    sobre: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 20,
        fontSize: 15,
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
    texto: {
        color: 'white',
        fontSize: 20,
    },
    img: {
        width: '100%',
        height: 350,
        marginTop: 5,
    },
});