import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export const PixPage = () => {
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { balance, setBalance } = route.params;
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handlePix = () => {
    const pixAmount = parseFloat(amount);
    if (pixAmount > 0 && pixAmount <= balance) {
      setBalance(balance - pixAmount);
      navigation.goBack();
    } else {
      alert('Valor inválido ou saldo insuficiente');
    }
  };

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const currentStyles = isDarkTheme ? darkStyles : styles;

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.header}>
        <Text style={currentStyles.headerText}>Realizar Pix</Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
      <Text style={currentStyles.label}>Valor:</Text>
      <TextInput
        style={currentStyles.input}
        keyboardType='numeric'
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity style={currentStyles.button} onPress={handlePix}>
        <Text style={currentStyles.buttonText}>Enviar Pix</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#820AD1",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
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
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
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
});

