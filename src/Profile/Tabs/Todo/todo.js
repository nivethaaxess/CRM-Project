import React, { useEffect, useState } from "react";
import "./todo.css";
import Newtask from "./newtask";
import axios from "axios";
//task filter
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { NativeSelect } from "@mui/material";

//icons---
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CommentIcon from "@mui/icons-material/Comment";
import EditIcon from "@mui/icons-material/Edit";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import BuildIcon from "@mui/icons-material/Build";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//calender--
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//popper
import Popper from "@mui/base/Popper";
import { margin, styled } from "@mui/system";
//search
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//popover

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { EmojiEmotions } from "@mui/icons-material";
//edit task

import PropTypes from "prop-types";
// import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

// component starts--------------------------------/

const Todo = () => {
  const [progressList, setProgressList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [filter, setFilter] = useState("");
  // const [search, setSearch] = useState("")
  const [taskList, setTaskList] = useState([]);

  let today = new Date();
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();
  todayDate = todayDate < 10 ? "0" + todayDate : todayDate;
  todayMonth = todayMonth < 10 ? "0" + todayMonth : todayMonth;
  today = `${todayYear}-${todayMonth}-${todayDate}`;

  const [viewDate, setViewDate] = useState(today);

  let userid = 2;

  //search box
  useEffect(() => {
    axios
      .get(`http://89.116.30.81:8000/todo/list/`)
      .then((val) => {
        console.log("task list", val.data);
        let data = val.data.filter((a) => {
          return a.assign_user === 2;
        });
        setTaskList(data);
      })
      .catch((err) => console.log("er", err));
  }, []);

  const getTaskList = (b) => {

    let filteredDetails = taskList;
    filteredDetails = taskList.filter((task) => {
      return task.title.toLowerCase().includes(b.toLowerCase());
    });
    setProgressList(
      filteredDetails.filter((a) => {
        return a.status === "inprogress";
      })
    );
    setReviewList(
      filteredDetails.filter((a) => {
        return a.status === "review";
      })
    );
    setCompletedList(
      filteredDetails.filter((a) => {
        return a.status === "completed";
      })
    );
  };

  //task list--------------
  useEffect(() => {
    console.log("data change");
    console.log(
      "progress",
      `http://89.116.30.81:8000/todo/filterlist/${userid}/?status=inprogress&start_date=${viewDate}&end_date=${viewDate}`
    );
    axios
      .get(
        `http://89.116.30.81:8000/todo/filterlist/${userid}/?status=inprogress&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {
        console.log("progress", val.data);
        setProgressList(val.data);
      })
      .catch((err) => console.log("er", err));
    console.log("setprogresslist update task");
  }, [viewDate, newTask]);

  useEffect(() => {
    console.log(
      "review",
      `http://89.116.30.81:8000/todo/filterlist/${userid}/?status=review&start_date=${viewDate}&end_date=${viewDate}`
    );
    axios
      .get(
        `http://89.116.30.81:8000/todo/filterlist/${userid}/?status=review&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {
        console.log("review", val.data);
        setReviewList(val.data);
      })
      .catch((err) => console.log("er", err));
  }, [viewDate]);

  useEffect(() => {
    console.log(
      "completed",
      `http://89.116.30.81:8000/todo/filterlist/${userid}/?status=completed&start_date=${viewDate}&end_date=${viewDate}`
    );
    axios
      .get(
        `http://89.116.30.81:8000/todo/filterlist/${userid}/?status=completed&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {
        console.log("completed", val.data);
        setCompletedList(val.data);
      })
      .catch((err) => console.log("er", err));
  }, [viewDate]);

  // date change---------->

  const handleDateChange = (date) => {
    let getdate = date.$D < 10 ? "0" + date.$D : date.$D;
    let getmonth = date.$M + 1 < 10 ? "0" + (date.$M + 1) : date.$M + 1;
    let getyear = date.$y;
    console.log(`${getyear}-${getmonth}-${getdate}`);
    setViewDate(`${getyear}-${getmonth}-${getdate}`);
  };

  //get Comments
  const getComments = async(taskId) => {
    console.log("render get comments", taskId);
    return axios
      .get(`http://89.116.30.81:8000/todo/comments/${taskId}/`)
      .then((val) => {
        console.log("getCommentList", val.data);
        setCommentList(val.data);
      })
      .catch((err) => console.log("er", err));
  };
  console.log(commentList)

  //getcomment dates
  const getCommentDates = (commentdate) => {
    const date = new Date(commentdate);
    const formattedDate = date.toDateString();
    const formattedTime = date.toTimeString().slice(0, 8);

    if (formattedDate == new Date().toDateString()) {
      return formattedTime;
    } else return formattedDate;
  };
  //open comment starts------------
  
  const toggleComment = (UIid, classname, i, taskId) => {
    console.log(UIid, classname, i, taskId);
    let idElement = document.getElementById(UIid);
    let element = idElement.getElementsByClassName(classname)[i];
  
    // Check if the clicked comment is already open
    const isOpen = !element.classList.contains("d-none");
  
    // Close all comments
    let commentElements = idElement.getElementsByClassName(classname);
    for (let j = 0; j < commentElements.length; j++) {
      commentElements[j].classList.add("d-none");
    }
  
    // Open the clicked comment if it was closed
    if (!isOpen) {
      getComments(taskId)
        .then(() => {
          element.classList.remove("d-none");
        })
        .catch((err) => console.log("Error fetching comments:", err));
    }
  };
  //open comment ends------------

  //submit comment starts------------
  const SubmitComment = (taskId) => {
    console.log(comment);
    console.log(`http://89.116.30.81:8000/todo/comments/insert/${taskId}/`);
    let data = {
      content: comment,
      sender: userid,
      receiver: null,
    };
    console.log(data);
    axios
      .post(`http://89.116.30.81:8000/todo/comments/insert/${taskId}/`, data)
      .then((response) => {
        console.log("entered comment", response);
        getComments(taskId);
      })
      .catch((err) => console.log("er", err));
    setComment("");
    
  };
  //submit comment ends------------

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    let filter = event.target.value;
    let filteredDetails = taskList;

    if (filter === "back-end" || filter === "front-end") {
      filteredDetails = taskList.filter((task) => {
        return task.team === filter;
      });
    }
    console.log(filteredDetails);
    setProgressList(
      filteredDetails.filter((a) => {
        return a.status === "inprogress";
      })
    );
    setReviewList(
      filteredDetails.filter((a) => {
        return a.status === "review";
      })
    );
    setCompletedList(
      filteredDetails.filter((a) => {
        return a.status === "completed";
      })
    );
  };

  //updateTask from newTask

  const updateTask = (a) => {
    setNewTask(a);
  };

  //  edit task starts---
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //  edit task ----
  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    ".MuiFormControlLabel-label": checked && {
      // color: theme.palette.primary.main,
      color: "primary",
    },
  }));

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
  };
  const handleRadioChange = (event, id,title) => {
    const selectedValue = event.target.value;

    let data = { 
      status: selectedValue,
      title :title,
     };
    console.log(data);
    axios
      .put(`http://89.116.30.81:8000/todo/update/${id}/`, data)
      .then((response) => {
        console.log(response);
        console.log("edited success");
      })
      .catch((err) => console.log("er", err));
  };

  //edit task ends--------

  return (
    <div id="todo" className="position-relative p-2">
      <div
        className="d-flex justify-content-between align-items-center position-relative"
        // id="todo-list"
      >
        <div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                margin: 0.5,
                padding: 0.5,
                width: "25ch",
              },
            }}
            noValidate
            autoComplete="off"
            id="todoTaskSearch"
          >
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              size="small"
              // value={search}
              onChange={(e) => getTaskList(e.target.value)}
            />
          </Box>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="tododatefilter"
              className="todo-dateFilter"
              // value={viewDate}
              onChange={(date) => handleDateChange(date)}
            ></DatePicker>
          </LocalizationProvider>

          <FormControl>
            <NativeSelect
              defaultValue={"all"}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
              onChange={handleFilterChange}
              sx={{ margin: "0 5px" }}
            >
              <option value={"all"}>All</option>
              <option value={"back-end"}>Back-end</option>
              <option value={"front-end"}>Front-end</option>
            </NativeSelect>
          </FormControl>
        </div>
      </div>

      {/* progress field --------------------------------*/}
      <div
        className="row justify-content-between position-relative"
        id="todo-list"
      >
        <div className="col-lg-4 col-md-6">
          <div className="progress-list list">
            <div className="progress-Header d-flex justify-content-between align-items-flex-start header">
              <h5 className="text-center">
                <BuildIcon
                  style={{
                    color: "#e4b33b",
                    fontSize: "20px",
                    marginRight: "6px",
                  }}
                />
                Progress{" "}
              </h5>
            </div>
            <div className="progress-body body" id="progress-body">
              {progressList.length < 1 ? (
                <div className="card">
                  <p className="noTask">No task </p>
                </div>
              ) : (
                progressList.map((a, i) => {
                  return (
                    <div className="progressItem-Card card ">
                      <div className="progressItem-header d-flex justify-content-between align-team-center">
                        <h5>{a.title[0].toUpperCase() + a.title.slice(1)}</h5>

                        <PopupState
                          variant="popover"
                          popupId="demo-popup-popover"
                        >
                          {(popupState) => (
                            <div>
                              <Button
                                // variant="contained"
                                className="editTaskIcon"
                                {...bindTrigger(popupState)}
                              >
                                <EditIcon
                                  style={{ color: "#787c7f", fontSize: "14px" }}
                                />
                              </Button>
                              <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "center",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "center",
                                }}
                              >
                                <Typography sx={{ p: 2 }}>
                                  <RadioGroup
                                    name="use-radio-group"
                                    defaultValue={a.status}
                                    onChange={(e) => handleRadioChange(e, a.id,a.title)}
                                  >
                                    <MyFormControlLabel
                                      value="inprogress"
                                      label="Inprogress"
                                      control={<Radio />}
                                    />
                                    <MyFormControlLabel
                                      value="review"
                                      label="Review"
                                      control={<Radio />}
                                    />
                                    <MyFormControlLabel
                                      value="completed"
                                      label="Completed"
                                      control={<Radio />}
                                    />
                                  </RadioGroup>
                                </Typography>
                              </Popover>
                            </div>
                          )}
                        </PopupState>
                      </div>
                      <div className="progressItem-body">
                        <p>{a.description}</p>
                      </div>
                      <div className="progressItem-footer text-justify">
                        <div className="d-flex align-items-center footer-links">
                          <CommentIcon
                            className="footer-icon"
                            onClick={() =>
                              toggleComment(
                                "progress-body",
                                "view-comments",
                                i,
                                a.id
                              )
                            }
                          />
                          <AttachFileIcon className="footer-icon" />
                          <p className="task-date">{a.end_date}</p>
                          <p className="priority mx-1"> {a.priority} </p>
                          <p className="assignedBy">
                            {a.create_user_name[0].toUpperCase() +
                              a.create_user_name.slice(1)}
                          </p>
                        </div>
                        <div className="view-comments d-none ">
                          <hr></hr>
                          {commentList.length > 0 ? (
                            <div
                              className="commentBox"
                              style={{ maxHeight: "75px", overflowY: "scroll" }}
                            >
                              {commentList.map((b) => {
                                console.log(b);
                                return (
                                  <div style={{ textAlign: b.sender === userid ? "right" : "left" }}>
                                    <p
                                      style={{
                                        margin: "0 4px ",
                                        backgroundColor: "#e5e5e5",
                                        padding: "2px 4px",
                                        display: "inline-block",
                                        borderRadius: b.sender === userid ? "8px 5px 0 5px" : "8px 5px 5px 0" ,
                                      }}
                                    >
                                      {b.content}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                      <i
                                        style={{
                                          fontSize: "9px",
                                          margin: "0 4px ",
                                          color: "gray",
                                        }}
                                      >
                                        {b.sender_name}{" "}
                                        <span>
                                          {getCommentDates(b.created_at)}
                                        </span>
                                      </i>
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <p>No comments</p>
                          )}
                          <div class="addComments">
                            <textarea
                              value={comment}
                              placeholder="Leave a comment here"
                              onChange={(e) => {
                                setComment(e.target.value);
                              }}
                              style={{
                                width: "100%",
                                display: "block",
                                fontSize: "14px",
                              }}
                            ></textarea>
                            <button
                              type="button"
                              onClick={() => SubmitComment(a.id)}
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        {/* review field starts----------------------------------- */}

        <div className="col-lg-4 col-md-6">
          <div className="review-list list">
            <div className="review-Header d-flex justify-content-between align-items-flex-start header">
              <h5 className="text-center">
                <ReviewsIcon
                  style={{
                    color: "#dc3545",
                    fontSize: "20px",
                    marginRight: "6px",
                  }}
                />
                Review{" "}
              </h5>
              {/* <MoreVertIcon style={{color:""}}/> */}
            </div>
            <div className="review-body body" id="review-body">
              {reviewList.length < 1 ? (
                <div className="card">
                  <p className="noTask">No task to reivew</p>
                </div>
              ) : (
                reviewList.map((a, i) => {
                  return (
                    <div className="reviewItem-Card card  ">
                      <div className="reviewItem-header d-flex justify-content-between align-team-center">
                        <h5>{a.title[0].toUpperCase() + a.title.slice(1)}</h5>
                        <PopupState
                          variant="popover"
                          popupId="demo-popup-popover"
                        >
                          {(popupState) => (
                            <div>
                              <Button
                                // variant="contained"
                                className="editTaskIcon"
                                {...bindTrigger(popupState)}
                              >
                                <EditIcon
                                  style={{ color: "#787c7f", fontSize: "14px" }}
                                />
                              </Button>
                              <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "center",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "center",
                                }}
                              >
                                <Typography sx={{ p: 2 }}>
                                  <RadioGroup
                                    name="use-radio-group"
                                    defaultValue={a.status}
                                    onChange={(e) => handleRadioChange(e, a.id,a.title)}
                                  >
                                    <MyFormControlLabel
                                      value="inprogress"
                                      label="Inprogress"
                                      control={<Radio />}
                                    />
                                    <MyFormControlLabel
                                      value="review"
                                      label="Review"
                                      control={<Radio />}
                                    />
                                    <MyFormControlLabel
                                      value="completed"
                                      label="Completed"
                                      control={<Radio />}
                                    />
                                  </RadioGroup>
                                </Typography>
                              </Popover>
                            </div>
                          )}
                        </PopupState>
                      </div>
                      <div className="reviewItem-body">
                        <p>{a.description}</p>
                      </div>
                      <div className="reviewItem-footer text-justify">
                        <div className="d-flex align-items-center footer-links">
                          <CommentIcon
                            className="footer-icon"
                            onClick={() =>
                              toggleComment(
                                "review-body",
                                "view-comments",
                                i,
                                a.id
                              )
                            }
                          />
                          <AttachFileIcon className="footer-icon" />
                          <p className="task-date">{a.end_date}</p>
                          <p className="priority mx-2"> {a.priority} </p>
                          <p className="assignedBy">
                            {" "}
                            {a.create_user_name[0].toUpperCase() +
                              a.create_user_name.slice(1)}
                          </p>
                        </div>
                        <div className="view-comments d-none ">
                          <hr></hr>
                          {commentList.length > 0 ? (
                            <div
                              className="commentBox"
                              style={{ maxHeight: "75px", overflowY: "scroll" }}
                            >
                              {commentList.map((b) => {
                                console.log(b);
                                return (
                                  <div style={{ textAlign: b.sender === userid ? "right" : "left" }}>
                                    <p
                                      style={{
                                        margin: 0,
                                        backgroundColor: "#e5e5e5",
                                        padding: "2px 4px",
                                        display: "inline-block",
                                        borderRadius:  b.sender === userid ? "8px 5px 0 5px" :"8px 5px 5px 0",
                                      }}
                                    >
                                      {b.content}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                      <i
                                        style={{
                                          fontSize: "9px",
                                          color: "gray",
                                        }}
                                      >
                                        {b.sender_name}{" "}
                                        <span>
                                          {getCommentDates(b.created_at)}
                                        </span>
                                      </i>
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <p>No comments</p>
                          )}
                          <div class="addComments">
                            <textarea
                              value={comment}
                              placeholder="Leave a comment here"
                              onChange={(e) => {
                                setComment(e.target.value);
                              }}
                              style={{
                                width: "100%",
                                display: "block",
                                fontSize: "14px",
                              }}
                            ></textarea>
                            <button
                              type="button"
                              onClick={() => SubmitComment(a.id)}
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* completed field starts-------------------------------- */}

        <div className="col-lg-4 col-md-6">
          <div className="completed-list list">
            <div className="completed-Header d-flex justify-content-between align-items-flex-start header">
              <h5 className="text-center">
                <TaskAltIcon
                  style={{
                    color: "green",
                    fontSize: "20px",
                    marginRight: "6px",
                  }}
                />
                Done{" "}
              </h5>
            </div>
            <div className="completed-body body" id="completed-body">
              {completedList.length < 1 ? (
                <div className="card">
                  <p className="noTask">No task</p>
                </div>
              ) : (
                completedList.map((a, i) => {
                  return (
                    <div className="completedItem-Card card mb-2">
                      <div className="completedItem-header d-flex justify-content-between align-team-center">
                        <h5>{a.title[0].toUpperCase() + a.title.slice(1)}</h5>
                        <PopupState
                          variant="popover"
                          popupId="demo-popup-popover"
                        >
                          {(popupState) => (
                            <div>
                              <Button
                                // variant="contained"
                                className="editTaskIcon"
                                {...bindTrigger(popupState)}
                              >
                                <EditIcon
                                  style={{ color: "#787c7f", fontSize: "14px" }}
                                />
                              </Button>
                              <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "center",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "center",
                                }}
                              >
                                <Typography sx={{ p: 2 }}>
                                  <RadioGroup
                                    name="use-radio-group"
                                    defaultValue={a.status}
                                    onChange={(e) => handleRadioChange(e, a.id,a.title)}
                                  >
                                    <MyFormControlLabel
                                      value="inprogress"
                                      label="Inprogress"
                                      control={<Radio />}
                                    />
                                    <MyFormControlLabel
                                      value="review"
                                      label="Review"
                                      control={<Radio />}
                                    />
                                    <MyFormControlLabel
                                      value="completed"
                                      label="Completed"
                                      control={<Radio />}
                                    />
                                  </RadioGroup>
                                </Typography>
                              </Popover>
                            </div>
                          )}
                        </PopupState>
                      </div>
                      <div className="completedItem-body">
                        <p>{a.description}</p>
                      </div>
                      <div className="completedItem-footer">
                        <div className="d-flex align-items-center footer-links">
                          <CommentIcon
                            className="footer-icon"
                            onClick={() =>
                              toggleComment(
                                "completed-body",
                                "view-comments",
                                i,
                                a.id
                              )
                            }
                          />
                          <AttachFileIcon className="footer-icon" />
                          <p className="task-date">{a.end_date}</p>
                          <p className="priority mx-2"> {a.priority} </p>
                          <p className="assignedBy">
                            {a.create_user_name[0].toUpperCase() +
                              a.create_user_name.slice(1)}
                          </p>
                        </div>

                        <div className="view-comments d-none ">
                          <hr></hr>
                          {commentList.length > 0 ? (
                            <div
                              className="commentBox"
                              style={{ maxHeight: "75px", overflowY: "scroll" }}
                            >
                              {commentList.map((b) => {
                                console.log(b);
                                return (
                                  <div style={{ textAlign: b.sender === userid ? "right" : "left" }}>
                                    <p
                                      style={{
                                        margin: 0,
                                        backgroundColor: "#e5e5e5",
                                        padding: "2px 4px",
                                        display: "inline-block",
                                        borderRadius:  b.sender === userid ? "8px 5px 0 5px" : "8px 5px 5px 0",
                                      }}
                                    >
                                      {b.content}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                      <i
                                        style={{
                                          fontSize: "9px",
                                          color: "gray",
                                        }}
                                      >
                                        {b.sender_name}{" "}
                                        <span>
                                          {getCommentDates(b.created_at)}
                                        </span>
                                      </i>
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <p>No comments</p>
                          )}
                          <div class="addComments">
                            <textarea
                              value={comment}
                              placeholder="Leave a comment here"
                              onChange={(e) => {
                                setComment(e.target.value);
                              }}
                              style={{
                                width: "100%",
                                display: "block",
                                fontSize: "14px",
                              }}
                            ></textarea>
                            <button
                              type="button"
                              onClick={() => SubmitComment(a.id)}
                            >
                              OK
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <>
        <Newtask updateTask={updateTask} />
      </>
    </div>
  );
};

export default Todo;
