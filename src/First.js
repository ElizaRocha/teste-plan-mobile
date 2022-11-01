import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function First() {
  const navigation = useNavigation();

  function navigateToSecond() {
    navigation.navigate("Second");
  }

  return (
    <View>
      <View style={styles.header}> 
        <Image
        style={styles.img} 
        source={require('../assets/logo-planxp.png')}
        />
        <TouchableOpacity onPress={navigateToSecond}>
          <Image source={require('../assets/menu.png')} style={styles.menu}/>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../assets/celular.png')} style={styles.celular}/>
      </View>
      <View style={styles.container}> 
        <View>
            <Text style={styles.title}>
            Lorem ipsum dolor sit amet. Cum galisum illum quo.
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
            Lorem ipsum dolor sit amet. Cum galisum illum quo totam dolorem sit autem
            libero et ratione quasi. Et voluptatibus soluta aut pariatur consequatur aut
              distinctio temporibus. Sed soluta enim sed distinctio deserunt et quidem consequatur 
              et quia accusantium sit omnis nesciunt. 
            Est pariatur architecto ut sunt odit et deserunt amet.
            </Text>
          </View>
          <View>
          <TouchableOpacity>
            <Text style={styles.knowMore}>
            SAIBA MAIS
            </Text>
            </TouchableOpacity>
        </View>
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
  celular:{
    width: 400,
   height:300
  },
  container:{
    backgroundColor: '#1e1e1e',
    height: 720
  },
  title:{
    padding:20,
    color: '#939598',
    fontSize: 20
  },
  text:{
    paddingLeft: 20,
    paddingRight: 20,
    color: '#ffffff',
  },
  knowMore:{
    color:'#939598',
    padding: 20
  }

})