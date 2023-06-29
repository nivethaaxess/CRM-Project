import React from "react";
import "./profile.css";

import { useState, useEffect } from "react";
import axios from "axios";
import Tabs from "./Tabs/tabs";
import RightTabs from "./RightTab/rightTab";
import InputIcon from "@mui/icons-material/Input";
import SearchIcon from "@mui/icons-material/Search";
import RatingValue from "./Rating/rating";
//pdf reader---------

// header
import Avatar from "@mui/material/Avatar";

/* profile-dropdown-----------*/

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

/* current-status-----------*/

import CheckIcon from "@mui/icons-material/Check";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const Profile = () => {
  const [userList, setUserList] = useState({});

  useEffect(() => {
    console.log("useeffect");
    axios
      .get(`http://89.116.30.81:8000/myprofile/${1}/`)
      .then((val) => {
        console.log("val", val.data);
        setUserList(val.data);
      })
      .catch((err) => console.log("er", err));
    
  }, []);
  
  const othersList = [
    { name: "Radha krishna", available: "interview" },
    { name: "Hasin mohamad", available: "yes" },
    { name: "Rekha nayar", available: "no" },
  ];

  const [actions, setActions] = useState(10);

  const handleSearch = () => {};
  const changePage = () => {};
  const handleActionChange = (event) => {
    setActions(event.target.value);
  };

  return (
    <div>
      <div id="profile" className="profile-page ">
        <div className="container">
          <header className="border-bottom">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <div className="nav-icon">
                  <a href="#">
                    <img></img>
                  </a>
                  <a href="#" onClick={changePage}>
                    Dashboard
                  </a>
                  <a href="#" onClick={changePage}>
                    Report
                  </a>
                  <a href="#" onClick={changePage}>
                    Messages
                  </a>
                  <a href="#" onClick={changePage}>
                    Freelancers
                  </a>
                  <a href="#" onClick={changePage}>
                    Jobs
                  </a>
                </div>
              </div>

              <div className="d-flex header-right align-items-center justify-content-between">
                <div className="seachbar">
                  <span>
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={handleSearch}
                  ></input>
                </div>
                <div className="d-flex header-name align-items-center justify-content-between">
                  <>
                    {/* <Avatar>{userList.name[0]}</Avatar>  */}
                    <p>{userList.name}</p>
                  </>
                  <InputIcon />
                </div>
              </div>
            </div>
          </header>
          {/*     main section starts --------------------------------   */}

          <main>
            <div className="navigation-section p-2">
              <div className="container">
                <div className="d-flex align-items-center">
                  <p className="slash">
                    <b>Freelancers</b>
                  </p>
                  <p className="slash">
                    <b>Designers</b>
                  </p>
                  <p>{userList.name}</p>
                </div>
              </div>
            </div>
            {/*----------------------------profile section----------------*/}
            <div className="profile-section">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-9 ">
                    <div className="profile row section-border">
                      <div className="col-md-12 col-lg-3 profile-image">
                        <img src="" alt="profile-img"></img>
                      </div>
                      <div className="col-md-12 col-lg-9 ps-3">
                        <div className="row">
                          <div className="col-lg-9">
                            <b>{userList.name}</b>
                            <p className="user-role">{userList.role}</p>
                          </div>
                          <div className="col-lg-3">
                            <Box sx={{ minWidth: 120 }}>
                              <FormControl fullWidth>
                                <InputLabel
                                  sx={{ placeholder: "Action" }}
                                  id="demo-simple-select-label"
                                >
                                  Action
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={actions}
                                  label="Action"
                                  onChange={handleActionChange}
                                >
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </div>
                        </div>
                        <div className="row user-details">
                          <div className="col-md-6">
                            <div className="d-flex">
                              <ul className="profile-labels">
                                <li>Name</li>
                                <li>Date of Birth</li>
                                <li>Email</li>
                                {/* <li>Jobs</li>
                                <li>Specifications</li> */}
                              </ul>
                              <ul className="profile-values">
                                <li>{userList.name || ""}</li>
                                <li>{userList.date_of_birth || ""}</li>
                                <li>{userList.email_address || ""}</li>
                                {/* <li>{userList.job || ""}</li> */}
                                {/* <li>{userList.specification || ""}</li> */}
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex ">
                              <ul className="profile-labels">
                                <li>Job Success</li>
                                <li>Total earned</li>
                                {/* <li>Hour Rate</li>
                                <li>Hours Worked</li>
                                <li>Skills</li> */}
                              </ul>
                              <ul className="profile-values">
                                {/* <li>
                                  {
                                    <RatingValue
                                      rating={userList.job_success_rate}
                                      lab="pro"
                                    />
                                  }
                                </li> */}
                                <li>{userList.total_earned}</li>
                                <li>{userList.hourly_rate}</li>
                                {/* <li>{userList.hours_worked}</li>
                                <li>{userList.skills}</li> */}
                              </ul>
                            </div>
                          </div>
                          {/* <div className="col-md-12">
                            <div className="d-flex attachments">
                              <p className="profile-labels">Attachments</p>
                              <p className="file">
                                <PictureAsPdfIcon />
                                {/* <a href="">{userList.attachments}</a>
                                <div style={{overflow:'scroll',height:600}}>
                                   <PDFReader url="http://localhost:3000/test.pdf"/>
                                 </div> */}
                              {/* </p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 ">
                    {/*---------------------------current status-----------------*/}
                    <div className="current-status-section section-border ">
                      <div className="">
                        <p className=" current-status">
                          <b>Current Status</b>
                        </p>

                      </div>
                      <div className="">
                        <div className="others d-flex">
                          <div className="">
                            <div className="person-logo">
                              {othersList[0].name[0]}
                            </div>
                          </div>
                          <div className=" person-status">
                            <p>
                              <b>{othersList[0].name}</b> status changed as{" "}
                              <span>{othersList[0].available}</span>
                            </p>
                            <div>
                              <QueryBuilderIcon /> {"10 mins ago"}
                            </div>
                          </div>
                        </div>
                        <div className="others d-flex">
                          <div className="">
                            <div className="person-logo">
                              {othersList[1].name[0]}
                            </div>
                          </div>
                          <div className=" person-status">
                            <p>
                              <b>{othersList[1].name}</b> status changed as{" "}
                              <span>{othersList[1].available}</span>
                            </p>
                            <div>
                              <QueryBuilderIcon /> {"10 mins ago"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**--------------------------tab-section starts----------------------------- */}
            <div className="tab-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <Box sx={{ width: "100%" }}>
                      <Tabs />
                    </Box>
                  </div>
                  <div className="col-lg-3">
                    <div className="p-3">
                      <RightTabs />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
  