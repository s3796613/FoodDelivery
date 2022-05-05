import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/Home/HomeScreen'
import DetailScreen from './screen/Detail/DetailScreen';
import OrderStatScreen from './screen/OrderStatus/OrderStatScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />

        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>

        <Stack.Screen name="Status" component={OrderStatScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;