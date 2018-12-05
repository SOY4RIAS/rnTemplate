import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { PRIMARY, SECONDARY } from '../../components/Colors/Colors';

import Loading from "./components/Loading";

class SplashScreen extends Component {

  componentWillMount() {
    StatusBar.setBackgroundColor(PRIMARY)
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <Loading />
    )
  }
}

export default SplashScreen