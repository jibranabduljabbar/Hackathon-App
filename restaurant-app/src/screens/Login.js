import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button} from 'react-native';
import Firebase from '../config/firebase'

export default function Login(props) {

  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")
  const [err, seterr] = useState("")

  const Loginf = () => {
  
      Firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('You Are Seccussfully Sign-In! ===> ',user)   
        props.navigation.navigate("Home")  
      })
      .catch((error) => {
        var errorMessage = error.message;
        seterr(errorMessage)
      });
      setemail("")
      setpassword("")
      seterr("")
  }

  return (
    <View style={styles.container}>
    {/* <Text style={{fontWeight: "bold",fontFamily: "Academy Engraved LET",fontSize: 30}}>Login</Text> */}
    <Image style={{width: 200,height:200,marginTop: 30,margin: 15,borderRadius: 100}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWsIInhUeAnK-bvK5LMo_qIbj5kY8yiTcA&usqp=CAU"}}/>
    <TextInput value={email} onChangeText={(email) => setemail(email)} style={{borderColor: 'grey',borderWidth: 1,margin: 20,padding: 10,width:300,borderRadius: 5}} keyboardType={'email-address'} placeholder="Enter Your Email Address..."/>
    <TextInput value={password} onChangeText={(pass) => setpassword(pass)} style={{borderColor: 'grey',borderWidth: 1,margin: 20,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} secureTextEntry={true} placeholder="Enter Your Password..."/>
    <View style={{margin: 10,width: 300,backgroundColor: "lightgrey",marginBottom: 10,marginTop: 20,}}>
      <Text style={{textAlign: "center",padding: 10,fontWeight:"bold"}}>{err}</Text>
      </View>  
        <TouchableOpacity style={styles.btn} onPress={()=> Loginf()}>
        <Text style={{fontWeight: "bold",color: "white",textAlign: "center"}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 18,}} onPress={()=> props.navigation.navigate("SignUp")}>
        <Text style={{fontWeight: "bold",fontSize: 10,textAlign: "center"}}>Don't have account? Click here to SignUp </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 15,}} onPress={()=> props.navigation.navigate("Home")}>
        <Text style={{marginBottom: 20,fontWeight: "bold",fontSize: 10,textAlign: "center"}}>Skipped ➡️➡️</Text>
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
