import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sizes } from "../../constants";
import Avatar, { AvatarProps } from "../Avatar/Avatar";
import Progress, { ProgressProps } from "../Progress/Progress";
import Text from "../Typography/CustomText";

interface PlanItemProps {
  avatar: AvatarProps;
  progress: ProgressProps;
  title: string;
  subTitle: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const PlanItem: React.FC<PlanItemProps> = ({
  avatar,
  progress,
  title,
  subTitle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.planItem}>
        <Avatar {...avatar} />
        <View style={styles.description}>
          <Text style={styles.title}>{title}</Text>
          <Text color="gray" style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
        <Progress {...progress} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  planItem: {
    flexDirection: "row",
    marginVertical: 15,
  },
  description: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontSize: sizes.fontSize.default,
    fontWeight: "700",
  },
  subTitle: {
    // fontSize: sizes.fontSize.default,
  },
});

export default PlanItem;
