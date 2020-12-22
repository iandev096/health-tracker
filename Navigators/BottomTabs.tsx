import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../Screens/HomeScreen";
import { AppointmentsScreen } from "../Screens/AppointmentsScreen";
import { BookmarksScreen } from "../Screens/BookmarksScreen";
import { HelpScreen } from "../Screens/HelpScreen";
import { theme } from "../constants";

interface BottomTabsProps {}

const BottomTabsNav = createBottomTabNavigator();

export const BottomTabs: React.FC<BottomTabsProps> = ({}) => {
  return (
    <BottomTabsNav.Navigator
      tabBarOptions={{
        activeTintColor: theme.primary,
        inactiveTintColor: theme.gray,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "md-pulse" : "md-pulse-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Appointments") {
            return <Ionicons name="md-list" size={size} color={color} />;
          } else if (route.name === "Bookmark") {
            return (
              <Ionicons
                name={focused ? "bookmark" : "bookmark-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Help") {
            return <Ionicons name="md-help" size={size} color={color} />;
          }
        },
      })}
    >
      <BottomTabsNav.Screen name="Home" component={HomeScreen} />
      <BottomTabsNav.Screen
        name="Appointments"
        component={AppointmentsScreen}
      />
      <BottomTabsNav.Screen name="Bookmark" component={BookmarksScreen} />
      <BottomTabsNav.Screen name="Help" component={HelpScreen} />
    </BottomTabsNav.Navigator>
  );
};
