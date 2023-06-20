import React, { useEffect, useState } from "react";
import "./todo.css";
import Newtask from "./newtask";
import axios from "axios";
//task filter
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
import { styled } from "@mui/system";
//search
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//popover
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { EmojiEmotions } from "@mui/icons-material";
// component starts--------------------------------/

const Todo = () => {
  const [progressList, setProgressList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [comment, setComment] = useState("");
  const [filter, setFilter] = useState("all");
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
    // if (b.length > 0) {
      filteredDetails = taskList.filter((task) => {
        return task.title.toLowerCase().includes(b.toLowerCase());
      });
    // }
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

  // console.log("search",search)

  //task list--------------
  useEffect(() => {
    console.log("data change")
    console.log("progress",`http://89.116.30.81:8000/todo/filterlist/2/?status=inprogress&start_date=${viewDate}&end_date=${viewDate}`
    )
    axios
      // .get(
      //   `http://89.116.30.81:8000/daily_task/status/?status=in progress&start_date=${viewDate}&end_date=${viewDate}`
      // )
      .get(
        `http://89.116.30.81:8000/todo/filterlist/2/?status=inprogress&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {

        console.log("progress", val.data);
        setProgressList(val.data);
      })  
      .catch((err) => console.log("er", err));
    console.log("setprogresslist update task");
  }, [viewDate, newTask]);

  useEffect(() => {
    console.log("review",`http://89.116.30.81:8000/todo/filterlist/2/?status=review&start_date=${viewDate}&end_date=${viewDate}`
    )
    axios
      .get(
        `http://89.116.30.81:8000/todo/filterlist/2/?status=review&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {
        console.log("review", val.data);
        setReviewList(val.data);
      })
      .catch((err) => console.log("er", err));
  }, [viewDate]);

  useEffect(() => {
    console.log("completed",`http://89.116.30.81:8000/todo/filterlist/2/?status=completed&start_date=${viewDate}&end_date=${viewDate}`
    )
    axios
      .get(
        `http://89.116.30.81:8000/todo/filterlist/2/?status=completed&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {
        console.log("completed", val.data);
        setCompletedList(val.data);
      })
      .catch((err) => console.log("er", err));
  }, [viewDate]);
console.log("progressList",progressList,"revielist",reviewList,"completed",completedList)
  // date change---------->

  const handleDateChange = (date) => {
    let getdate = date.$D < 10 ? "0" + date.$D : date.$D;
    let getmonth = date.$M + 1 < 10 ? "0" + (date.$M + 1) : date.$M + 1;
    let getyear = date.$y;
    console.log(`${getyear}-${getmonth}-${getdate}`);
    setViewDate(`${getyear}-${getmonth}-${getdate}`);
  };

  const toggleComment = (id, classname, i) => {
    let idElement = document.getElementById(id);
    let element = idElement.getElementsByClassName(classname)[i];
    element.classList.toggle("d-none");
  };

  const SubmitComment = (id, tagname, i, taskId) => {
    let idElement = document.getElementById(id);
    let element = idElement.getElementsByTagName(tagname)[i];
    let value = element.value;

    console.log(taskId, value);
    element.value = "";
    const data = {
      task_id: taskId,
      comment: value,
    };
    axios
      .post("http://89.116.30.81:8000/task/comments/", data)
      .then((response) => {
        setComment(response.data);
        console.log("entered comment");
      })
      .catch((err) => console.log("er", err));
  };
  //task filter

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    // setFilter(event.target.value);
  };

  //updateTask from newTask

  const updateTask = (a) => {
    setNewTask(a);
  };
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
              className="todo-dateFilter"
              onChange={(date) => handleDateChange(date)}
            ></DatePicker>
          </LocalizationProvider>
          <FormControl
            sx={{ m: 1, minWidth: 120, margin: "0 2px", padding: 0 }}
            size="small"
          >
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={filter}
              //style={{}}
              onChange={handleFilterChange}
            >
              <MenuItem value={"all"}>All Project</MenuItem>
              <MenuItem value={"back-end"}>Back-end</MenuItem>
              <MenuItem value={"front-end"}>Front-end</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* progress field --------------------------------*/}
      <div
        className="row justify-content-between position-relative"
        id="todo-list"
      >
        <div className="col-lg-4">
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
                  <p className="noTask">No task to view in progress</p>
                </div>
              ) : (
                progressList.map((a, i) => {
                  return (
                    <div className="progressItem-Card card ">
                      <div className="progressItem-header d-flex justify-content-between align-team-center">
                        <h5>{a.title[0].toUpperCase() + a.title.slice(1)}</h5>
                        <EditIcon
                          style={{ color: "#787c7f", fontSize: "14px" }}
                        />
                      </div>
                      <div className="progressItem-body">
                        <p>{a.description}</p>
                      </div>
                      <div className="progressItem-footer text-justify">
                        <div className="d-flex align-items-center footer-links">
                          <CommentIcon
                            className="footer-icon"
                            onClick={() =>
                              toggleComment("progress-body", "view-comments", i)
                            }
                          />
                          <AttachFileIcon className="footer-icon" />
                          <p className="task-date">{a.end_date}</p>
                          <p className="priority mx-2"> {a.priority} </p>
                          <p className="assignedBy">
                            {" "}
                            {"Mathew"[0].toUpperCase() + "mathew".slice(1)}
                          </p>
                        </div>
                        {/* <div className="view-comments d-none ">
                          {a.comments.length > 0 ? (
                            a.comments.map((b) => {
                              return (
                                <div>
                                  <p style={{ margin: 0 }}>{b.comment}</p>
                                  <i
                                    style={{ fontSize: "12px", color: "gray" }}
                                  >
                                    {b.name} <span>{b.todate}</span>
                                  </i>
                                </div>
                              );
                            })
                          ) : (
                            <p>No comments</p>
                          )}
                          <div class="form-floating addComments">
                            <textarea
                              class="form-control"
                              placeholder="Leave a comment here"
                              // id="floatingTextarea2"
                            ></textarea>
                            <label for="floatingTextarea2">Comments</label>
                            <button
                              type="button"
                              onClick={() =>
                                SubmitComment(
                                  "progress-body",
                                  "textarea",
                                  i,
                                  a.id
                                )
                              }
                            >
                              OK
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        {/* review field starts----------------------------------- */}

        <div className="col-lg-4">
          <div className="review-list list">
            <div className="review-Header d-flex justify-content-between align-items-flex-start header">
              <h5 className="text-center">
                <ReviewsIcon
                  style={{
                    color: "#aa34ed",
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
                        <EditIcon
                          style={{ color: "#787c7f", fontSize: "14px" }}
                          // onClick= {editTask}
                        />
                      </div>
                      <div className="reviewItem-body">
                        <p>{a.description}</p>
                      </div>
                      <div className="reviewItem-footer text-justify">
                        <div className="d-flex align-items-center footer-links">
                          <CommentIcon
                            className="footer-icon"
                            onClick={() =>
                              toggleComment("progress-body", "view-comments", i)
                            }
                          />
                          <AttachFileIcon className="footer-icon" />
                          <p className="task-date">{a.end_date}</p>
                          <p className="priority mx-2"> {a.priority} </p>
                          <p className="assignedBy">
                            {" "}
                            {"Mathew"[0].toUpperCase() + "mathew".slice(1)}
                          </p>
                        </div>

                        {/* <div className="view-comments d-none ">
                          {a.comments.length > 0 ? (
                            a.comments.map((b) => {
                              return (
                                <div>
                                  <p style={{ margin: 0 }}>{b.comment}</p>
                                  <i
                                    style={{ fontSize: "12px", color: "gray" }}
                                  >
                                    {b.name} <span>{b.todate}</span>
                                  </i>
                                </div>
                              );
                            })
                          ) : (
                            <p>No comments</p>
                          )}
                          <div class="form-floating addComments">
                            <textarea
                              class="form-control"
                              placeholder="Leave a comment here"
                              // id="floatingTextarea2"
                            ></textarea>
                            <label for="floatingTextarea2">Comments</label>
                            <button
                              type="button"
                              onClick={() =>
                                SubmitComment("review-body", "textarea", i)
                              }
                              className=""
                            >
                              OK
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* completed field starts-------------------------------- */}

        <div className="col-lg-4">
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
                  <p className="noTask">No task to view in completed</p>
                </div>
              ) : (
                completedList.map((a, i) => {
                  return (
                    <div className="completedItem-Card card mb-2">
                      <div className="completedItem-header d-flex justify-content-between align-team-center">
                        <h5>{a.title[0].toUpperCase() + a.title.slice(1)}</h5>
                        <EditIcon
                          style={{ color: "#787c7f", fontSize: "14px" }}
                        />
                      </div>
                      <div className="completedItem-body">
                        <p>{a.description}</p>
                      </div>
                      <div className="completedItem-footer">
                        <div className="d-flex align-items-center footer-links">
                          <CommentIcon
                            className="footer-icon"
                            onClick={() =>
                              toggleComment("progress-body", "view-comments", i)
                            }
                          />
                          <AttachFileIcon className="footer-icon" />
                          <p className="task-date">{a.end_date}</p>
                          <p className="priority mx-2"> {a.priority} </p>
                          <p className="assignedBy">
                            {" "}
                            {"Mathew"[0].toUpperCase() + "mathew".slice(1)}
                          </p>
                        </div>

                        {/* <div className="view-comments d-none ">
                          {a.comments.length > 0 ? (
                            a.comments.map((b) => {
                              return (
                                <div>
                                  <p style={{ margin: 0 }}>{b.comment}</p>
                                  <i
                                    style={{ fontSize: "12px", color: "gray" }}
                                  >
                                    {b.name} <span>{b.todate}</span>
                                  </i>
                                </div>
                              );
                            })
                          ) : (
                            <p>No comments</p>
                          )}
                          <div class="form-floating addComments">
                            <textarea
                              class="form-control"
                              placeholder="Leave a comment here"
                              // id="floatingTextarea2"
                            ></textarea>
                            <label for="floatingTextarea2">Comments</label>
                            <button
                              type="button"
                              onClick={() =>
                                SubmitComment(
                                  "completed-body",
                                  "textarea",
                                  i,
                                  a.id
                                )
                              }
                              className="text-end"
                            >
                              OK
                            </button>
                          </div>
                        </div> */}
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
