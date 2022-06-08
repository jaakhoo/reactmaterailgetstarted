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
export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href="/home">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>

      <ListItemText primary="Demo Health" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>

      <ListItemText primary="Shutdown Demo" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>

      <ListItemText primary="Start Demo" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>

      <ListItemText primary="Contact Us" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>

      <ListItemText primary="Feedback" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>

      <ListItemText primary="Collebration & Situation" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>

      <ListItemText primary="Demo Report" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>

      <ListItemText primary="Add Use Case" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>

      <ListItemText primary="Diagnosis" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>

      <ListItemText primary="Auto Report" />
    </ListItemButton>
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
