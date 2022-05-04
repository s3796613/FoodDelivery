import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ICONS } from '../../assets/Images'
import { SIZES } from '../../assets/Theme'

const returnToHome = navigation => {
  try{
    navigation.goBack();
  } catch {}
}


const Header = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => returnToHome(props.navigation)}>
        <Image source={props.iconUrl1} style={styles.header_icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addressbar}>
        <Text style={styles.addressbar_text}>{props.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={props.iconUrl2} style={styles.header_icon} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 30,
    justifyContent: 'space-between',
    
  },

  header_icon: {
    width: SIZES.icon,
    height: SIZES.icon,
    top: 8
  },

  addressbar: {
    width: 200,
    height: 36,
    backgroundColor: '#E8E8E8',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },

  addressbar_text: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.regular,
    color: 'black'
  },
})