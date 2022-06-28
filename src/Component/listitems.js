import * as React from "react";

import ListItemButton from "@mui/material/ListItemButton";

import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";

import ListSubheader from "@mui/material/ListSubheader";

import DashboardIcon from "@mui/icons-material/Dashboard";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import PeopleIcon from "@mui/icons-material/People";

import BarChartIcon from "@mui/icons-material/BarChart";

import LayersIcon from "@mui/icons-material/Layers";

import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

const smenudata = [
  {
    text: "Demo Launch Pad",
    icon: <AssignmentIcon />,
    url: "/demo",
  },
];
const menudata = [
  {
    text: "Dashboard",
    icon: <AssignmentIcon />,
    url: "/dashboard",
  },
  {
    text: "Demo Env Health",
    icon: <AssignmentIcon />,
    url: "/demo",
  },
  {
    text: "Shutdown Env Health",
    icon: <AssignmentIcon />,
    url: "/demo",
  },
  {
    text: "Start Env Health",
    icon: <AssignmentIcon />,
    url: "/demo",
  },
  {
    text: "Contact Us",
    icon: <AssignmentIcon />,
    url: "/demo",
  },
  {
    text: "Feedback",
    icon: <AssignmentIcon />,
    url: "/feedback",
  },
  {
    text: "Demo Report",
    icon: <AssignmentIcon />,
    url: "/demoreport",
  },
  {
    text: "Add Use Case",
    icon: <AssignmentIcon />,
    url: "/addusecase",
  },
  {
    text: "Add Use Diagnosis",
    icon: <AssignmentIcon />,
    url: "/demo",
  },
  {
    text: "IAuto Moc-Report",
    icon: <AssignmentIcon />,
    url: "/demo",
  },
];
export const mainListItems = (
  <React.Fragment>
    {menudata.map((row) => (
      <ListItemButton component={Link} to={row.url}>
        <ListItemIcon>{row.icon}</ListItemIcon>

        <ListItemText primary={row.text} />
      </ListItemButton>
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {smenudata.map((row) => (
      <ListItemButton component={Link} to={row.url}>
        <ListItemIcon>{row.icon}</ListItemIcon>

        <ListItemText primary={row.text} />
      </ListItemButton>
    ))}
  </React.Fragment>
);
