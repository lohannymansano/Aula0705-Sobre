import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/styles/LoginScreenStyles'; //Ajuste o caminho conforme a sua estrutura de pastas

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMenssage, setErrorMenssage] = useState('');
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

    const handleRegister = () => {
        navigation.navigate('Cadastro');
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
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

    <TextInput 
    style = {styles.input}
    placeholder = "Usuário"
    value = {username}
    onChangeText = {setUsername}
    />

    <TextInput 
    style = {styles.input}
    placeholder = "Senha"
    secureTextEntry
    value = {password}
    onChangeText = {setPassword}
    />

    <TouchableOpacity style = {styles.loginButton} onPress = {handleLogin}>
    <Text style = {styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
    {errorMenssage ? <Text style = {styles.error}>{errorMenssage}</Text> : null}

    <TouchableOpacity onPress = {handleRegister}>
        <Text style = {styles.link}>Cadastre-se</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {handleForgotPassword}>
        <Text style = {styles.link}>Esqueci minha senha</Text>
    </TouchableOpacity>
    </View>
    );
}