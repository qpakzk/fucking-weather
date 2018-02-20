import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Weather from './Weather'

const API_KEY = "4b30de287ceb0afc72186db2375a8a73"

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  }

  _getWeather = (lat, lon) => {
    fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then (response => response.json ())
    .then (json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    )
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state
    return (
      <View style={styles.container}>
      {isLoaded ? <Weather weatherName={name} temp={temperature} /> : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the weather</Text>
          { error ? <Text style={styles.errorText}>{error}</Text> : null }
        </View>
      )}
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  }
})
