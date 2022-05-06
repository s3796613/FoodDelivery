import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { COLORS, SIZES, STYLES } from '../../assets/Theme'
import { ICONS, IMAGES } from '../../assets/Images'

const OrderStatScreen = ({route, navigation}) => {
  const {item} = route.params;


  return (
    <View style={styles.container}>
    <ImageBackground source={require('../../assets/images/fakemap.png')} resizeMode={'cover'} style={styles.map}>
      <Header text= "745 Lincoin PI" />
      <View style={styles.mapBtnWrapper}>
        <TouchableOpacity style={styles.mapBtnContainer}>
          <Image source={require('../../assets/icons/add.png')} style={styles.mapBtn}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mapBtnContainer}>
          <Image source={require('../../assets/icons/minus.png')} style={styles.minus}/>
        </TouchableOpacity>
      </View>
      <View style={[styles.driver_container, styles.shadowProps]}>
        <View style={styles.driverInfo_container}>
          <View style={[styles.driver_avatar_container]}>
            <Image source={IMAGES.avatar_5} style={styles.driver_avatar}/>
          </View>
          <View style={styles.driver_info}>
              <Text style={styles.driver_name}>Bruce Evans</Text>
              <Text style={styles.order_name}>{item.name}</Text>
          </View>
          <View style={styles.rating_container}>
            <Image source={ICONS.star} style={styles.rating_icon}/>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.star}</Text>
          </View>
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity style={styles.callBtn}>
            <Text style={styles.callBtn_text}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageBtn}>
            <Text style={styles.messageBtn_text}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </View>
  )
}

export default OrderStatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  map:{
    flex: 1,
    alignItems: 'center'
  },
  driver_container: {
    width: SIZES.width - 32,
    height: 170,
    backgroundColor: 'white',
    borderRadius: 32,
    position: 'absolute',
    top: SIZES.height - 210,
    padding: 24
  },

  shadowProps: STYLES.shadow,

  driver_avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },

  rating_container: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  rating_icon: {
    width: 24,
    height: 24,
    marginRight: 8 
  },
  driver_avatar_container: {
    width: 55,
    height: 55,
    borderRadius: 55/2,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 16
  },

  driverInfo_container: {
    flexDirection: 'row'
  },

  driver_name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: 'black'
  },

  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },

  callBtn: {
    backgroundColor: '#EC764A',
    width: 160,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  callBtn_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },

  messageBtn: {
    backgroundColor: COLORS.lightGray3,
    width: 160,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  messageBtn_text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  },

  mapBtnWrapper: {
    // marginLeft: 'auto',
    marginRight: 8,
    alignSelf: 'flex-end',
    // alignContent: 'center'
  },
  mapBtnContainer: {
    backgroundColor: 'gray',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  mapBtn: {
    width: 24,
    height: 24
  },
  minus: {
    width: 24
  }
})