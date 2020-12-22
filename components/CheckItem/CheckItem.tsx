import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { theme } from "../../constants";
import Text from "../Typography/CustomText";
import TouchableScale from "react-native-touchable-scale";
import { Feather, Ionicons } from "@expo/vector-icons";

interface CheckItemProps {
  title: string;
  time: string;
  checked: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const CheckItem: React.FC<CheckItemProps> = ({
  title,
  time,
  onPress,
  checked,
}) => {
  return (
    <TouchableScale onPress={onPress}>
      <View style={styles.checkItem}>
        <View style={styles.left}>
          <Text style={[styles.title, checked && styles.titleChecked]}>
            {title}
          </Text>
          <View style={styles.timeGroup}>
            <Feather name="clock" size={16} color={theme.gray} />
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        <Ionicons
          color={checked ? theme.primary : theme.gray}
          name={checked ? "checkmark-circle" : "checkmark-circle-outline"}
          size={27}
        />
      </View>
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  checkItem: {
    backgroundColor: theme.lightgray,
    borderRadius: 30,
    padding: 18,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {},
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  titleChecked: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  timeGroup: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: theme.gray,
    marginLeft: 10,
  },
});

export default CheckItem;
