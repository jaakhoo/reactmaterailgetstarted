import * as React from "react";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
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

import {
  Button,
  Modal,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
} from "@mui/material";
import {
  Add_Catefory,
  Delete_Category,
  Get_Category,
  Get_Sub_Category,
  Get_Usecase,
} from "../Service";
import swal from "sweetalert";
import ListCategory from "../Component/ListCategory";
import ListSubCategory from "../Component/ListSubCategory";
import ListUseCase from "../Component/ListUseCase";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DashboardContent() {
  const [value, setValue] = React.useState(0);

  const [CategoryData, SetCategoryData] = React.useState([]);
  const [Allusecase, SetuseCase] = React.useState([]);
  const [AllSubcatSelect, SetAllSubcatSelect] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    Get_ALL_Category();
  }, []);

  function Get_ALL_Category() {
    SetCategoryData([]);
    Get_Category()
      .then(({ data }) => {
        console.log(data);
        SetCategoryData(data.data);
        //  localStorage.setItem("token", data.token);
        //  navigate("/mfasetup");
      })
      .catch((err) => {});
  }
  const addcategory = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      name: data.get("name"),
      description: data.get("description"),
      is_enabled: true,
    };
    Add_Catefory(body)
      .then(({ data }) => {
        // setOpen(false);
        Get_ALL_Category();
        swal("yahoo!", "Added Success!", "success");
      })
      .catch((err) => {
        swal("Oops!", "Alreadr Exist!", "error");
      });
  };

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
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="UseCase" {...a11yProps(0)} />
                <Tab label="View Category" {...a11yProps(1)} />
                <Tab label="View Sub-Category" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <ListUseCase />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ListCategory
                CategoryData={CategoryData}
                Get_ALL_Category={Get_ALL_Category}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ListSubCategory CatData={CategoryData} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
          </Paper>
        </Grid>

        {/* Recent Deposits */}
      </Grid>
    </>
  );
}

export default function UseCase() {
  return <Header DATA={DashboardContent} Title="Use Case Management" />;
}
