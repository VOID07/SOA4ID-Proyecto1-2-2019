import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import Logo from '../../assets/images/logo.png'

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={{ flex: 2, alignItems: 'center', width: '100%' }}>
                <View style={{ flex: 2, width: '100%', paddingTop: 20, paddingLeft: 20 }}>
                    <Image
                        style={{ flex: 1, width: 85, height: 35 }}
                        resizeMode="contain"
                        source={Logo}
                    />
                </View>
                <View style={{
                    flex: 2,
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{fontSize:50,color:"grey"}}>Make pizza</Text>
                </View>
            </View>
        )
    }
}

export { HeaderComponent }