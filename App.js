import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native'
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
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar backgroundColor='#1e90ff' barStyle='light-content' />
        <Text style={styles.welcome}>Login To My App</Text>
        <TextInput style={styles.input} placeholder='Username' />
        <TextInput
          style={styles.input}
          placeholder='password'
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.btnTxt} onPress={() => alert('Login Works')}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.btnTxt} onPress={() => alert('Signup Works')}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontFamily: 'DancingScriptBold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 20,
    fontFamily: 'NotoSerifTCBold'
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10
  },
  userBtn: {
    backgroundColor: '#ffd700',
    padding: 15,
    width: '45%'
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  }
})
