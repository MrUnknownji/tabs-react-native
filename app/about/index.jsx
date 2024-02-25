import React from "react";
import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";

const About = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Text>This is About Page</Text>
    </View>
  );
};

export default About;
