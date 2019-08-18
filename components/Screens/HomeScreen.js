import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet
} from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar backgroundColor='#1e90ff' barStyle='light-content' />
      <Text style={styles.welcome}>Login To My App</Text>
      <TextInput style={styles.input} placeholder='Username' />
      <TextInput style={styles.input} placeholder='password' secureTextEntry />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.userBtn}>
          <Text
            style={styles.btnTxt}
            onPress={() => navigation.navigate('Details')}
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
