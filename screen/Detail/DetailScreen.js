import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/Header';
import { ICONS } from '../../assets/Images';
import { COLORS, SIZES, STYLES } from '../../assets/Theme';



const DetailScreen = ({route, navigation}) => {
  const {item} = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue) => {
    setQuantity(newValue)
  }

  const addItem = () => {
    handleQuantityChange(quantity + 1)
  }

  const removeItem = () => {
    if(quantity > 1) {
      handleQuantityChange(quantity - 1)
    } 
  }


  return (
    <View style={styles.container}>
      <Header iconUrl1={ICONS.back} iconUrl2={ICONS.list} text={item.name} navigation={navigation}/>


      {/* Dish Image and quantity button */}
      <ScrollView>
        <View>
          <View style={[styles.image_container, styles.shadowProps]}>
            <Image source={item.photo} style={styles.image} />
          </View>
          <View style={[styles.quantityButton, styles.shadowProps]}>
            <TouchableOpacity style={styles.quantityAdd} onPress={() => removeItem()}>
              <Image source={require('../../assets/icons/minus.png')} />
            </TouchableOpacity>
            <Text style={styles.quantityNumber}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityAdd} onPress={() => addItem()}>
              <Image source={require('../../assets/icons/add.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>{`${item.name} - $${item.price}`}</Text>
        <Text style={styles.info}>{item.description}</Text>
        <View style={styles.caloInfo}>
          <Image source={ICONS.fire} style={styles.icon} />
          <Text style={styles.caloText}>{`${item.calories} cal`}</Text>
        </View>

      {/* Card Info */}
      <View style={styles.footer_container}>
        <View style={styles.cart_info_wrapper}>
          <Text style={styles.cart_info_text}>{` ${quantity} Item in Cart`}</Text>
          <Text style={styles.cart_info_text}>{`$${item.price * quantity}`}</Text>
        </View>
        <View style={styles.card_info_wrapper}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16}}>
            <View style={styles.location}>
              <Image source={ICONS.pin} style={styles.icon} />
              <Text style={styles.card_info_text}>745 Lincoin PI</Text>
            </View>
            <View style={styles.card}>
              <Image source={ICONS.mastercard} style={styles.icon} />
              <Text style={styles.card_info_text}>*** 5678</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.orderBtn} onPress={() => navigation.navigate('Status',{item: item})}>
            <Text style={styles.orderText}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>

    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray3
  },

  icon: {
    width: 24,
    height: 24
  },

  orderBtn: {
    backgroundColor: '#EC764A',
    width: 320,
    height: 48,
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },


  orderText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500'
  },

  image_container: {
    width:334,
    height: 344,
    marginHorizontal: 40,
    marginTop: 34,
    borderRadius: 32
  },

  footer_container: {
    backgroundColor: 'white',
    width: SIZES.width,
    height: 200,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: 16,
    // position: 'absolute',
    // top: SIZES.height - 130
  },

  cart_info_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: "#DAD7D7"
  },

  card: {
    flexDirection: 'row'
  },

  location: {
    flexDirection: 'row',
  },

  cart_info_text: {
    fontFamily: 'Roboto-Medium',
    color: 'black',
    fontSize: 24,
    marginHorizontal: 16
  },

  card_info_wrapper: {
    paddingHorizontal: 16
  },

  card_info_text: {
    fontFamily: 'Roboto-Light',
    color: 'black',
    fontSize: 16,
    marginHorizontal: 8
  },

  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: 'black',
    marginTop: 48,
    alignSelf: 'center'
  },

  info: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#6C6060',
    paddingHorizontal: 60,
    marginTop: 24,
    textAlign: 'center',
    marginBottom: 24
  },

  shadowProps: STYLES.shadow,

  image: {
    width: 334,
    height: 344,
    borderRadius: 32
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
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },

  quantityRemove: {
  },

  quantityNumber: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: 'black',
    marginHorizontal: 28
  },

  caloInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16
  },

  caloText: {
    fontFamily: 'Roboto-Light',
    fontSize: 12,
    color: "#AEAEAE",
    marginLeft: 8
  }

})