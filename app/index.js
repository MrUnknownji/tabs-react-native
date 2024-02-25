import React from "react";
import { StyleSheet, View } from "react-native";
import LinkButton from "../Components/Buttons/LinkButton";
import { useTheme, Text } from "react-native-paper";

export default function App() {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant={"bodyLarge"}>Welcome to Unknown's Project</Text>
      <LinkButton text={"Settings"} route={"/settings"} />
      <LinkButton text={"Profile"} route={"/profile"} />
      <LinkButton text={"About"} route={"/about"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
