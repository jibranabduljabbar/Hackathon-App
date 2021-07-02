import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';
import Product from '../components/Product'

export default function Sweets() {
  
  return (
    <View style={styles.container}>
<ScrollView>
    <TextInput placeholder="Enter Item Name: ??" placeholderTextColor = "grey" style={{marginTop: 10,borderRadius: 5,fontFamily: "Academy Engraved LET",borderColor: 'grey',borderWidth: 1,padding: 10,width: "100%",textAlign: "center",marginBottom: 10}} />
      <Product price="$6.28" name="Jalebi" img="https://i1.wp.com/rumkisgoldenspoon.com/wp-content/uploads/2021/03/Instant-jalebi-recipe.jpg?resize=1170%2C780&ssl=1" dis="Special Jalebi"/>
      <Product price="$12.57" name="Gulab Jamun" img="https://cdn.cookingcarnival.com/wp-content/uploads/2015/11/Gulab-jamun-1.jpg" dis="Special Gulab Jamun"/>
      <Product price="$5.43" name="Milk Burfi" img="https://myheartbeets.com/wp-content/uploads/2020/11/pressure-cooker-milk-burfi.jpg" dis="Special Milk Burfi"/>
      <Product price="$8.45" name="Gajar Halwa" img="https://foodelish.in/wp-content/uploads/2020/12/gajar-halwa.jpg" dis="Special Halwa"/>
      <Product price="$2.43" name="Rabri" img="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/rabri-rabdi-recipe.jpg" dis="Special Rabri"/>
      <Product price="$9.54" name="Chocolate Ice Cream" img="https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1186_1_1436970676.jpg?tr=w-450" dis="Special Chocolate Ice Cream"/>
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