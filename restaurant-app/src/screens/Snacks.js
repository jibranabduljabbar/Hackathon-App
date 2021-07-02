import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';
import Product from '../components/Product'

export default function Snacks() {
  
  return (
    <View style={styles.container}>
<ScrollView>
    <TextInput placeholder="Enter Item Name: ??" placeholderTextColor = "grey" style={{marginTop: 10,borderRadius: 5,fontFamily: "Academy Engraved LET",borderColor: 'grey',borderWidth: 1,padding: 10,width: "100%",textAlign: "center",marginBottom: 10}} />
      <Product price="$6.28" name="Samosa" img="https://www.thespruceeats.com/thmb/t895GACMOPgYITr2DaGJq6IhRUc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1127143255-5c5f7e3546e0fb0001442255.jpg" dis="Fresh Samosa"/>
      <Product price="$12.57" name="Lays" img="https://inhabitat.com/wp-content/blogs.dir/1/files/2014/02/Super-Bowl-Tortilla-Chips-889x592.jpg" dis="Fresh Lays"/>
      <Product price="$5.43" name="Pop Corn" img="https://thumbs.dreamstime.com/b/yellow-movie-popcon-close-up-popconr-71524728.jpg" dis="Special Pop Corn"/>
      <Product price="$8.45" name="Aloo Pakora" img="https://static.toiimg.com/thumb/54669067.cms?imgsize=257013&width=800&height=800" dis="Fresh Pakora"/>
      <Product price="$2.43" name="Nimko" img="https://cdn.shopify.com/s/files/1/1349/8759/products/Mix_Nimko_Bowls-01_1024x1024.jpg?v=1587283748" dis="Special Nimko"/>
      <Product price="$9.54" name="Snack Papad" img="https://c.ndtvimg.com/2020-08/b6hpgi2_papad_625x300_19_August_20.jpg" dis="Special Snack Papad "/>
      <TouchableOpacity style={{marginTop: 20,marginBottom: 10,width: 337,padding: 10,backgroundColor: "black"}}>
        <Text style={{textAlign: "center",fontWeight: "bold",color: "white"}}>See More ➡️</Text>
      </TouchableOpacity>
      </ScrollView>
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
});