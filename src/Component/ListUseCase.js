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
import Select from "react-select";
import {
  Add_Catefory,
  Add_Sub_Category,
  Add_Usecase,
  Delete_Category,
  Delete_Sub_Category,
  Get_Category,
  Get_Sub_Category,
  Get_Usecase,
  Update_Catefory,
  Update_Sub_Catefory,
  Update_Usecase,
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
export default function ListUseCase() {
  const handleOpen = () => setOpen(true);
  const [loaderopen, setloaderopen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    seteOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const [eopen, seteOpen] = React.useState(false);
  const [rowdata, Setrowdata] = React.useState({});
  const [allcategory, setallcategory] = React.useState([]);
  const [CategoryData, SetSubCategoryData] = React.useState([]);
  const [Allusecase, SetuseCase] = React.useState([]);
  // const handleloader = () => {
  //   setloaderopen(false);
  // };
  // const handleToggle = () => {
  //   setloaderopen(!open);
  // };
  React.useEffect(() => {
    Get_ALL__SubCategory();
    get_all_usecase();
  }, []);

  function get_all_usecase() {
    setloaderopen(true);
    SetuseCase([]);
    Get_Usecase()
      .then(({ data }) => {
        setloaderopen(false);
        console.log(data);
        SetuseCase(data.data);
        //  localStorage.setItem("token", data.token);
        //  navigate("/mfasetup");
      })
      .catch((err) => {
        setloaderopen(false);
      });
  }
  function Get_ALL__SubCategory() {
    setloaderopen(true);
    SetSubCategoryData([]);
    Get_Sub_Category()
      .then(({ data }) => {
        setloaderopen(false);
        SetSubCategoryData(data.data);
        setallcategory([]);
        data.data.map((item) =>
          setallcategory((preValue) => [
            ...preValue,
            { label: item.name, value: item.id },
          ])
        );
        console.log(allcategory);
      })
      .catch((err) => {
        setloaderopen(false);
      });
  }
  const delete_category = (dataid) => {
    setloaderopen(true);
    const body = {
      id: dataid,
    };
    Delete_Sub_Category(body)
      .then(({ data }) => {
        setloaderopen(false);
        setOpen(false);
        get_all_usecase();
        swal("yahoo!", "Added Success!", "success");
      })
      .catch((err) => {
        setloaderopen(false);
        swal("Oops!", "Error Occured!", "error");
      });
  };
  const addusecase = (event) => {
    event.preventDefault();
    setloaderopen(true);
    const data = new FormData(event.currentTarget);
    const body = {
      name: data.get("name"),
      description: data.get("description"),
      is_enabled: true,
      component_id: data.get("component_id"),
      tool_tip_description: data.get("tool_tip_description"),
    };
    Add_Usecase(body)
      .then(({ data }) => {
        setloaderopen(false);
        setOpen(false);
        get_all_usecase();
        swal("yahoo!", "Added Success!", "success");
      })
      .catch((err) => {
        setloaderopen(false);
        swal("Oops!", "Alreadr Exist!", "error");
      });
  };
  const updateusecase = (event) => {
    setloaderopen(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      id: data.get("id"),
      name: data.get("name"),
      description: data.get("description"),
      is_enabled: true,
      component_id: data.get("component_id"),
      tool_tip_description: data.get("tool_tip_description"),
    };
    Update_Usecase(body)
      .then(({ data }) => {
        setloaderopen(false);
        seteOpen(false);
        get_all_usecase();
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
                  <TableCell>Use Case Name</TableCell>
                  <TableCell>Use Description </TableCell>
                  <TableCell>Use Tool Tip</TableCell>
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
                {Allusecase.map((item) => (
                  <TableRow id={`row_${item.id}`}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.tool_tip_description}</TableCell>
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
            Add New UseCase
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid>
              <Grid>
                <Box
                  component="form"
                  onSubmit={addusecase}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Select
                    options={allcategory}
                    fullWidth
                    id="component_id"
                    name="component_id"
                  />
                  <Typography>Enter UseCase Name : :</Typography>
                  <TextField required fullWidth id="name" name="name" />
                  <Typography>Enter Use Case Description:</Typography>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    name="description"
                  />
                  <Typography>Enter Use Case ToolTip Description :</Typography>
                  <TextField
                    required
                    fullWidth
                    id="tool_tip_description"
                    name="tool_tip_description"
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
            Edit UseCAse
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid>
              <Grid>
                <Box
                  component="form"
                  onSubmit={updateusecase}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Typography>Enter UseCase Name : :</Typography>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    name="name"
                    defaultValue={rowdata.name}
                  />
                  <Typography>Enter Use Case Description:</Typography>
                  <TextField
                    required
                    defaultValue={rowdata.description}
                    fullWidth
                    id="description"
                    name="description"
                  />
                  <Typography>Enter Use Case ToolTip Description :</Typography>
                  <TextField
                    required
                    fullWidth
                    defaultValue={rowdata.tool_tip_description}
                    id="tool_tip_description"
                    name="tool_tip_description"
                  />
                  <input type="hidden" value={rowdata.id} id="id" name="id" />
                  <input
                    type="hidden"
                    value={rowdata.component_id}
                    id="component_id"
                    name="component_id"
                  />
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
