import React, { useState } from 'react';
import Firebase from '../config/firebase'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default function Detail(props) {
  
  const [del, setdel] = useState("")
  const [cartno, setcartno] = useState("")
  const [expi, setexpi] = useState("")
  const [cvv, setcvv] = useState("")
  const [name, setname] = useState("") 
  const [err, seterr] = useState("") 
  
  const submit = () => {

      if (del.trim() === "" && cartno.trim() === "" && expi.trim() === "" && cvv.trim() === "" && name.trim() === "") {
        seterr("All Fields are Required!")
      }
     else if (cartno.trim() === "") {
        seterr("All Fields are Required!")
      }
      else if (expi.trim() === "") {
        seterr("All Fields are Required!")
      }
      else if (cvv.trim() === "") {
        seterr("All Fields are Required!")
      }
      else if (name.trim() === "") {
        seterr("All Fields are Required!")
      } else {
        let Checkout = {
          Delivery_Address: del,
          Cart_Number: cartno,
          Expiry_Date: expi,
          CVV: cvv
        }
        Firebase.database().ref('/').child(`Users Checkout/${name}`).set(Checkout)
        .then(() => {
          props.navigation.navigate("Pro")  
        }) 
      }
  }

  return (

    <ScrollView>
    <View style={styles.container}>
    <View style={{}}>  
    <Text style={{fontWeight: "bold",marginLeft: 10,marginTop: 10}}>Full Name: </Text>
    <TextInput onChangeText={(name) => setname(name)} style={{marginTop: 20,borderColor: 'grey',borderWidth: 1,marginLeft: 9,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} placeholder="Mark S/o Myers"/>
    

    <View style={{flexDirection: "row",marginTop: 20}}>
    <Text style={{fontWeight: "bold",marginLeft: 10,marginTop: 10}}>DELiVERY ADDRESS</Text>
    
    </View>
    <TextInput onChangeText={(text) => setdel(text)} style={{marginTop: 20,borderColor: 'grey',borderWidth: 1,marginLeft: 9,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} placeholder="338 Water Harwick Ave"/>
    
    <View style={{flexDirection: "row",marginTop: 70}}>
    <Text style={{fontWeight: "bold",marginLeft: 10,marginTop: 10}}>PAY WITH CREDIT CART</Text>
    <Image style={{height: 40,width: 120,borderRadius: 10,marginRight: 0,marginLeft: 21,marginTop:0}} source={{uri: "https://e7.pngegg.com/pngimages/848/507/png-clipart-logo-brand-payment-product-design-paypal-text-payment.png"}}/>
    </View>
    <TextInput onChangeText={(pri) => setcartno(pri)} secureTextEntry={true} maxLength={16} style={{marginTop: 20,borderColor: 'grey',borderWidth: 1,marginLeft: 9,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} placeholder="1111 2222 3333 4444"/>
  
    <View style={{flexDirection: "row",marginTop: 10}}>
    <Text style={{fontWeight: "bold",marginLeft: 10,marginTop: 10}}>EXPIRES</Text>
    </View>
    <TextInput onChangeText={(expiry) => setexpi(expiry)} style={{marginTop: 20,borderColor: 'grey',borderWidth: 1,marginLeft: 9,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} placeholder="DD/MM/YY"/>
   
    <View style={{flexDirection: "row",marginTop: 10}}>
    <Text style={{fontWeight: "bold",marginLeft: 10,marginTop: 10}}>CVV</Text>
    </View>
    <TextInput secureTextEntry={true} maxLength={3} onChangeText={(cvvv) => setcvv(cvvv)} style={{marginTop: 20,borderColor: 'grey',borderWidth: 1,marginLeft: 9,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} placeholder="..."/>
    <View style={{margin: 10,width: 300,backgroundColor: "white",marginBottom: 0,marginTop: 20,}}>
      <Text style={{textAlign: "center",padding: 10,fontWeight:"bold"}}>{err}</Text>
      </View>
    </View>
    <View style={{textAlign: "center",margin: 10,marginTop: 40,}}>
    <TouchableOpacity style={styles.btn} onPress={()=> submit()}>
        <Text style={{fontWeight: "bold",color: "white",textAlign: "center"}}>Submit Payment</Text>
        </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "grey",
    margin: 10,
    flex: 1,    
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    // marginLeft: 20
  },
  btn: {
    textAlign: "center",
    backgroundColor: "black",
    width: 300,
    marginTop: 0,
    borderRadius: 5,
    padding: 10
}
});