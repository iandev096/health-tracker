import React, { useMemo } from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { sizes, theme } from "../../constants";
import Text, { CustomTextProps } from "./CustomText";

type size = "l" | "m" | "sm";
interface HeadingProps extends CustomTextProps {
  size?: size;
}

const Heading: React.FC<HeadingProps> = ({ children, size = "l", ...rest }) => {
  const styles = useMemo(
    () =>
      ({
        fontSize:
          size === "l"
            ? sizes.fontSize.l
            : size === "m"
            ? sizes.fontSize.m
            : sizes.fontSize.sm,
        fontWeight: size === "l" || size === "m" ? sizes.fontWeight.l : "400",
      } as StyleProp<TextStyle>),
    [size]
  );

  return (
    <Text {...rest} style={[styles, rest.style]}>
      {children}
    </Text>
  );
};

export default Heading;
