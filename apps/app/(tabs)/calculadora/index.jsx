import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput} from 'react-native';

const App = () => {
  const [number, onChangeText] = useState('')
  const[number2, onChangeText2] = useState('')
  const [resultado, setResultado] = useState('')
  
  const soma = function (){
    setResultado(Number(number) + Number(number2))
  }

  const subtracao = function (){
    setResultado(Number(number) - Number(number2) )
  }

  const multiplicacao = function (){
    setResultado(Number(number) * Number(number2))
  }

  const divisao = function (){
    setResultado(Number(number) % Number(number2))
  }

  return (
    <View style={styles.container}>
    <Text>Calculadora!</Text>

<View style={styles.inputContainer}>
  <br></br><TextInput
      onChangeText={onChangeText}
      value={number}
      placeholder=' Insira um número'
      keyboardType='numeric'
      />
<br></br><TextInput
      onChangeText={onChangeText2}
      value={number2}
      placeholder=' Insira outro número'
      keyboardType='numeric'
      />
</View>

<View style={styles.buttonContainer}>
      <br></br><Button
      title='+'
      onPress={() => soma()}
      ></Button>
      <br></br><Button
      title='-'
      onPress={() => subtracao()}
      ></Button>
      <br></br><Button
      title='X'
      onPress={() => multiplicacao()}
      ></Button>
      <br></br><Button
      title='%'
      onPress={() => divisao()}
      ></Button>
 </View>

      <br></br><Text>O valor é {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  } ,
  buttonContainer:{
    flexDirection:'row'
  },
  inputContainer:{
    flexDirection:'row'
  }
});

export default App;