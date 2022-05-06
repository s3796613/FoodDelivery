import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICONS } from '../../assets/Images'
import { COLORS, SIZES, STYLES } from '../../assets/Theme'

const CategoryButton = (props, onPressFunc, categoryID, isPressed) => {
  return (
    <TouchableOpacity style={[styles.container, styles.shadowProp, isPressed]} onPress={() => onPressFunc(categoryID)}>
      <View style={styles.icon_cover}>
          <Image source={props.icon} style={styles.icon}/>
      </View>
      <Text style={styles.icon_text}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 104,
        backgroundColor: COLORS.white,
        borderRadius: 52,
        alignItems: 'center',
        marginTop: 24,
        marginHorizontal: 8
    },

    shadowProp: STYLES.shadow,

    icon: {
        width: 24,
        height: 24
    },

    icon_cover: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#F6F6F6",
        justifyContent: 'center',
        alignItems: 'center',
        top: 8
    },

    icon_text: {
        fontFamily: 'Roboto-Bold',
        fontSize: SIZES.regular,
        color: 'black',
        top: 16
    }
})