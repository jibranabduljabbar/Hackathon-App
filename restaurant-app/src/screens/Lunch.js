import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';
import Product from '../components/Product'

export default function Lunch() {
  
  return (
    <View style={styles.container}>
<ScrollView>
      
    <TextInput placeholder="Enter Item Name: ??" placeholderTextColor = "grey" style={{marginTop: 10,borderRadius: 5,fontFamily: "Academy Engraved LET",borderColor: 'grey',borderWidth: 1,padding: 10,width: "100%",textAlign: "center",marginBottom: 10}} />
      <Product price="$6.28" name="Chicken Biryani" img="https://hamariweb.com/recipes/images/recipeimages/3.jpg" dis="Special Chicken Biryani"/>
      <Product price="$12.57" name="French Fries" img="https://lilluna.com/wp-content/uploads/2020/06/french-fries-resize-9.jpg" dis="Special Hot French Fries"/>
      <Product price="$5.43" name="Chana Ki Chaat" img="https://4.bp.blogspot.com/--Uvn4DB8X4A/V06pM022nYI/AAAAAAAAMeE/xW7c4V929w4akbOw9Sh7j5axHUg72A3lwCLcB/s1600/20160514_185524.jpg" dis="Special Chola Chaat"/>
      <Product price="$8.45" name="Maash Ki Daal" img="https://www.teaforturmeric.com/wp-content/uploads/2019/07/Maash-ki-Daal-Urad-Dal-5.jpg" dis="Special Egg Toast"/>
      <Product price="$2.43" name="Shawarna Roll" img="https://images-gmi-pmc.edge-generalmills.com/9dbe823a-5bae-47cf-be42-ee5e886a0378.jpg" dis="Special Shawarna Roll"/>
      <Product price="$9.54" name="Tikka Boti" img="https://www.masala.tv/wp-content/uploads/2017/06/maxresdefault-3.jpg" dis="Tikka Boti With Chapati"/>
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