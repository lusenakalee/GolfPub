import { StyleSheet, Text, View,  SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
      <Image
        style={{
          width:100, 
          height: 100, 
          resizeMode:  'contain'
        }}
        source={{
             uri:"https://www.name-doctor.com/nomi.png/8861.png"
        }}
      />
      <GooglePlacesAutocomplete
          placeholder='Where from?'
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          minLength={2}
          nearbyPlacesAPI='GooglePlacesSeach'
          debounce={400}
      />
      <NavOptions/>
      <NavFavourites/>
      </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text:{
    color:"blue",
  }
})