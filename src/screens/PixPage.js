import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TransactionHistory } from './TransactionHistory';

export const PixPage = () => {
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { balance, setBalance } = route.params;

  const handlePix = () => {
    const pixAmount = parseFloat(amount);
    if (pixAmount > 0 && pixAmount <= balance) {
      const newTransaction = {
        amount: pixAmount,
        date: new Date().toLocaleDateString('pt-BR'),
      };
      setTransactions([...transactions, newTransaction]);
      setBalance(balance - pixAmount);
      setAmount('');
    } else {
      alert('Valor inválido ou saldo insuficiente');
    }
  };

  const toggleHistory = () => setShowHistory(!showHistory);

  if (showHistory) {
    return <TransactionHistory transactions={transactions} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Realizar Pix</Text>
      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity style={styles.button} onPress={handlePix}>
        <Text style={styles.buttonText}>Enviar Pix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.historyButton} onPress={toggleHistory}>
        <Text style={styles.historyButtonText}>Ver Extrato</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#820AD1",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFF',
    fontWeight: '600',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFF',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#FFF',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  historyButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  historyButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  }
})