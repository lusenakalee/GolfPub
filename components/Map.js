import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';


const Map = () => {
   

  return (
 
     <MapView
        mapType='mutedStandard'
       style={tw`flex-1`}
        initialRegion={{
         latitude: -1.286389,
         longitude: 36.817223,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   
  )
}

export default Map

const styles = StyleSheet.create({})