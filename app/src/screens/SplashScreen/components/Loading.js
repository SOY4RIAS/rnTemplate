import React from 'react'
import { View, Image } from 'react-native'
import { WaveIndicator } from 'react-native-indicators'

import styles from './../styles/style'

const Loading = (props) => (
  <View style={styles.container} >
    <Image
      source={require('../../../../tools/assets/images/logo.png')}
      style={styles.logo}
    />
    <WaveIndicator color={'white'} size={80} waveMode={'outline'} />
  </View>
)

export default Loading
