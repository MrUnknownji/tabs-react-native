import React from "react";
import {View } from "react-native";
import {useTheme, Text} from 'react-native-paper'

const Profile = () => {
  const theme = useTheme();
  return (
    <View style={{flex:1, backgroundColor:  theme.colors.background}}>
      <Text>This is Profile Page</Text>
    </View>
  );
};

export default Profile;
