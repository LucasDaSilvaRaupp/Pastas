import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailInputError, setEmailInputError] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@(gmail\.com|estudante\.sesisenai\.org\.br|uol\.com\.br)$/;
    return regex.test(email);
  };

  const handleInputChange = (setter, value) => {
    setter(value);
    if (name && email && password) {
      setFormError('');
    }
  };

  const handleLogin = async () => {
    if (!name || !email || !password) {
      setFormError('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailInputError(true);
      setFormError('Email formulado incorretamente');
      return;
    }

    setEmailInputError(false);
    setFormError('');

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).trim();
    setSuccessMessage(`Bem-vindo ao site, ${capitalizedName}`);

    try {
      const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const contentType = response.headers.get('content-type');
      const responseData = contentType.includes('application/json') ? await response.json() : await response.text();

      if (response.ok) {
        setSuccessMessage('Cadastro realizado com sucesso!');
      } else {
        setFormError(`Erro ao registrar o usuário: ${responseData.message || 'Tente novamente.'}`);
      }
    } catch (error) {
      setFormError(`Erro ao conectar ao servidor: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Cadastre-se</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => handleInputChange(setName, text)}
          />
          <TextInput
            style={[styles.input, emailInputError && styles.inputError]}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailInputError(!validateEmail(text));
            }}
            onBlur={() => setEmailInputError(!validateEmail(email))}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={(text) => handleInputChange(setPassword, text)}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon name={passwordVisible ? 'visibility' : 'visibility-off'} size={24} color="#495057" />
            </TouchableOpacity>
          </View>
          {formError ? <Text style={styles.formError}>{formError}</Text> : null}
          {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#343A40',
    marginBottom: 24,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#CED4DA',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#495057',
  },
  inputError: {
    borderColor: '#DC3545',
    borderWidth: 2,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderColor: '#CED4DA',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formError: {
    color: '#DC3545',
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 14,
  },
  success: {
    color: '#28A745',
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});