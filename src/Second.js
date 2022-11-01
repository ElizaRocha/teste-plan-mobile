import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Second() {
  const navigate = useNavigation();

  function navigateBack() {
    navigate.goBack();
  }

  return (
    <View>
      <View style={styles.header}> 
        <TouchableOpacity onPress={navigateBack}>
            <Image
            style={styles.img} 
            source={require('../assets/logo-planxp.png')}
            />
        </TouchableOpacity>
          <Image 
          source={require('../assets/menu.png')} 
          style={styles.menu}/>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>/O que somos?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>/O que fazemos?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>/Plan News</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>/Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1E1E1E',
    paddingTop: 35,
    width:'100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  img: {
    width:105,
    height: 51,
  },
  menu: {
    width: 45,
    height: 45,
  },
  text:{
    fontWeight: "bold",
    fontSize: 20,
    padding: 30,
    color: '#939598'
  },
  container:{
    height:720,
    borderTopWidth:1,
    borderTopColor:'#939598',
    backgroundColor: '#1e1e1e'
  }
})