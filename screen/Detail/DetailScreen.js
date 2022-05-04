import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { ICONS } from '../../assets/Images';
import { STYLES } from '../../assets/Theme';



const DetailScreen = ({route, navigation}) => {
  const {item} = route.params;
  

  return (
    <View style={styles.container}>
      <Header iconUrl1={ICONS.back} iconUrl2={ICONS.list} text={item.name} navigation={navigation}/>


      {/* Dish Image and quantity button */}
      <View>
        <View style={styles.image_container}>
          <Image source={item.photo} style={styles.image} />
        </View>
        <View style={[styles.quantityButton, styles.shadowProps]}>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/minus.png')} />
          </TouchableOpacity>
          <Text style={styles.quantityNumber}>1</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/add.png')} />
          </TouchableOpacity>
        </View>
      </View>




    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F5F8"
  },

  image_container: {
    width:334,
    height: 344,
    marginHorizontal: 40,
    marginTop: 34,
  },

  shadowProps: STYLES.shadow,

  image: {
    width: 334,
    height: 344
  },

  quantityButton: {
    flexDirection: 'row',
    width: 144,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: 365,
  },

  quantityAdd: {
  },

  quantityRemove: {
  },

  quantityNumber: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: 'black',
    marginHorizontal: 28
  }

})