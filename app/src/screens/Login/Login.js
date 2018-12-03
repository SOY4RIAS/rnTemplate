import React, { Component } from 'react'
import { SafeAreaView, View, TextInput, Button, StatusBar } from 'react-native'
import styles from './styles/style'

class Login extends Component {

  componentWillMount() {
    StatusBar.setBackgroundColor('black', true)
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            placeholder='User Name'
            placeholderTextColor='white'
            style={styles.input}
            textAlign='center'
          />
          <Button title='Connect' style={styles.button} />
        </View>
      </SafeAreaView>
    )
  }
}

export default Login
