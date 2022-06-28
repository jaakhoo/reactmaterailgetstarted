import * as React from "react";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Radio from "@mui/material/Radio";

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
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Button } from "@mui/material";
import swal from "sweetalert";
import { Add_feedback } from "../Service";
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const rating = data.get("rating");
  const dsc = data.get("comments");

  const body = {
    rating: data.get("rating"),
    dsc: data.get("comments"),
  };
  if (rating === null || dsc.length === 0) {
    swal("Oops!", "Please Add some comment with rating!", "error");
  } else {
    Add_feedback(body)
      .then(({ data }) => {
        swal("yahoo", "Feedback Added Succesffully", "success");
      })
      .catch((err) => {
        swal("Oops!", "some error occured please try again!", "error");
      });
  }
};
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
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, width: 400, marginLeft: "20%", marginRight: "20%" }}
            >
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Please Provide your Feeback below
              </Typography>
              <Typography variant="h8">
                How do you rate your overall experience?
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="rating"
                  id="rating"
                >
                  <FormControlLabel
                    value="bad"
                    control={<Radio />}
                    label="Bad"
                  />
                  <FormControlLabel
                    value="average"
                    control={<Radio />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="good"
                    control={<Radio />}
                    label="Good"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Comments"
                name="comments"
                autoFocus
                multiline
                maxRows="6"
                sx={{ height: "300" }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Share
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Deposits */}
      </Grid>
    </>
  );
}

export default function Feedback() {
  return <Header DATA={DashboardContent} Title="Feedback" />;
}
