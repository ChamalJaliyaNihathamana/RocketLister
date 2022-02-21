import React from "react";
import {
  ChatLeftTextFill,
  ClockHistory,
  PersonCircle,
} from "react-bootstrap-icons";

export const SidenavData = [
  {
    title: "My Dashboard",
    path: "/dashboard",
    icon: <ChatLeftTextFill />,
  },
  {
    title: "Order History",
    path: "/order-history",
    icon: <ClockHistory />,
  },
  {
    title: "Update Profile",
    path: "/update-profile",
    icon: <PersonCircle />,
  },
];
