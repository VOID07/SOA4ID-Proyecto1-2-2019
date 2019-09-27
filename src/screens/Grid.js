import React, { Component } from 'react'
import { View ,ImageBackground,} from 'react-native'

import ButtonGrid from '../components/ButtonGrid'
import Fondo from '../../assets/images/Fondo.jpg'


export default class Grid extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ImageBackground source={Fondo} style={{width: '100%', height: '100%'}}>
            <ButtonGrid/>
        </ImageBackground>
      </View>
    )
  }
}
