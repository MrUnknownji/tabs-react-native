import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Text } from "react-native-paper";

const Settings = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text>This is Settings Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});

export default Settings;
