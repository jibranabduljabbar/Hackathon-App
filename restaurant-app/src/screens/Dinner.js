import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';
import Product from '../components/Product'

export default function Dinner() {
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <TextInput placeholder="Enter Item Name: ??" placeholderTextColor = "grey" style={{marginTop: 10,borderRadius: 5,fontFamily: "Academy Engraved LET",borderColor: 'grey',borderWidth: 1,padding: 10,width: "100%",textAlign: "center",marginBottom: 10}} />
      <Product price="$6.28" name="Zinger Burger" img="http://www.pakistanichefrecipes.com/wp-content/uploads/2018/04/zinger-burger.jpg" dis="Special Zinger Burger"/>
      <Product price="$12.57" name="Broast" img="https://d2liqplnt17rh6.cloudfront.net/coverImages/broasttown_313b979a-8c45-44f9-9083-1a7f30860566-298.jpeg" dis="Special Broast"/>
      <Product price="$5.43" name="Pizza" img="https://st2.depositphotos.com/1684571/6470/i/950/depositphotos_64702909-stock-photo-pizza-with-seafood-on-wood.jpg" dis="Special Pizza"/>
      <Product price="$8.45" name="Chicken Biryani" img="https://recipes.timesofindia.com/thumb/msid-53096628,width-1600,height-900/53096628.jpg" dis="Special Chicken Biryani"/>
      <Product price="$2.43" name="Qurma" img="https://kfoods.com/images1/newrecipeicon/elachi-ka-qurma_888.jpg" dis="Special Qurma"/>
      <Product price="$9.54" name="Nihari" img="https://hamariweb.com/recipes/images/recipeimages/4934.jpg" dis="Fresh "/>
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
  Box2: {
    flex: 2,
    backgroundColor: "lightcyan",
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: "300%",
    marginTop: -10,
    marginLeft: -510,
    marginBottom: 10
  }
});