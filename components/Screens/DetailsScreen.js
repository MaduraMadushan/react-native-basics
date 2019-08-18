import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  AsyncStorage
} from 'react-native'
import MapView from 'react-native-maps'

const DetailsScreen = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorage.clear()
    navigation.navigate('Auth')
  }
  return (
    <View style={styles.container}>
      <Button title='Logout' onPress={logout} />
      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title='My Location'
          description='Here I am.'
        />
      </MapView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

DetailsScreen.navigationOptions = { title: 'My App', headerRight: <View /> }

export default DetailsScreen
