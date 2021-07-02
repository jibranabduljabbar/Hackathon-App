import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';
import Product from '../components/Product'

export default function Break_Fast() {
  
  return (
    <View style={styles.container}>
      <ScrollView>
    <TextInput placeholder="Enter Item Name: ??" placeholderTextColor = "grey" style={{marginTop: 10,borderRadius: 5,fontFamily: "Academy Engraved LET",borderColor: 'grey',borderWidth: 1,padding: 10,width: "100%",textAlign: "center",marginBottom: 10}} />
      <Product price="$6.28" name="Halwa Puri" img="https://www.foodofpakistan.com/uploads/recipe/161338345211548488924.jpg" dis="Fresh Halwa Puri"/>
      <Product price="$12.57" name="Bread With Tea" img="https://i.pinimg.com/originals/42/58/60/4258600fcb4f64f3796d8b6245de0ecb.png" dis="Special Bread With Tea"/>
      <Product price="$5.43" name="Cake With Tea" img="https://www.theseasonedmom.com/wp-content/uploads/2020/07/French-Farmhouse-Breakfast-Cake-2.jpg" dis="Special Cake With Tea"/>
      <Product price="$8.45" name="Egg Toast" img="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/03/egg-toast-recipe.jpg" dis="Special Egg Toast"/>
      <Product price="$2.43" name="Sandwich" img="https://img.apmcdn.org/a904ed67dcc0cb24920a994440a0d106545c32d1/uncropped/b9b6e5-splendid-table-ultimate-breakfast-sandwich-lede.jpg" dis="Special Sandwich"/>
      <Product price="$9.54" name="Rusk With Tea" img="https://c.ndtvimg.com/2020-01/p8tabj28_rusk_625x300_28_January_20.jpg" dis="Fresh Rusk With Tea"/>
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