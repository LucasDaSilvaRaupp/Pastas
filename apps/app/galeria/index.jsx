import { useState } from "react";
import {Button, Image, View, StyleSheet} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function pickerGaleria(){
    const [image, setImage] = useState('')

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if(!result.canceled){
            setImage(result.assets[0].uri);
        }
    }

    return(
        <View style={style.container}>
            <Button title="Selecione uma imagem!" onPress={pickImage} style={style.butt}/>
            {image && <Image source={{uri: image}} style={style.img}/> }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      width: 200,
      height: 200,
    },
  });

