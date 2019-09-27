import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, Text, View, Alert,StyleSheet,TouchableOpacity, } from 'react-native'
import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';

import * as Actions from '../actions/order.actions'
import mqtt from '../mqtt/mqtt'

import Queso from '../../assets/images/Queso.png'
import Salame from '../../assets/images/Salame.png'
import Tomate from '../../assets/images/Tomate.png'
import Bake from '../../assets/images/Bake.png'
import MQTTClient from '../mqtt/mqtt';
class OrderComponent extends Component {
    render() {
        console.log('RENDER')
        return (
            <View style={{ flex: 6, alignItems: 'center', width: '100%' }}>
                <View style={{ flex: 1, width: '100%', paddingTop: 10, alignItems: 'center' }}>
                    <Text style={{ flex: 0.5, fontSize: 20}}>Select your ingredients:</Text>
                    <View style={{ flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                        
                        <TouchableOpacity style={styles.button} onPress={this._addIngredient('Queso')}>
                            <Image
                                style={{ flex: 1, width: 85, height: 35}}
                                resizeMode="contain"
                                source={Queso}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._addIngredient('Tomate')}>
                            <Image
                                style={{ flex: 1, width: 85, height: 35 }}
                                resizeMode="contain"
                                source={Tomate}
                            />
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this._addIngredient('Salame')}>
                            <Image
                                style={{ flex: 1, width: 85, height: 35 }}
                                resizeMode="contain"
                                source={Salame}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={{ fontSize: 25 }}>{this._ingredientsList().join(' - ')}</Text>                
                    <View style={{ flex: 1.5, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={this._sendToBake}>
                            <Image
                                style={{ flex: 1, width: 85, height: 10 }}
                                resizeMode="contain"
                                source={Bake}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    
    _ingredientsList = () => Object.keys(this.props.ingredients || {}).filter((ingredient) => this.props.ingredients[ingredient])

    _addIngredient = (ingredient) => () => {
        this.props.dispatch(Actions.addIngredient(ingredient))
    }

    _sendToBake = () => {
        Alert.alert(this._ingredientsList().join(' - '))
        mqtt.onConnect("A")
    }
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      padding: 10
    },
  })

const mapStateToProps = state => ({ ingredients: Object.assign({}, state.order.ingredients) })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderComponent)