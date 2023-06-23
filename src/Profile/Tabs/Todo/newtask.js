import * as React from "react";
import "./newtask.css";

import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, Box } from "@mui/system";
import Modal from "@mui/base/Modal";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// date

import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

//add button
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";

// component

export default function ModalDemo(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(dateRange);

  //date
  const getDateFormat = (date) => {   
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    var formattedDate = year + "-" + month + "-" + day;
    console.log("formatdate", formattedDate);
    return formattedDate;
  };


  const style1 = {
    borderRadius: "3px 0 3px 3px",
  };
  const style2 = {
    boxShadow: "1px 0px 4px 0px #383838",
  };

  const addNewTask = () => {
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    const data = {
      create_user: 2,
      assign_user: 2,
      team: null,
      title: title,
      description: description,
      status: "inprogress",
      attachments: null,
      start_date:getDateFormat(dateRange[0]) ,
      end_date: getDateFormat(dateRange[1]),
    };
    console.log(data);
    axios
      .post("http://89.116.30.81:8000/todo/insert/", data)
      .then((response) => {
          console.log("add new task success")
      })
      .catch((err) => console.log("error in add new task", err));

    setTitle("");
    setDescription("");
    props.updateTask(data);
  };

  return (
    <div id="newTask">
      <div className="align">
        <TriggerButton type="button" onClick={handleOpen}>
          Add Task
        </TriggerButton>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          slots={{ backdrop: StyledBackdrop }}
          style={style1}
          id="addtaskpopup"
        >
          <Box sx={style} style={style2}>
            <h6 className="text-center">NEW TASK</h6>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ marginTop: 1 }}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                value={description}
                fullWidth
                multiline
                onChange={(e) => setDescription(e.target.value)}
                sx={{ marginTop: 1 }}
                maxRows={8}
              />
              <DateRangePicker onChange={setDateRange} value={dateRange} />
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={addNewTask}
                sx={{ marginTop: 1, fontSize: "14px", padding: 0 }}
              >
                Add
              </Button>
            </Stack>
          </Box>
        </StyledModal>
      </div>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: "12px",
  padding: "16px 32px 24px 32px",
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === "dark" ? "#000" : "#383838"
  }`,
});

const TriggerButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 6px 12px;
  line-height: 1.5;
  background: transparent;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[100] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);
