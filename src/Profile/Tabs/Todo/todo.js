import React, { useEffect, useState } from "react";
import "./todo.css";
import Newtask from "./newtask";
import axios from "axios";
//icons---
import CommentIcon from "@mui/icons-material/Comment";
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

// component starts--------------------------------/

const Todo = () => {
  const [progressList, setProgressList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  let today = new Date();
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();
  todayDate = todayDate < 10 ? "0" + todayDate : todayDate;
  todayMonth = todayMonth < 10 ? "0" + todayMonth : todayMonth;
  today = `${todayYear}-${todayMonth}-${todayDate}`;

  console.log(today);

  const [viewDate, setViewDate] = useState(today);
  //  const [reviewDate, setReviewDate] = useState(today);
  //  const [completedDate, setCompletedDate] = useState(today);

  //comment box
  const [comment, setComment] = useState("");
  const [task, setTaskName] = useState("");

  //popper
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const StyledPopperDiv = styled("div")(
    ({ theme }) => `
    padding: 0.5rem;
    border: 1px solid;
    background-color: ${theme.palette.mode === "dark" ? "#121212" : "#fff"};
    opacity: 1;
    margin: 0.25rem 0px;
  `
  );

  //task list--------------
  useEffect(() => {
    axios
      .get(
         `http://89.116.30.81:8000/daily_task/status/?status=in progress&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {
        console.log("progerss", val.data);
        setProgressList(val.data);
      })
      .catch((err) => console.log("er", err));
    }, [viewDate]);

  useEffect(() => {
    axios
      .get(
        `http://89.116.30.81:8000/daily_task/status/?status=review&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {
        console.log("review", val.data);
        setReviewList(val.data);
      })
      .catch((err) => console.log("er", err));
  }, [viewDate]);

  useEffect(() => {
    axios
      .get(
        `http://89.116.30.81:8000/daily_task/status/?status=completed&start_date=${viewDate}&end_date=${viewDate}`
      )
      .then((val) => {
        console.log("complted", val.data);
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

  return (
    <div id="todo" className="position-relative pt-2">
      <div className="row justify-content-between" id="todo-list" >
        {/* progress field --------------------------------*/}

        <div className="col-lg-4">
          <div >
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
              {/* <MoreVertIcon style={{color:"#787c7f"}}/>          */}
            </div>
            <div className="progress-body body" id="progress-body">
              {progressList.map((a, i) => {
                return (
                  <div className="progressItem-Card card mb-2">
                    <div className="progressItem-header">
                       <span>
                          {a.start_date}
                        </span> 
                      <h5>{a.title}</h5>
                    </div>
                    <div className="progressItem-body">
                      <p>{a.description}</p>
                    </div>
                    <div className="progressItem-footer text-justify">
                      <div
                        onClick={() =>
                          toggleComment("progress-body", "view-comments", i)
                        }
                      >
                        <CommentIcon
                          style={{ color: "#1976d2", fontSize: "16px" }}
                        />
                      </div>

                      <div className="view-comments d-none ">
                        {a.comments.length > 0 ? (
                          a.comments.map((b) => {
                            return (
                              <div>
                                <p style={{ margin: 0 }}>{b.comment}</p>
                                <i style={{ fontSize: "12px", color: "gray" }}>
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* review field----------------------------------- */}

        <div className="col-lg-4">
          <div>
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
            {reviewList.map((a, i) => {
                return (
                  <div className="reviewItem-Card card  ">
                    <div className="reviewItem-header">
                      <span>
                          {a.start_date}
                        </span> 
                      <h5>{a.title}</h5>
                    </div>
                    <div className="reviewItem-body">
                      <p>{a.description}</p>
                    </div>
                    <div className="reviewItem-footer text-justify">
                      <div
                        onClick={() =>
                          toggleComment("review-body", "view-comments", i, a.id)
                        }
                      >
                        <CommentIcon
                          style={{ color: "#1976d2", fontSize: "16px" }}
                        />
                      </div>

                      <div className="view-comments d-none ">
                        {a.comments.length > 0 ? (
                          a.comments.map((b) => {
                            return (
                              <div>
                                <p style={{ margin: 0 }}>{b.comment}</p>
                                <i style={{ fontSize: "12px", color: "gray" }}>
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
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* completed field starts-------------------------------- */}

        <div className="col-lg-4">
          <div>
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
              
              <div id="taskFilter">
                <button
                  aria-describedby={id}
                  type="button"
                  onClick={handleClick}

                >
                  <MoreVertIcon style={{ color: "#787c7f" }} />
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
                  <StyledPopperDiv>        
                   <div>Sort by</div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}  >
                    
                  <DatePicker
                    //  value={viewDate}
                    className = "datePicker"
                    onChange={(date) => handleDateChange(date)}></DatePicker>
                    
                  
                </LocalizationProvider>
                    </StyledPopperDiv>
                </Popper>
              </div>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}  >
                  <DatePicker
                    // value={completedDate}
                    className = "datePicker"
                    onChange={(date) => handleDateChange(date, "completed")}
                    
                  />
                </LocalizationProvider>
               */}
            </div>
            <div className="completed-body body" id="completed-body">
              {completedList.map((a, i) => {
                return (
                  <div className="completedItem-Card card mb-2">
                    <div className="completedItem-header">
                        <span>
                          {a.start_date}
                        </span> 
                      <h5>{a.title}</h5>
                    </div>
                    <div className="completedItem-body">
                      <p>{a.description}</p>
                      <p>
                        {/* <small>
                          {a.start_date} to {a.end_date}
                        </small> */}
                      </p>
                    </div>
                    <div className="completedItem-footer text-justify">
                      <div
                        onClick={() =>
                          toggleComment("completed-body", "view-comments", i)
                        }
                      >
                        <CommentIcon
                          style={{ color: "#1976d2", fontSize: "16px" }}
                        />
                      </div>

                      <div className="view-comments d-none ">
                        {a.comments.length > 0 ? (
                          a.comments.map((b) => {
                            return (
                              <div>
                                <p style={{ margin: 0 }}>{b.comment}</p>
                                <i style={{ fontSize: "12px", color: "gray" }}>
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <>
      
              <Newtask />
       </>
    </div>
  );
};

export default Todo;
