import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/native'
import RideOptionsCard from './RideOptionsCard'
import NavFavorites from './NavFavourites'

const NavigateCard = () => {
    const navigation = useNavigation();


  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`py-5 text-xl text-center`}>Let's start Drinking</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
                placeholder='Where to?' 
                styles={toInputBoxStyles}
                debounce={400}
                onPress= {navigation.navigate('RideOptionsCard')}                
            />
        </View>
        <NavFavorites/>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
      paddingTop: 20,
      backgroundColor: "white",
      flex: 0,
    },
    textInput: {
      backgroundColor: "#DDDDDF",
      borderRadius: 0,
      fontSize: 10,
    },
    textInputContainer: {
      paddingHorizontal: 20,
      paddingBottom: 0,
    },
  });