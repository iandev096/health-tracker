import React from "react";
import {
  Dimensions,
  GestureResponderEvent,
  TouchableOpacity,
  View,
} from "react-native";

interface BackdropProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onPress }) => {
  return (
    <View
      style={{
        opacity: 0.6,
        zIndex: 100,
        backgroundColor: "#000",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <TouchableOpacity
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          backgroundColor: "transparent",
        }}
        activeOpacity={1}
        onPress={onPress}
      />
    </View>
  );
};

export default Backdrop;
