import { Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
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
export default function Modals({ handlesubmit, status }) {
  const [open, setOpen] = React.useState(status);
  return (
    <>
      <Modal
        open={open}
        // onClose={handleClose}
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
                  onSubmit={handlesubmit}
                  noValidate
                  sx={{ mt: 1 }}
                ></Box>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
