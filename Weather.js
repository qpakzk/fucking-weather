import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: 'Rainy',
        subtitle: 'For more information, look outside.',
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: 'Sunny',
        subtitle: 'Go to get sunburnt.',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: 'Thunderstorm',
        subtitle: 'The sky is angry.',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: 'Cloudy',
        subtitle: 'It is boring.',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "#89B6E5"],
        title: 'Snow',
        subtitle: 'Do you want to build a snowman?',
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: 'Drizzle',
        subtitle: 'It seems to be rainy.',
        icon: 'weather-hail'
    },
    Haze: {
        colors: ["#D7D2CC", "#304352"],
        title: 'Haze',
        subtitle: 'Bring your mask',
        icon: 'weather-fog'
    },
    Mist: {
        colors: ["#DDDCDB", "#C4C3C2"],
        title: 'Mist',
        subtitle: 'Be careful if driving.',
        icon: 'weather-fog'
    }
}
export default function Weather({weatherName, temp}) {
    console.log(weatherName)
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors} 
            style={styles.container}
        >   
            <StatusBar hidden={true} />
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{Math.floor(temp - 273.15)}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10,
        backgroundColor: 'transparent'
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 100
    }
})