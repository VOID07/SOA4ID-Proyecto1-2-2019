import React, { Component } from 'react'
import { Image,View,TouchableOpacity,StyleSheet } from 'react-native'

import Bake from '../../assets/images/logo.png'


export default class ButtonGrid extends Component {
    render() {
        return (
            <View style={{ flex: 6, alignItems: 'center', width: '100%' }}>
                <TouchableOpacity style={styles.button} onPress={this._sendToBake}>
                 <Image
                    style={{ flex: 1, width: 200, height: 200 }}
                    resizeMode="contain"
                    source={Bake}
                />
            </TouchableOpacity>
            </View>
        )
    }
    _GoHome = () => {
        Alert.alert(this._ingredientsList().join(' - '))
        
    }
}
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      padding: 10
    },
  })
