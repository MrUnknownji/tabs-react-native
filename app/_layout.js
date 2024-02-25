import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import {
  ToastAndroid,
  useColorScheme,
  StatusBar as NativeStatusBar,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  Appbar,
  BottomNavigation,
  Searchbar,
} from "react-native-paper";
import { Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
import * as Haptics from "expo-haptics";
import { Fade, FadeToTop } from "../Components/animations";

const Layout = () => {
  const colorScheme = useColorScheme();
  const [isAppbar, setIsAppbar] = useState(true);
  const { theme } = useMaterial3Theme({ fallbackSourceColor: "#35155d" });
  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  const toggleAppbar = () => {
    Haptics.selectionAsync();
    setIsAppbar(!isAppbar);
  };

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar style="auto" translucent={true} />

      {/* Using Tab Navigation*/}
      <Tabs
        initialRouteName="index"
        tabBar={({ navigation, state, descriptors }) => (
          <BottomNavigation.Bar
            navigationState={state}
            onTabPress={({ route }) => {
              Haptics.selectionAsync();
              ToastAndroid.show(
                descriptors[route.key].options.tabBarLabel
                  ? descriptors[route.key].options.tabBarLabel
                  : descriptors[route.key].options.title,
                ToastAndroid.SHORT
              );
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            onTabLongPress={({ route }) => {
              Haptics.selectionAsync();
              ToastAndroid.show(
                descriptors[route.key].options.title
                  ? descriptors[route.key].options.title
                  : descriptors[route.key].options.tabBarLabel,
                ToastAndroid.SHORT
              );
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
          />
        )}
        screenOptions={{
          title: "Home",
          header: ({ options, route, back, navigation }) => {
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : route.name;
            return isAppbar ? (
              <Appbar.Header collapsable elevated>
                {back ? (
                  <Appbar.BackAction onPress={() => navigation.goBack()} />
                ) : null}
                <Appbar.Content title={title} />
                <Appbar.Action icon="magnify" onPress={toggleAppbar} />
              </Appbar.Header>
            ) : (
              <Searchbar
                icon={() => (
                  <Icon size={24} name="arrow-left" onPress={toggleAppbar} />
                )}
                placeholder="Search"
                style={{
                  marginHorizontal: 10,
                  position: "absolute",
                  top: NativeStatusBar.currentHeight,
                }}
              />
            );
          },
        }}
      >
        <Tabs.Screen
          options={{
            title: "Home",
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
          name="index"
        />
        <Tabs.Screen
          options={{
            title: "Settings",
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
          name="settings/index"
        />
        <Tabs.Screen
          options={{
            title: "Profile",
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="account-circle" size={size} color={color} />;
            },
          }}
          name="profile/index"
        />
        <Tabs.Screen
          options={{
            title: "About",
            tabBarLabel: "About",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon name="alert-circle-outline" size={size} color={color} />
              );
            },
          }}
          name="about/index"
        />
      </Tabs>

      {/* Using Stack Navigation*/}
      {/* <Stack
        initialRouteName="index"
        screenOptions={{
          animation: "fade",
          title: "Home",
          header: ({ options, route, back, navigation }) => {
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : route.name;
            return (
              <Appbar.Header
                collapsable
                style={{
                  backgroundColor: paperTheme.colors.elevation.level2,
                }}
              >
                {back ? (
                  <Appbar.BackAction onPress={() => navigation.goBack()} />
                ) : null}
                <Appbar.Content title={title} />
              </Appbar.Header>
            );
          },
        }}
      >
        <Stack.Screen options={{ title: "Home" }} name="index" />
        <Stack.Screen options={{ title: "Settings" }} name="settings/index" />
        <Stack.Screen options={{ title: "Profile" }} name="profile/index" />
        <Stack.Screen options={{ title: "About" }} name="about/index" />
      </Stack> */}
    </PaperProvider>
  );
};

export default Layout;
