import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

const tarefas = [
  { id: 1, nome: 'Passear com o cachorro', feito: false, data: '07/08/2024' },
  { id: 2, nome: 'Fazer o almoço', feito: false, data: '07/08/2024' },
  { id: 3, nome: 'Ir ao trabalho', feito: false, data: '07/08/2024' },
  { id: 4, nome: 'Dormir', feito: false, data: '07/08/2024' }
];

const Item = ({ nome }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nome}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={tarefas}
          renderItem={({ item }) => <Item nome={item.nome} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default App;
