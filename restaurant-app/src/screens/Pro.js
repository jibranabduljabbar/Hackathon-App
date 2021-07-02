import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button} from 'react-native';

export default function Pro(props) {
  return (
    <View style={styles.container}>
    <Image style={{marginTop: -50,width: 170,height: 170,textAlign: "center",borderRadius: 100}} source={require('../../assets/login_logo.png')}/>
    <View style={{margin: 10,width: 300,backgroundColor: "lightgrey",borderRadius: 10,marginBottom: 10,marginTop: 40,}}>
      <Text style={{textAlign: "center",padding: 10,fontWeight:"bold"}}>Thanks for placing an order. Your order is pending.</Text>
      </View> 
      <TouchableOpacity style={styles.btn} onPress={()=> props.navigation.navigate("Home")}>
        <Text style={{fontWeight: "bold",color: "white",textAlign: "center"}}>Home</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: "black",
    width: 300,
    marginTop: 17,
    borderRadius: 5,
    padding: 10
}
});
