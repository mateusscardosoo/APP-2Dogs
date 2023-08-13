import React from 'react'

import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";



export default function About() {
return(
    <View style={styles.container}>
        <View style={styles.master}>

        <Text  style={styles.title}>Serviços</Text> 
     <Image source={require("../../../assets/pliage.png")} style={styles.img} />

    <View style={styles.containerDetails}> 
      <Text style={styles.titleDetails}>Seguro:</Text>
      <Text style={styles.titleDetail}>Plano mensal 24,90/mês</Text>
      <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Gerenciar</Text></TouchableOpacity>
      
    </View>
    <View style={styles.containerDetails}> 
      <Text style={styles.titleDetails}>Garantia:</Text>
      <Text style={styles.titleDetail}>12 meses</Text>
      <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Entre em contato</Text></TouchableOpacity>
    </View>
   
        </View>
   
     
   
  </View>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: "#121212",
      width: '100%',
      alignItems: "center",
        justifyContent: "center",
    },

    master:{
        width: 370,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
    },
    img: {
      height: 300,
      width: '100%',
      resizeMode: "contain",
      backgroundColor: '#313131',
      borderRadius: 6
    },

    containerDetails:{
        backgroundColor: '#313131',
      width: '100%',
      marginTop: 21,
      padding: 21,
      justifyContent: 'center',
      borderRadius: 6
    },

    containerDetailsInfos:{
        backgroundColor: '#313131',
        width: '100%',
        marginTop: 12,
        padding: 21,
        justifyContent: 'center',
        borderRadius: 6
    },


    title: {
      color: "#FFF",
      fontSize: 26,
      marginTop: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 31,
    },
    span:{
        fontWeight: 'bold'
    },

    titleDetails: {
      color: "#FFF",
        alignSelf: 'flex-start',
        fontSize: 24,
      fontWeight: 'bold',
      
    },
    titleDetail:{
        fontSize: 24,
        width: '85%',
        color: '#fff',
        marginTop: 5
    },
    btn: {
      width: 290.41,
      height: 46.9,
      marginTop: 21,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      backgroundColor: "#fff",
     
    },

    btnText:{
        color: '#242424',
        fontWeight: 'bold',
        fontSize: 16
    },
 
  });
  