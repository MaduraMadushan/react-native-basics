import React from 'react'
import { View, Text } from 'react-native'

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  )
}

DetailsScreen.navigationOptions = { title: 'My App', headerRight: <View /> }

export default DetailsScreen
