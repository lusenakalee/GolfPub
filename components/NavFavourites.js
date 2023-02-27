import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Quiver",
    destination: "15th Drive,Kitengela, NAI, Kenya",
  },
  {
    id: "456",
    icon: "home",
    location: "Clique Lounge",
    destination: "1st Avenue, Ngong rd, Nairobi",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-500`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});