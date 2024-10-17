import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const TelaInicio = () => {
    return (
        <View style={styles.container}>
            <Link href='/calculadora' style={styles.link}>
                <Text style={styles.linkText}>Calculadora</Text>
            </Link>

            <Link href='/Pokemon' style={styles.link}>
                <Text style={styles.linkText}>Pokemon</Text>
            </Link>

            <Link href='/santander' style={styles.link}>
                <Text style={styles.linkText}>Santander</Text>
            </Link>

            <Link href='/iFome' style={styles.link}>
                <Text style={styles.linkText}>iFome</Text>
            </Link>

            <Link href='/splash' style={styles.link}>
                <Text style={styles.linkText}>Splash Screen</Text>
            </Link>

            <Link href='/camera' style={styles.link}>
                <Text style={styles.linkText}>Camera</Text>
            </Link>

            <Link href='/tarefas' style={styles.link}>
                <Text style={styles.linkText}>Lista de Tarefas</Text>
            </Link>

            <Link href='/Memorias' style={styles.link}>
                <Text style={styles.linkText}>Memorias</Text>
            </Link>

            <Link href='/Sobre' style={styles.link}>
                <Text style={styles.linkText}>Sobre Mim</Text>
            </Link>

            <Link href='/TaskHub' style={styles.link}>
                <Text style={styles.linkText}>Login</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f7fa',
        padding: 20,
    },
    link: {
        marginVertical: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#ff5722',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    linkText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default TelaInicio;
