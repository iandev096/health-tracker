import React from "react";
import Svg, { Path } from "react-native-svg";
import { theme } from "../../constants";

export interface ProgressProps {
  strokeWidth?: number;
  percentage: number;
  color?: string;
}

const Progress: React.FC<ProgressProps> = ({
  color = theme.accent1,
  strokeWidth = 4,
  percentage,
}) => {
  const radius = 30 - strokeWidth / 2;
  const pathDescription = `
    M 30,30 m 0,-${radius}
    a ${radius},${radius} 0 1 1 0,${2 * radius}
    a ${radius},${radius} 0 1 1 0,-${2 * radius}
  `;

  const diameter = Math.PI * 2 * radius;

  return (
    <Svg viewBox="0 0 60 60" width={60} height={60}>
      <Path
        d={pathDescription}
        strokeWidth={strokeWidth}
        opacity={0.3}
        stroke={theme.gray}
      />
      <Path
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        stroke={color}
        strokeLinecap="round"
        strokeDasharray={`${diameter} ${diameter}`}
        strokeDashoffset={`${((100 - percentage) / 100) * diameter}`}
      />
    </Svg>
  );
};

export default Progress;
