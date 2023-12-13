import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import mainStyles from '../styles/mainStyles';
import background from '../assets/background-1.jpg'
import logo from '../assets/Logo-1.png'

const HomeScreen = ({navigation}) => {
  return (  
    <ImageBackground source={background} style={mainStyles.background}>
    <SafeAreaView style={mainStyles.container}>
    <Image source={logo} style={mainStyles.logo}></Image>
        <View style={mainStyles.firstLayer}>
        </View>
        <View style={mainStyles.bottomLayer}>
            <View style={mainStyles.screen}>
            <TouchableOpacity
                style={mainStyles.chatbotButton}
                onPress={() => navigation.navigate("Secondary")}>
                <Text style={mainStyles.buttonText}>Main Screen</Text>
            </TouchableOpacity>
            </View>
        </View>
    
    </SafeAreaView>
    </ImageBackground>
    
  )
}

export default HomeScreen;

