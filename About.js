import React from "react";
import { View, Text, Button } from "react-native";
import myStyles from "./assets/AppStyle";

const About = () => {
  return (
    <View style={myStyles.container}>
      <Text style={myStyles.teksjudulAbout}>About</Text>
    </View>
  );
};

export default About;
