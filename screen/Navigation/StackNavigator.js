import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Home/HomeScreen";
import DetailScreen from "../Detail/DetailScreen";
import OrderStatScreen from "../OrderStatus/OrderStatScreen";
import BottomTabNavigator from "./TabNavigator";


const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={BottomTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Status" component={OrderStatScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}


export { MainStackNavigator };