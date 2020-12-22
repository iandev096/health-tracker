import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { BottomTabs } from "./BottomTabs";

interface MainNavigatorProps {}

export const MainNavigator: React.FC<MainNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
