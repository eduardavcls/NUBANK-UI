
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export const TransactionHistory = ({ transactions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Extrato de Transferências</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.transactionText}>Valor: R${item.amount.toFixed(2)}</Text>
            <Text style={styles.transactionText}>Data: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  transaction: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionText: {
    fontSize: 16,
  },
});
