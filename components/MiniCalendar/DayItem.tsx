import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../../constants";
import Text from "../Typography/CustomText";

export type dayItem = {
  day: string;
  date: number;
  active: boolean;
};

interface DayItemProps {
  dayItem: dayItem;
}

export const DayItem: React.FC<DayItemProps> = ({ dayItem: item }) => {
  return (
    <View style={styles.dayItem}>
      <Text
        color="gray"
        style={[styles.day, { color: item.active ? theme.light : theme.gray }]}
      >
        {item.day.slice(0, 3)}
      </Text>
      <View style={styles.digitsContainer}>
        <Text style={styles.digits}>
          {item.date.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </Text>
      </View>
      <View style={[item.active && styles.highlight]} />
      <View style={[item.active && styles.highlight, styles.highlightShadow]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dayItem: {
    alignItems: "center",
  },
  day: {},
  digitsContainer: {
    backgroundColor: theme.light,
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 36,
    borderRadius: 30,
    marginTop: 9,
  },
  digits: {
    fontWeight: "700",
  },
  highlight: {
    position: "absolute",
    backgroundColor: theme.primary,
    borderRadius: 35,
    height: 80,
    width: 45,
    zIndex: -1,
    top: -8,
  },
  highlightShadow: {
    zIndex: -2,
    transform: [{ scale: 1.05 }],
    opacity: 0.3,
  },
});
