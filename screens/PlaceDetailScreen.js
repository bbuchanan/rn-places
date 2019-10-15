import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = props => {
  return (
    <View>
      <Text>Places Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

PlaceDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle")
  };
};

export default PlaceDetailScreen;
