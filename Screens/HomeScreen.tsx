import React, { useRef, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import BottomSheet from "reanimated-bottom-sheet";
import {
  Heading,
  SafeArea,
  Avatar,
  MiniCalendar,
  Graph,
  Text,
} from "../components";
import Backdrop from "../components/Backdrop/Backdrop";
import CheckItem from "../components/CheckItem/CheckItem";
import PlanItem from "../components/PlanItem/PlanItem";
import { sizes, theme } from "../constants";
import { activity, getDaysByWeek, graphData, planItems } from "./data";

interface HomePageProps {
  navigation: any;
}

const daysByWeek = getDaysByWeek();

export const HomeScreen: React.FC<HomePageProps> = ({ navigation }) => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [currentActivities, setCurrentActivities] = useState<activity[]>([]);
  const [currentItem, setCurrentItem] = useState<{
    title: string;
    subTitle: string;
  }>();
  const sheetRef = useRef<BottomSheet>(null);

  const bsContent = () => (
    <View style={styles.bs}>
      <View style={styles.bsHeader}>
        <View>
          <Heading size="l">{currentItem?.title}</Heading>
          <Text>{currentItem?.subTitle}</Text>
        </View>
        <Button
          type="clear"
          title="Done"
          titleStyle={{ color: theme.primary }}
        />
      </View>
      <View>
        {currentActivities.map((activity) => (
          <CheckItem
            onPress={() => {
              const newActivities = currentActivities.map((item) => {
                if (item.title === activity.title) {
                  item.checked = !item.checked;
                }
                return item;
              });

              setCurrentActivities(newActivities);
            }}
            key={activity.title}
            title={activity.title}
            time={`${activity.time.start} - ${activity.time.end}`}
            checked={activity.checked}
          />
        ))}
      </View>
    </View>
  );

  return (
    <>
      {showBackdrop && <Backdrop onPress={() => sheetRef.current?.snapTo(2)} />}
      <SafeArea>
        <ScrollView contentContainerStyle={[styles.screen, styles.container]}>
          <View style={[styles.top, styles.section]}>
            <View style={styles.welcome}>
              <Heading color="gray" size="sm">
                Welcome back,
              </Heading>
              <Heading size="l">Adam Smitty</Heading>
            </View>
            <Avatar source={require("../assets/avatar.png")} />
          </View>
          <View style={styles.section}>
            <MiniCalendar daysByWeek={daysByWeek} />
          </View>
          <View style={styles.section}>
            <Heading style={styles.heading} size="m">
              Plan
            </Heading>

            {planItems.map((item) => (
              <PlanItem
                onPress={() => {
                  navigation.setOptions({ tabBarVisible: false });
                  setShowBackdrop(true);
                  sheetRef.current?.snapTo(0);
                  setCurrentActivities(item.activities);
                  setCurrentItem({
                    title: item.title,
                    subTitle: item.subTitle,
                  });
                }}
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                progress={{
                  percentage: item.completionPercentage,
                  color: item.color,
                }}
                avatar={{
                  backgroundColor: item.color,
                  source: item.image,
                }}
              />
            ))}
          </View>
          <View style={styles.section}>
            <View
              style={[
                styles.heading,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <Heading size="m">Analytics</Heading>
              <Heading size="sm" color="primary">
                1,504 cal
              </Heading>
            </View>
            <Graph labels={graphData.labels} data={graphData.data} />
          </View>
        </ScrollView>
      </SafeArea>
      <BottomSheet
        onCloseEnd={() => {
          setShowBackdrop(false);
          navigation.setOptions({ tabBarVisible: true });
        }}
        ref={sheetRef}
        snapPoints={[550, 300, 0]}
        borderRadius={10}
        renderContent={bsContent}
        initialSnap={2}
        enabledContentTapInteraction={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  screen: { backgroundColor: theme.light },
  container: {
    padding: sizes.containerPadding,
    flexGrow: 1,
  },
  section: {
    paddingBottom: 30,
  },
  heading: {
    marginBottom: 10,
  },
  top: {
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcome: {
    height: "100%",
    justifyContent: "space-evenly",
  },
  bs: {
    backgroundColor: theme.light,
    padding: 16,
    height: 550,
  },
  bsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
});
