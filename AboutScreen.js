import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/styles/AboutScreenStyles'; //Ajuste o caminho conforme a sua estrutura de pastas

export default function LoginScreen() {
    const navigation = useNavigation();

    const handleLogin  = () => {
        if (username === 'aluno' && password === 'Senai1234') {
            navigation.navigate('Home');
        } else if (username === 'root' && password === 'root'){
            navigation.navigate('AdiminHome');
        } else{
            setErrorMenssage('Usuário ou senha incorretos.');
            setTimeout(() => setErrorMenssage(''),2000);
        }
    };

    return(
        <View style = {styles.container}>
        {/*Balão estilizado*/}
        <View style = {styles.bubbleContainer}>
            <View style = {styles.bubble}>
        <Text style = {styles.bubbleText}>Logo</Text>
        <Text style = {styles.bubbleText}>Empresa</Text>
        </View>
    </View>

    {/*Título*/}
    <Text style = {styles.title}>Bem Vindo!</Text>

    <p>Versão: Versão 1.00</p>

    <TouchableOpacity style = {styles.loginButton} onPress = {handleLogin}>
    <Text style = {styles.loginButtonText}>Visite nosso site</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.loginButton} onPress = {handleLogin}>
    <Text style = {styles.loginButtonText}>Entre em contado por email</Text>
    </TouchableOpacity>
    </View>
    );
}