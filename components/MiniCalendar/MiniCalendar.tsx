import React from "react";
import { StyleSheet, View } from "react-native";
import { DayItem, dayItem } from "./DayItem";

interface MiniCalendarProps {
  daysByWeek: dayItem[];
}

const MiniCalendar: React.FC<MiniCalendarProps> = ({ daysByWeek }) => {
  return (
    <View style={styles.miniCalendar}>
      {daysByWeek.map((item) => (
        <DayItem key={item.date} dayItem={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  miniCalendar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default MiniCalendar;
