// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Navigation from './src/config/Navigation'
// import Home from './src/screens/Home';
// import Login from './src/screens/Login';
// import SignUp from './src/screens/SignUp';
// import Break_Fast from './src/screens/Break_fast';
// import Dinner from './src/screens/Dinner';
// import Lunch from './src/screens/Lunch';
// import Snacks from './src/screens/Snacks';
// import Sweets from './src/screens/Sweets';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Navigation />
//       {/* <Login /> */}
//       {/* <Home /> */}
//       {/* <Break_Fast /> */}
//       {/* <Dinner /> */}
//       {/* <Lunch /> */}
//       {/* <Snacks /> */}
//       {/* <Sweets /> */}
//       {/* <SignUp /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import * as React from 'react';
import { View, Text } from 'react-native';
import Navigation from './src/config/Navigation'
import Detail from './src/screens/detail';

function App() {
  return (
    <Navigation />
    // <Detail />
  );
}

export default App;