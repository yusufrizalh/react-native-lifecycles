import React from "react";
import { View, Text, Button } from "react-native";
import myStyles from "./assets/AppStyle";

const Home = () => {
  return (
    <View style={myStyles.container}>
      <Text style={myStyles.teksjudulHome}>Home</Text>
    </View>
  );
};

export default Home;
