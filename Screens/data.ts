import { DAYS, theme } from "../constants";

export const getDaysByWeek = () => {
  const days = [];
  let date = new Date();

  // so that I always start from sunday
  date.setDate(date.getDate() - date.getDay());
  let currentDay = date.getDay();

  for (let c = 0; c < 7; c++) {
    let dayIndex = currentDay % 7;
    let isActive = c === new Date().getDay() ? true : false;

    days[dayIndex] = {
      day: DAYS[dayIndex],
      date: date.getDate(),
      active: isActive,
    };
    currentDay++;
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export type activity = {
  title: string;
  time: {
    start: string;
    end: string;
  };
  checked: boolean;
};

export type planItem = {
  title: string;
  subTitle: string;
  completionPercentage: number;
  color: string;
  image: any;
  activities: activity[];
};

export const planItems: planItem[] = [
  {
    title: "Water",
    subTitle: "6 cups per day",
    completionPercentage: 75,
    color: theme.accent4,
    image: require("../assets/drop.png"),
    activities: [
      {
        title: "After Wake up",
        time: {
          start: "06:00 AM",
          end: "07:00 AM",
        },
        checked: false,
      },
      {
        title: "Late Morning",
        time: {
          start: "09:00 AM",
          end: "10:00 AM",
        },
        checked: false,
      },
      {
        title: "Mid Afternoon",
        time: {
          start: "02:00 AM",
          end: "03:00 AM",
        },
        checked: false,
      },
      {
        title: "Late Afternoon",
        time: {
          start: "04:00 PM",
          end: "05:00 PM",
        },
        checked: false,
      },
    ],
  },
  {
    title: "Fruits",
    subTitle: "300 gram per day",
    completionPercentage: 49,
    color: theme.accent1,
    image: require("../assets/strawberry.png"),
    activities: [
      {
        title: "After Wake up",
        time: {
          start: "06:00 AM",
          end: "07:00 AM",
        },
        checked: false,
      },
      {
        title: "Late Morning",
        time: {
          start: "09:00 AM",
          end: "10:00 AM",
        },
        checked: false,
      },
      {
        title: "Mid Afternoon",
        time: {
          start: "02:00 AM",
          end: "03:00 AM",
        },
        checked: false,
      },
      {
        title: "Late Afternoon",
        time: {
          start: "04:00 PM",
          end: "05:00 PM",
        },
        checked: false,
      },
    ],
  },
  {
    title: "Activity",
    subTitle: "120 mins per day",
    completionPercentage: 40,
    color: theme.accent2,
    image: require("../assets/rugby-ball.png"),
    activities: [
      {
        title: "After Wake up",
        time: {
          start: "06:00 AM",
          end: "07:00 AM",
        },
        checked: false,
      },
      {
        title: "Late Morning",
        time: {
          start: "09:00 AM",
          end: "10:00 AM",
        },
        checked: false,
      },
      {
        title: "Mid Afternoon",
        time: {
          start: "02:00 AM",
          end: "03:00 AM",
        },
        checked: false,
      },
      {
        title: "Late Afternoon",
        time: {
          start: "04:00 PM",
          end: "05:00 PM",
        },
        checked: false,
      },
    ],
  },
  {
    title: "Sleep",
    subTitle: "8 hours a day",
    completionPercentage: 85,
    color: theme.accent3,
    image: require("../assets/bed.png"),
    activities: [
      {
        title: "After Wake up",
        time: {
          start: "06:00 AM",
          end: "07:00 AM",
        },
        checked: false,
      },
      {
        title: "Late Morning",
        time: {
          start: "09:00 AM",
          end: "10:00 AM",
        },
        checked: false,
      },
      {
        title: "Mid Afternoon",
        time: {
          start: "02:00 AM",
          end: "03:00 AM",
        },
        checked: false,
      },
      {
        title: "Late Afternoon",
        time: {
          start: "04:00 PM",
          end: "05:00 PM",
        },
        checked: false,
      },
    ],
  },
];

export const graphData = {
  labels: ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30"],
  data: [
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
    // Math.random() * 10,
    // Math.random() * 10,
  ],
};
