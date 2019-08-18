import React from 'react'
import { Text, View } from 'react-native'

import { createStackNavigator, createAppContainer } from 'react-navigation'
import * as Font from 'expo-font'
import HomeScreen from './components/Screens/HomeScreen'
import DetailsScreen from './components/Screens/DetailsScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
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

const AppContainer = createAppContainer(RootStack)

export default function App() {
  const [loading, setLoading] = React.useState(false)
  const loadfonts = async () => {
    await Font.loadAsync({
      DancingScriptBold: require('./assets/fonts/DancingScript-Bold.ttf'),
      NotoSerifTCBold: require('./assets/fonts/NotoSerifTC-Bold.otf')
    })
    setLoading(true)
  }

  React.useEffect(() => {
    loadfonts()
  }, [])
  if (loading) {
    return <AppContainer />
  } else return null
}
