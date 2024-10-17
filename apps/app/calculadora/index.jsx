import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{input}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress('+')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress('-')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress('*')}>
              <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress('/')}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorButton} onPress={handleCalculate}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={handleClear}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  calculator: {
    width: '80%',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  display: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  displayText: {
    color: '#fff',
    fontSize: 40,
  },
  buttonContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#4a4a4a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 28,
    color: '#f5f5f5',
  },
  operatorButton: {
    width: 70,
    height: 70,
    backgroundColor: '#ff5722',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default App;