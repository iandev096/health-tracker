import React, { useMemo } from "react";
import { Text, TextProps } from "react-native-elements";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { theme } from "../../constants";

type color = "dark" | "light" | "primary" | "gray";
export interface CustomTextProps extends TextProps {
  color?: color;
}

const CustomText: React.FC<CustomTextProps> = ({
  color = "dark",
  children,
  ...rest
}) => {
  const style = useMemo(
    () =>
      ({
        color:
          color === "primary"
            ? theme.primary
            : color === "light"
            ? theme.light
            : color === "gray"
            ? theme.gray
            : theme.dark,
      } as StyleProp<TextStyle>),
    [color]
  );

  return (
    <Text {...rest} style={[style, rest.style]}>
      {children}
    </Text>
  );
};

export default CustomText;
