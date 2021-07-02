import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
// import { Header } from 'react-native-elements'
import Card from '../components/Card';
import Option from '../components/Option'
import Break_Fast from './Break_fast';
import Lunch from './Lunch';
import Snacks from './Snacks';
import Dinner from './Dinner';
import Sweets from './Sweets';

export default function Home(props) {
  return (
    // <ScrollView>
    <View style={styles.container}>
      <ScrollView>
  
  <Option page="Break Fast" name="Break Fast" dis="Today Special Break Fast" img="https://e7.pngegg.com/pngimages/960/241/png-clipart-fried-eggs-and-bread-on-plate-illustration-breakfast-cereal-pancake-omelette-breakfast-food-breakfast.png"/>
      {/* <Card name="Burger" dis="Chicken burger, zinger burger & beef burger" img="http://magazine.foodpanda.pk/wp-content/uploads/sites/13/2019/11/cropped-BurgerBaconPlate.jpg"/> */}
  <Option page="Lunch" name="Lunch" dis="Today Special Lunch" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4ok7U8htwnBhKDE9cmvxCHA83SOsK6tSVo7DLq-IbZUSw0dytSsSVRyPpghdyE1Fv7U&usqp=CAU"/>
      {/* <Card name="Pizza" dis="Pizza sauce & Mozzarella cheese" img="https://www.14thstreetpizza.com/website/images/deals/Turkey-Chunks-20-Incher-Desktop-Grid-Image.png"/> */}
  <Option page="Snacks" name="Snacks" dis="Today Special Snacks" img="https://cdn.iconscout.com/icon/premium/png-512-thumb/snack-2384777-1995073.png"/>
      {/* <Card name="Biryani" dis="Wonderful, simple and satisfying" img="https://butteroverbae.com/wp-content/uploads/2020/10/20201021_142236-750x1024.jpg"/> */}
  <Option page="Dinner" name="Dinner" dis="Today Special Dinner" img="https://image.pngaaa.com/88/4175088-middle.png"/>
      {/* <Card name="Tikka" dis="Special Fry Tikka" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVNvHjzwfgq5oLwW8uQI4qzxR9oFZlr-RdA&usqp=CAU"/> */}
  <Option page="Sweets" name="Sweets" dis="Today Special Sweets" img="https://cdn1.iconfinder.com/data/icons/restaurant-76/64/dessert-sweets-ice-cream-512.png"/>
      {/* <Card name="Fish" dis="Wonderful, Fry Fish" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6qbxv6teJsvfDG9UMK3ZbT-dbMEGCOXkzwmTGDXZqfAA7Gy-oDeG8ZLe9RzobSOmNCc&usqp=CAU"/> */}
      <View style={{marginLeft: 17}}>
      <TouchableOpacity style={styles.btn} onPress={()=> props.navigation.navigate("Login")}>
        <Text style={{fontWeight: "bold",color: "white",textAlign: "center"}}>Log Out</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View> 
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  btn: {
    backgroundColor: "black",
    width: 300,
    marginTop: 17,
    borderRadius: 5,
    padding: 10,
    textAlign: "center"
}
});