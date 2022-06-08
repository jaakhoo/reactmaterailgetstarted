import * as React from "react";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import MuiDrawer from "@mui/material/Drawer";

import Box from "@mui/material/Box";

import MuiAppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import List from "@mui/material/List";

import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";

import IconButton from "@mui/material/IconButton";

import Badge from "@mui/material/Badge";

import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";

// import Chart from './Chart';

import Header from "../Component/Header";

function DashboardContent() {
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}

        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,

              display: "flex",

              flexDirection: "column",

              height: "100%",
            }}
          >
            {/* <Chart /> */}
          </Paper>
        </Grid>

        {/* Recent Deposits */}
      </Grid>
    </>
  );
}

export default function Dashboard() {
  return <Header DATA={DashboardContent} Title="Dashboard" />;
}