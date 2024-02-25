import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";

const LinkButton = ({ text, route }) => {
  return (
    <Link href={route} asChild>
      <Button mode={"contained"} onPress={() => Haptics.selectionAsync()}>
        {text}
      </Button>
    </Link>
  );
};

const styles = StyleSheet.create({});

export default LinkButton;
