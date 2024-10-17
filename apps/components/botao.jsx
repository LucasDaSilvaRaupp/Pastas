import { Pressable, View, Text, StyleSheet} from "react-native";
import React from "react";


const botao = function(tag, tipo, onPress){
    return <Pressable
    style={[style.button, tipo === 'number' ? {backgroundColor: 'gray'} : {backgroundColor:'yellow'}]}
    onPress={onPress}>
<View style={style.buttonContainer}>
    <Text>{tag}</Text>
</View>
    </Pressable>
    
}
export default botao;