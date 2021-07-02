import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import Firebase from '../config/firebase'

export default function SignUp(props){
  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")
  const [age , setage] = useState("")
  const [address , setaddress] = useState("")
  const [err, seterr] = useState("")

  const SignUpf = () => {

      Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log('This Is Main Data ===> ',user)
        props.navigation.navigate("Login")  
      })
      .catch((error) => {
        var errorMessage = error.message;
        seterr(errorMessage)
        // ..
      });
      setemail("")
      setpassword("")
      seterr("")
    }


  return (
    <ScrollView>
    <View style={styles.container}>
    {/* <Text style={{fontWeight: "bold",fontFamily: "Academy Engraved LET",fontSize: 30}}>Create your Account</Text> */}
    <Image style={{width: 200,height:200,marginTop: 30,margin: 15,borderRadius: 100}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWsIInhUeAnK-bvK5LMo_qIbj5kY8yiTcA&usqp=CAU"}}/>
    <TextInput onChangeText={(name) => setname(name)} style={{borderColor: 'grey',borderWidth: 1,margin: 20,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} placeholder="Enter Your Full Name..."/>
    <TextInput onChangeText={(email) => setemail(email)} style={{borderColor: 'grey',borderWidth: 1,margin: 20,padding: 10,width:300,borderRadius: 5}} keyboardType={'email-address'} placeholder="Enter your Email Address..."/>
    <TextInput onChangeText={(pass) => setpassword(pass)} style={{borderColor: 'grey',borderWidth: 1,margin: 20,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} secureTextEntry={true} placeholder="Enter Your Password..."/>
    <TextInput onChangeText={(age) => setage(age)} style={{borderColor: 'grey',borderWidth: 1,margin: 20,padding: 10,width:300,borderRadius: 5}} keyboardType={'default'} placeholder="Enter Your Age..."/>
    <TextInput onChangeText={(addr) => setaddress(addr)} style={{borderColor: 'grey',borderWidth: 1,margin: 20,padding: 10,width:300,borderRadius: 5}} keyboardType={'email-address'} placeholder="Enter Your Address..."/>
    <View style={{margin: 10,width: 300,backgroundColor: "lightgrey",marginBottom: 10,marginTop: 20,}}>
      <Text style={{textAlign: "center",padding: 10,fontWeight:"bold"}}>{err}</Text>
      </View>  
        <TouchableOpacity onPress={()=> SignUpf()} style={styles.btn}>
        <Text style={{fontWeight: "bold",color: "white",textAlign: "center"}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 18,}} onPress={()=> props.navigation.navigate("Login")}>
        <Text style={{fontWeight: "bold",fontSize: 10,textAlign: "center"}}>Already Rigistered, Login now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 15,}} onPress={()=> props.navigation.navigate("Home")}>
        <Text style={{marginBottom: 20,fontWeight: "bold",fontSize: 10,textAlign: "center"}}>Skipped ➡️➡️</Text>
        </TouchableOpacity>
        
    </View>
    </ScrollView>
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