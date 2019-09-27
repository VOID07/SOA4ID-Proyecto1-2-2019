import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View ,ImageBackground} from 'react-native'

import * as AppActions from '../actions/app.actions'
import HeaderComponent from '../components/header'
import OrderComponent from '../components/order'

import Fondo from '../../assets/images/Fondo.jpg'

class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.props.initSettings()
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ImageBackground source={Fondo} style={{width: '100%', height: '100%'}}>
          <HeaderComponent />
          <OrderComponent />
        </ImageBackground>
        
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  initSettings: () => dispatch(AppActions.initSettings()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
