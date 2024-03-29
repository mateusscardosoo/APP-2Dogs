import React from 'react'

import { StyleSheet, Image, Text, View,TouchableOpacity } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Text style={styles.title}>Sobre</Text>
      </View>

      <View style={styles.imageView}>
        <Image source={require("../../../assets/pliage.png")} style={styles.image} />
      </View>

      <View style={styles.chassiView}>
        <Text style={styles.titleDetails}>Chassi:</Text>
        <Text style={styles.infoDetails}>HXJ937HAHG0-3</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.titleDetails}>Termo de Transferencia:</Text>
        <Text style={styles.infoDetails}>Declaram-se para os devidos fins que TWO DOGS LTDA, transfere a posse da Bicicleta Pliage Alloy Elétrica, Número de Série: HXJ937HAHG0-3 - para Lucas Zeferino. Por essa transferência foi pago o valor de R$ 8.350,50 em 14/08/2023</Text>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Transferir</Text>
          </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: "#121212",
    padding: '5%',
    height: '100%',
  },
  titleView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#ffffff",
  },
  imageView: {
    backgroundColor: '#313131',
    height: '40%',
    borderRadius: 6,
    marginBottom: '5%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  chassiView: {
    backgroundColor: '#313131',
    borderRadius: 6,
    padding: '3%',
    marginBottom: '5%',
  },
  infoView: {
    backgroundColor: '#313131',
    borderRadius: 6,
    padding: '3%',
  },
  titleDetails: {
    fontSize: 21,
    fontWeight: 'bold',
    color: "#ffffff",
  },
  infoDetails: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: '0.5%'
  },
  span: {
    fontWeight: 'bold'
  },
  btn: {
    color: "#ffffff",
    backgroundColor: "#fff",
    color: '#242424',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    borderRadius: 5,
    marginTop: '3%'
  },
});