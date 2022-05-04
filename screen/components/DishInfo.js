import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGES, ICONS } from '../../assets/Images'
import { COLORS, SIZES, STYLES } from '../../assets/Theme'

const DishInfo = (props, navigation) => {
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {item: props} )}>
            <View style={styles.shadow}>
                <Image source={props.photo} style={styles.image} />
            </View>
            <View style={styles.preptime}>
                <Text>{props.duration}</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.dish_name}>{props.name}</Text>
        <View style={styles.dish_subInfo_container}>
            <Image source={ICONS.star} style={styles.rating_icon} />
            <Text style={styles.dish_subInfo}>{props.star}</Text>
            <Text style={styles.dish_subInfo}>{props.caterogyId}</Text>
            <Text style={[styles.dish_subInfo, styles.secondaryInfo]}>{`$ ${props.price}`}</Text>
        </View>
      </View>
  )
}

export default DishInfo

const styles = StyleSheet.create({
    container: {
        width: 382,
        margin: 16
    },

    preptime: {
        backgroundColor: COLORS.lightGray2,
        position: 'absolute',
        width: 100,
        height: 44,
        left: 0,
        top: 116,
        borderBottomLeftRadius: 32,
        borderTopRightRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },

    preptime_text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: 'black'
    },

    image: {
        width: 382,
        height: 160,
        borderRadius: 32
    },

    dish_name: {
        fontFamily: 'Roboto-Medium',
        fontSize: SIZES.subtitle,
        color: 'black',
        marginTop: 16,
        marginBottom: 8
    },

    dish_subInfo_container: {
        flexDirection: 'row'
    },

    dish_subInfo: {
        fontFamily: 'Roboto-Medium',
        fontSize: SIZES.regular,
        color: 'black',
        marginRight: 16
    },

    rating_icon: {
        width: 16,
        height: 16
    },

    secondaryInfo: {
        color: 'gray'
    },

    shadowProps: STYLES.shadow,

    shadow: {
        width: 382,
        height: 160,
        borderRadius: 32,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 8},
        shadowRadius: 5,
        elevation: 5
    },
})