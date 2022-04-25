import { View, Text } from 'react-native'
import React from 'react'
import { restaurant, burger } from './screen/data'

const App = () => {
  return (
    <View>
      {
        restaurant.map((value,index) => (
          <Text key={index}>
          {`${value.rName} Dishes: ${value.dish[0].fName}`}

          </Text>
        ))
      }
    </View>
  )
}

export default App