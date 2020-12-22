import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { sizes, theme } from "../../constants";

interface GraphProps {
  labels: string[];
  data: number[];
}

const graphWidth = Dimensions.get("window").width * 1.2;

const Graph: React.FC<GraphProps> = ({ labels, data }) => {
  return (
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
          },
        ],
      }}
      width={graphWidth}
      withHorizontalLines={false}
      withVerticalLines={false}
      withHorizontalLabels={false}
      height={220}
      // yAxisLabel="$"
      // yAxisSuffix="k"
      // yAxisInterval={1} // optional, defaults to 1
      // hidePointsAtIndex={[0, 1, 2, 3, 4]}
      // formatYLabel={(value) => ""}

      chartConfig={{
        backgroundColor: theme.light,
        backgroundGradientFrom: theme.light,
        backgroundGradientTo: theme.light,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => theme.primary,
        labelColor: (opacity = 1) => theme.gray,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "5",
          strokeWidth: "3",
          // stroke: "#ffa726",
        },
      }}
      bezier
      style={{
        marginTop: 15,
        borderRadius: 16,
        marginLeft: -50,
      }}
    />
  );
};

export default Graph;
