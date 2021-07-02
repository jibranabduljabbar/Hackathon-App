import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Navigation from '../config/Navigation';

export default function Product(props) {
  const [count, setCount] = useState(1)
  const [less, setless] = useState("")
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Image style={{marginTop: 10,height: 200,width: 200,borderRadius: 10}} source={{uri: props.img}}/>
      <Text style={{fontSize: 25,marginTop: 10,textAlign: "center",fontWeight: "bold"}}>{props.name}</Text>
      <Text style={{fontSize: 10,marginTop: 5,textAlign: "center",}}>{props.dis}</Text>
      <Text style={{fontSize: 10,marginTop: 5,textAlign: "center",color: "green",fontWeight: "bold"}}>Price: {props.price}</Text>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={() => setCount(count + 1)} style={{marginTop: 20,marginBottom: 10,width: 50,padding: 10,backgroundColor: "green"}}>
        <Text style={{textAlign: "center",fontWeight: "bold",color: "white"}}>+</Text>
      </TouchableOpacity>
      <View style={{margin: 10,width: 50,backgroundColor: "white",marginBottom: 10,marginTop: 20,}}>
      <Text style={{textAlign: "center",padding: 10,fontWeight:"bold"}}>{count}</Text>
      </View>      
      <TouchableOpacity onPress={() => setCount(count - 1)} style={{marginTop: 20,marginBottom: 10,width: 50,padding: 10,backgroundColor: "red"}}>
        <Text style={{textAlign: "center",fontWeight: "bold",color: "white"}}>-</Text>
      </TouchableOpacity>
      </View>
      <View style={{margin: 10,width: 300,backgroundColor: "lightgrey",marginBottom: 10,marginTop: 20,}}>
      <Text style={{textAlign: "center",padding: 10,fontWeight:"bold"}}>{less}</Text>
      </View>  
      <TouchableOpacity onPress={(props) => count < 1 ? setless("You have to take at least one Item") : count == 11 ? setless("You can select up to 10 items at a time") : count > 0 ? navigation.navigate("Further Detail") : setless("")} style={{marginTop: 20,marginBottom: 10,width: 130,padding: 10,backgroundColor: "black"}}>
        <Text style={{textAlign: "center",fontWeight: "bold",color: "white"}}>Go to Checkout</Text>
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
      width: 320,
      backgroundColor: "lightgrey",
  },
});