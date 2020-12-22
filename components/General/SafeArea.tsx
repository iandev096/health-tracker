import React from "react";
import {
  SafeAreaView,
  NativeSafeAreaViewProps,
} from "react-native-safe-area-context";

interface SafeAreaProps extends NativeSafeAreaViewProps {}

const SafeArea: React.FC<SafeAreaProps> = ({ children, ...rest }) => {
  return (
    <SafeAreaView style={{ flex: 1 }} {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
