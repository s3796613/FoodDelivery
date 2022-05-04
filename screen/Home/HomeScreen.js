import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/Theme'
import { ICONS, IMAGES } from '../../assets/Images'
import Header from '../components/Header'
import CategoryButton from '../components/CategoryButton'
import { categoryData, menuData } from '../../assets/Contant'
import DishInfo from '../components/DishInfo'
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      {/* Header Section*/}

      <Header iconUrl1={ICONS.location} iconUrl2={ICONS.shopping_basket} text="745 Lincoin PI" />

      {/* Title */}
      <Text style={styles.title}>Main{`\n`}Categories</Text>
      

      
      {/* Categories section */}
      <View style={styles.category_container}>
        <FlatList data={categoryData} renderItem={data => CategoryButton(data.item)} style={styles.category_container} horizontal showsHorizontalScrollIndicator={false} key={data => data.id} styles={styles.list}/>
      </View>


      {/* Dish Menu */}
        <FlatList data={menuData} renderItem={data => DishInfo(data.item,navigation)} key={data => data.menuId} />
      
      

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.title,
    paddingTop: 16,
    paddingLeft: 16,
    color: 'black',
  },

  category_container: {
    paddingHorizontal: 8,
  }


})