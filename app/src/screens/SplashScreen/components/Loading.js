import React from 'react'
import { View } from 'react-native'
import { WaveIndicator } from 'react-native-indicators'

import styles from './../styles/style'

const Loading = (props) => (
  <View style={styles.container} >
    <WaveIndicator color={'white'} size={240} waveMode={'outline'} />
  </View>
)

export default Loading
