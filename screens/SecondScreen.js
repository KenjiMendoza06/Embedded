
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { db, ref, onValue } from '../database/firebase';
import secondaryStyles from '../styles/secondaryStyles';
import background from '../assets/background-1.jpg';

const SecondScreen = ({ navigation }) => {
  const [parkingData, setParkingData] = useState({});

  useEffect(() => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      const newData = snapshot.val();
      setParkingData(newData);
    }); 
  }, [db]);

  const getAvailabilityStyle = (spot) => {
    return parkingData[spot] === 1
      ? secondaryStyles.availableParking
      : secondaryStyles.occupiedParking;
  };

  return (
    <ImageBackground source={background} style={secondaryStyles.background}>
      <SafeAreaView style={secondaryStyles.container}>
        <View style={secondaryStyles.firstRow}>
          <Text style={secondaryStyles.titleText}>Parking Availability</Text>
        </View>
        <ScrollView contentContainerStyle={secondaryStyles.scrollViewContent}>
          {Object.keys(parkingData).map((spot, index) => (
            <View key={index} style={secondaryStyles.parkingRow}>
              <Text style={[secondaryStyles.parkingText, getAvailabilityStyle(spot)]}>
                {`${spot}: ${parkingData[spot] === 1 ? 'Available' : 'Not Available'}`}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={secondaryStyles.bottomLayer}>
          <View style={secondaryStyles.screen}>
            <TouchableOpacity
              style={secondaryStyles.chatbotButton}
              onPress={() => navigation.navigate("Home")}>
              <Text style={secondaryStyles.buttonText}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SecondScreen;
