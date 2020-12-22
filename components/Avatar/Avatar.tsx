import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { theme } from "../../constants";

export interface AvatarProps {
  source: ImageSourcePropType;
  backgroundColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  backgroundColor = theme.accent1,
  source,
}) => {
  return (
    <View style={[styles.imageContainer, { backgroundColor }]}>
      <Image style={styles.image} source={source} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Avatar;
