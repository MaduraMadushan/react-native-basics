import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'

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
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.instructions}>Madura Madushan</Text>
      </View>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'DancingScriptBold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 20,
    fontFamily: 'NotoSerifTCBold'
  }
})
