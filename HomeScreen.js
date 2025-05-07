import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from '../src/styles/HomeScreenStyles'; //Ajuste o caminho conforme a sua estrutura de pastas

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Notícias de Hoje</Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// simulação de dados de noticias
const newsData = [
    { id: '1', title: 'Ultimas noticias sobre comida', description: 'Novidades sobre as comidas inovadoras'},
    { id: '2', title: 'Mercado Financeiro avança com esperimentos', description: 'Analise do desempenho do mercardo em relação as financeiro'},
    { id: '3', title: 'Dicas de preparação escolar', description: 'Jovens montam video aula para estudos'},
    { id: '4', title: 'Novas atualizações sobre o uso do celular', description: 'Governo esta revendo a lei do uso de celular no ensino meedio'},
];


const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f8ff',
//     paddingTop: 40, 
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   newsItem: {
//     backgroundColor: 'white',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//   },
// });