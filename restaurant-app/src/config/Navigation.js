import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Break_Fast from '../screens/Break_fast';
import Lunch from '../screens/Lunch';
import Snacks from '../screens/Snacks';
import Dinner from '../screens/Dinner';
import Sweets from '../screens/Sweets';
import Detail from '../screens/detail';
import Pro from '../screens/Pro'

const Stack = createStackNavigator();

export default function Navigation(){
  return (

<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            }, title: 'Login' }} name="Login" component={Login} />
            <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: "center" //Set Header text style
            },headerLeft: () => {
              return null;
            }, title: 'Welcome to Food Delivery' }} name="Home" component={Home} />
          <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            }, title: 'Sign Up' }} name="SignUp" component={SignUp} />
          <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            }, title: 'Food Delivery | Break Fast' }} name="Break Fast" component={Break_Fast} />
          <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            }, title: 'Food Delivery | Lunch' }} name="Lunch" component={Lunch} />
          <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            }, title: 'Food Delivery | Snacks' }} name="Snacks" component={Snacks} />
            <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            }, title: 'Food Delivery | Dinner' }} name="Dinner" component={Dinner} />
            <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            }, title: 'Food Delivery | Sweets' }} name="Sweets" component={Sweets} />
       <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
               //Set Header text style
            }, title: 'Checkout' }} name="Further Detail" component={Detail} />
            <Stack.Screen  options={{ headerStyle: {
              backgroundColor: 'black',
              textAlign: "center" //Set Header color
            },headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: "center"
               //Set Header text style
            },
            headerLeft: () => {
              return null;
            }, title: 'Food Delivery' }} name="Pro" component={Pro} />
      </Stack.Navigator>
    </NavigationContainer>


   
  );
};






























 // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //      name="Restaurant | Login"
    //      component={Login} 
    //      option={{ title: "Login"}}
    //     />
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ title: 'Welcome To Restaurant' }}
    //     />
    //     <Stack.Screen
    //      name="Restaurant | SignUp"
    //      component={SignUp} 
    //      option={{ title: "Sign Up"}}
    //     />
    //     <Stack.Screen
    //       name="Restaurant | Break Fast"
    //       component={Break_Fast}
    //       options={{ title: 'Break Fast' }}
    //     />
    //     <Stack.Screen
    //      name="Restaurant | Lunch"
    //      component={Lunch} 
    //      option={{ title: "Lunch"}}
    //     />
    //     <Stack.Screen
    //       name="Restaurant | Snacks"
    //       component={Snacks}
    //       options={{ title: 'Snacks' }}
    //     />
    //     <Stack.Screen
    //       name="Restaurant | Dinner"
    //       component={Dinner}
    //       options={{ title: 'Dinner' }}
    //     />
    //     <Stack.Screen
    //       name="Restaurant | Sweets"
    //       component={Sweets}
    //       options={{ title: 'Sweets' }}
    //     />
        

    //   </Stack.Navigator>
    // </NavigationContainer>