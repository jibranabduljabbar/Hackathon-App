import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

export default function Card(props) {
  
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Image style={{marginTop: 10,height: 200,width: 200,borderRadius: 10}} source={{uri: props.img}}/>
      <Text style={{fontSize: 25,marginTop: 10,textAlign: "center",fontFamily: "Academy Engraved LET",fontWeight: "bold"}}>{props.name}</Text>
      <Text style={{fontSize: 10,marginTop: 5,textAlign: "center",fontFamily: "Academy Engraved LET",}}>{props.dis}</Text>
      <TouchableOpacity style={{marginTop: 20,marginBottom: 10,width: 120,padding: 10,backgroundColor: "black"}}>
        <Text style={{textAlign: "center",fontFamily: "AlNile-Bold",fontWeight: "bold",color: "white"}}>Go to Checkout</Text>
      </TouchableOpacity>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  box1: {
    alignItems: 'center',
    justifyContent: 'center',
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      width: 980,
      backgroundColor: "lightgrey",
  },
});