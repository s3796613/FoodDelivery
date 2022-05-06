import React from "react";
import {Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import SearchScreen from "../Search/SearchScreen";
import LikedScreen from "../Liked/LikedScreen";
import ProfileScreen from "../Profile/ProfileScreen";
import { ICONS } from "../../assets/Images";

const Tab = createBottomTabNavigator();



const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: () => (<Image source={ICONS.cutlery} style={tabBarStyles.icon} />), tabBarInactiveTintColor: 'gray', tabBarActiveTintColor: 'orange', tabBarActiveBackgroundColor: '#EC764A', tabBarShowLabel: false}}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon: () => (<Image source={ICONS.search} style={tabBarStyles.icon} />), tabBarInactiveTintColor: 'gray', tabBarActiveTintColor: 'orange', tabBarActiveBackgroundColor: '#EC764A', tabBarShowLabel: false}}/>
      <Tab.Screen name="Liked" component={LikedScreen} options={{tabBarIcon: () => (<Image source={ICONS.like} style={tabBarStyles.icon} />), tabBarInactiveTintColor: 'gray', tabBarActiveTintColor: 'orange', tabBarActiveBackgroundColor: '#EC764A', tabBarShowLabel: false}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: () => (<Image source={ICONS.user} style={tabBarStyles.icon} />), tabBarInactiveTintColor: 'gray', tabBarActiveTintColor: 'orange', tabBarActiveBackgroundColor: '#EC764A', tabBarShowLabel: false}}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const tabBarStyles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
})