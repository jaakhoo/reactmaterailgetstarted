import * as React from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Modal,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import {
  Add_Catefory,
  Delete_Category,
  Get_Category,
  Update_Catefory,
} from "../Service";
import swal from "sweetalert";
import { Box } from "@mui/system";
import Modals from "./Modals";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ListCategory({ CategoryData, Get_ALL_Category }) {
  const handleOpen = () => setOpen(true);
  const [loaderopen, setloaderopen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    seteOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const [eopen, seteOpen] = React.useState(false);
  const [rowdata, Setrowdata] = React.useState({});
  const delete_category = (dataid) => {
    setloaderopen(true);
    const body = {
      id: dataid,
    };
    Delete_Category(body)
      .then(({ data }) => {
        setloaderopen(false);
        setOpen(false);
        Get_ALL_Category();
        swal("yahoo!", "Added Success!", "success");
      })
      .catch((err) => {
        setloaderopen(false);
        swal("Oops!", "Error Occured!", "error");
      });
  };
  const addcategory = (event) => {
    setloaderopen(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      name: data.get("name"),
      description: data.get("description"),
      is_enabled: true,
    };
    Add_Catefory(body)
      .then(({ data }) => {
        setloaderopen(false);
        setOpen(false);
        Get_ALL_Category();
        swal("yahoo!", "Added Success!", "success");
      })
      .catch((err) => {
        setloaderopen(false);
        swal("Oops!", "Alreadr Exist!", "error");
      });
  };
  const updatecategory = (event) => {
    setloaderopen(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      name: data.get("namee"),
      description: data.get("descriptione"),
      id: data.get("id"),
      is_enabled: true,
    };
    Update_Catefory(body)
      .then(({ data }) => {
        setloaderopen(false);
        seteOpen(false);
        Get_ALL_Category();
        swal("yahoo!", "Updated Success!", "success");
      })
      .catch((err) => {
        setloaderopen(false);
        swal("Oops!", "Alreadr Exist!", "error");
      });
  };
  function delete_data(type, dataid) {
    swal("Are You Sure want to Delete?", {
      buttons: {
        cancel: "No!",

        yes: true,
      },
    }).then((value) => {
      switch (value) {
        case "yes":
          console.log(type);
          if (type == "category") {
            delete_category(dataid);
          }
        //   swal("Pikachu fainted! You gained 500 XP!");
        //   break;
      }
    });
  }
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Category Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{ marginRight: "1%" }}
                      onClick={handleOpen}
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {CategoryData.map((item) => (
                  <TableRow id={`row_${item.id}`}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ marginRight: 0.5 }}
                        onClick={(e) => {
                          Setrowdata(item);
                          seteOpen(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={(e) => {
                          delete_data("category", item.id);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Category
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid>
              <Grid>
                <Box
                  component="form"
                  onSubmit={addcategory}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Typography>Enter Integration Tool Category Name:</Typography>
                  <TextField required fullWidth id="name" name="name" />
                  <Typography>
                    Enter Integration Tool Category Description:
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    name="description"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={eopen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Category
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid>
              <Grid>
                <Box
                  component="form"
                  onSubmit={updatecategory}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Typography>Enter Integration Tool Category Name:</Typography>
                  <TextField
                    required
                    fullWidth
                    id="namee"
                    name="namee"
                    defaultValue={rowdata.name}
                  />
                  <Typography>
                    Enter Integration Tool Category Description:
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    defaultValue={rowdata.description}
                    id="descriptione"
                    name="descriptione"
                  />
                  <input type="hidden" value={rowdata.id} id="id" name="id" />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Update
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Modal>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loaderopen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
