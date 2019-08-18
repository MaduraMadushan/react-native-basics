import React from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'

import HomeScreen from './components/Screens/HomeScreen'
import DetailsScreen from './components/Screens/DetailsScreen'

const RootStack = createStackNavigator(
  {
    //Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    //initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1e90ff'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1
      }
    }
  }
)

const AuthStack = createStackNavigator({ Home: HomeScreen })

const AuthLoadingScreen = ({ navigation }) => {
  React.useEffect(() => {
    _loadData()
  }, [])
  const _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App')
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle='default' />
    </View>
  )
}

const AppContainer = createAppContainer(RootStack)

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: RootStack,
      Auth: AuthStack
    },
    { initialRouteName: 'AuthLoading' }
  )
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
