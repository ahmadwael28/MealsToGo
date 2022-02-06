import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../components/utilities/safeArea.component";

import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const TabNavigator = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <TabNavigator.Screen
          name="Restaurants"
          component={RestaurantNavigator}
        />
        <TabNavigator.Screen name="Map" component={MapScreen} />
        <TabNavigator.Screen name="Settings" component={Settings} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};
