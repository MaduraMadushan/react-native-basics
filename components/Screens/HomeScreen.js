import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import * as Font from 'expo-font'

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false)
  const loadfonts = async () => {
    await Font.loadAsync({
      DancingScriptBold: require('./../../assets/fonts/DancingScript-Bold.ttf'),
      NotoSerifTCBold: require('./../../assets/fonts/NotoSerifTC-Bold.otf')
    })
    setLoading(true)
  }

  React.useEffect(() => {
    loadfonts()
  }, [])

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const userInfo = { username: 'admin', password: 'password' }
  const _login = async () => {
    if (userInfo.username === username && userInfo.password === password) {
      //alert('logged In')
      await AsyncStorage.setItem('isLoggedIn', '1')
      navigation.navigate('Details')
    } else {
      alert('Username or Password is incorrect')
    }
  }

  if (loading) {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar backgroundColor='#1e90ff' barStyle='light-content' />
        <Text style={styles.welcome}>Login To My App</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={username => setUsername(username)}
          value={username}
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='password'
          secureTextEntry
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn}>
            <Text
              style={styles.btnTxt}
              onPress={_login}
              //onPress={() => navigation.navigate('Details')}
            >
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

HomeScreen.navigationOptions = { header: null }

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

export default HomeScreen
