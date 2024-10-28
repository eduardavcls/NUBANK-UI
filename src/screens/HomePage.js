import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from './ThemeContext';
import boleto from "../components/boleto.png";
import dinheiro from "../components/dinheiro.png";
import Logo from "../components/logo.png";
import Mastercard from "../components/mastercard.png";
import pix from "../components/pix.png";
import Setting from "../components/setting.png";
import Wallet from "../components/Wallet.png";

;

export function Home() {
  const [balance, setBalance] = useState(250.76);
  const [hideBalance, setHideBalance] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const toggleHideBalance = () => setHideBalance(!hideBalance);
  const currentStyles = isDarkTheme ? darkStyles : styles;

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.content}>
        <View style={currentStyles.header}>
          <Image source={Logo} />
          <TouchableOpacity onPress={toggleTheme}>
            <Text style={currentStyles.toggleThemeText}>
              {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={currentStyles.card}>
          <View style={currentStyles.cardHeader}>
            <View />
            <Image source={Mastercard} />
          </View>
          <View style={currentStyles.cardFooter}>
            <Text style={currentStyles.cardFooterText}>Maria Eduarda</Text>
            <TouchableOpacity onPress={toggleHideBalance}>
              <Text style={currentStyles.hideBalanceText}>
                {hideBalance ? 'Mostrar Saldo' : 'Ocultar Saldo'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={currentStyles.cardDetails}>
          <View style={currentStyles.cardDetailsHeader}>
            <Text style={currentStyles.cardDetailsHeaderText}>Saldo disponível</Text>
            <Image source={Wallet} />
          </View>
          <Text style={currentStyles.cardDetailsTextValue}>
            {hideBalance ? '****' : `R$${balance.toFixed(2)}`}
          </Text>
        </View>
      </View>
      <View style={currentStyles.footer}>
        <Text style={currentStyles.footerText}>Do que precisa?</Text>
        <ScrollView
          style={currentStyles.footerScrollCardContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <TouchableOpacity
            style={currentStyles.footerCard}
            onPress={() => navigation.navigate('PixPage', { balance, setBalance })}
          >
            <Image source={pix} />
            <Text style={currentStyles.footerCardText}>Fazer um Pix</Text>
          </TouchableOpacity>
          <View style={currentStyles.footerCard}>
            <Image source={boleto} />
            <Text style={currentStyles.footerCardText}>Pagar um boleto</Text>
          </View>
          <View style={currentStyles.footerCard}>
            <Image source={dinheiro} />
            <Text style={currentStyles.footerCardText}>Fazer um depósito</Text>
          </View>
          <View style={currentStyles.footerCard}>
            <Image source={pix} />
            <Text style={currentStyles.footerCardText}>Fazer uma transferência</Text>
          </View>
          <View style={currentStyles.footerCard}>
            <Image source={pix} />
            <Text style={currentStyles.footerCardText}>Fazer uma recarga</Text>
          </View>
        </ScrollView>
        <View style={currentStyles.cardFinal}>
          <Image source={Wallet} />
          <Text style={currentStyles.cardFinalText}>Caixinhas R$50,00</Text>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooter: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooterText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "600",
    lineHeight: 36,
  },
  cardDetails: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    height: 120,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetailsHeaderText: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  cardDetailsTextValue: {
    color: "#FFF",
    fontSize: 36,
    lineHeight: 54,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    paddingTop: 32,
  },
  footerText: {
    marginLeft: 50,
    color: "#FFF",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "600",
  },
  footerScrollCardContainer: {
    width: "100%",
    height: 300,
    paddingHorizontal: 19,
  },
  footerCard: {
    marginTop: 30,
    marginLeft: 8,
    width: 110,
    height: 127,
    elevation: 5,
    borderRadius: 27,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 13,
  },
  footerCardText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "600",
  },
  cardFinal: {
    padding: 20,
    width: "90%",
    height: 70,
    borderRadius: 20,
    marginTop: -100,
    marginLeft: 20,
    elevation: 1,
    backgroundColor: "#414345",
  },
  cardFinalText: {
    fontSize: 12,
    color: "#FFF",
    fontWeight: "600",
    lineHeight: 20,
  },
  hideBalanceText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "600",
  },
});
