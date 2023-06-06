
// import React from "react";
// import "./tabs.css";
// import Todo from "./Todo/todo";
// import Skills from "./Skills/skills";
// import RatingValue from "../Rating/rating";

// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import PersonPinIcon from "@mui/icons-material/PersonPin";
// import DescriptionIcon from "@mui/icons-material/Description";
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
// import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
// import ListAltIcon from "@mui/icons-material/ListAlt";

// /*  Basic Information------*/
// import InfoIcon from "@mui/icons-material/Info";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// /* component starts--------*/

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="  icon position tabs example scrollable auto"
//         >
//           <Tab
//             icon={<DescriptionIcon />}
//             iconPosition="start"
//             label="Basic Information"
//             {...a11yProps(0)}
//           />
//           <Tab
//             icon={<KeyboardDoubleArrowUpIcon />}
//             iconPosition="start"
//             label="Skills"
//             {...a11yProps(1)}
//           />
//           <Tab
//             icon={<PersonPinIcon />}
//             iconPosition="start"
//             label="Employment History"
//             {...a11yProps(2)}
//           />
//           <Tab
//             icon={<PersonPinIcon />}
//             iconPosition="start"
//             label="Portfolio"
//             {...a11yProps(3)}
//           />
//           <Tab
//             icon={<PersonPinIcon />}
//             iconPosition="start"
//             label="Education"
//             {...a11yProps(4)}
//           />
//           <Tab
//             icon={<QueryBuilderIcon />}
//             iconPosition="start"
//             label="Work History"
//             {...a11yProps(5)}
//           />
//           <Tab
//             icon={<ListAltIcon />}
//             iconPosition="start"
//             label="Todo List"
//             {...a11yProps(6)}
//           />
//         </Tabs>
//       </Box>
//       <TabPanel sx={{ fontSize: "30px" }} value={value} index={0}>
//         <section className="basic-information-section">
//           <div className="overview-section">
//             <div className="d-flex heading justify-content-between">
//               <div className="">
//                 <b>Additional overview</b>
//               </div>
//               <div>
//                 <a href="#">
//                   info <InfoIcon />
//                 </a>
//               </div>
//             </div>
//             <div className="overview-content content">
//               <div className="row">
//                 <div className="col-md-4">
//                   <div className="row">
//                     <div className="col-md-6">Team members</div>
//                     <div className="col-md-6">{""}</div>
//                     <div className="col-md-6">Background</div>
//                     <div className="col-md-6">{"Not "}</div>
//                     <div className="col-md-6">Demand Salary</div>
//                     <div className="col-md-6">{"$3000-$4000"}</div>
//                   </div>
//                 </div>
//                 <div className="col-md-8">
//                   <div className="row">
//                     <div className="col-md-6 link-color">Links</div>
//                     <div className="col-md-6"></div>
//                     <div className="col-md-6">On-Required</div>
//                     <div className="col-md-6">{"On site required"}</div>
//                     <div className="col-md-6">Remote Frienfdly</div>
//                     <div className="col-md-6">{"Available"}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="post-interview-section">
//             <div className="d-flex heading justify-content-between">
//               <div className="">
//                 <b>Post Interview skill Assessment</b>
//               </div>
//               <div>
//                 <a href="#">View Full Feedback</a>
//               </div>
//             </div>
//             <div className="post-interview-content content">
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="row">
//                     <div className="col-md-4">Responsive web Design</div>
//                     <div className="col-md-8 d-flex">
//                       <RatingValue rating={5} />({5} out of 5)
//                     </div>
//                     <div className="col-md-4">Corporate Brand Identity</div>
//                     <div className="col-md-8 d-flex">
//                       <RatingValue rating={2.5} />({2.5} out of 5)
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="row">
//                     <div className="col-md-5">User Interface Design</div>
//                     <div className="col-md-7 d-flex">
//                       <RatingValue rating={3} />({3} out of 5)
//                     </div>
//                     <div className="col-md-5">Label and Package Design</div>
//                     <div className="col-md-7 d-flex">
//                       <RatingValue rating={4.5} />({4.5} out of 5)
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="attachments-documents-section">
//             <div className="d-flex heading justify-content-between">
//               <div className="">
//                 <b>Attachments Documents</b>({3} in total)
//               </div>
//               <div>
//                 <a href="#">View All</a>
//               </div>
//             </div>
//             <div className="attachments-documents-content content">
//               <div className="row">
//                 <div className="col-md-6">
//                   <a href="#">
//                     <PictureAsPdfIcon />
//                     {"kjkfj"}
//                   </a>
//                 </div>
//                 <div className="col-md-6">
//                   <a href="#">
//                     <PictureAsPdfIcon />
//                     {"vkfdjvkjdk"}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Skills />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Employment History
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Portfolio
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Education
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Work History
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         <Todo />
//       </TabPanel>
//     </Box>
//   );
// }



import React from "react";
import "./tabs.css";
import Todo from "./Todo/todo";
import Skills from "./Skills/skills";
import RatingValue from "../Rating/rating";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import DescriptionIcon from "@mui/icons-material/Description";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

// import Box from '@mui/material/Box';--
import TextField from '@mui/material/TextField';
import StarIcon from '@mui/icons-material/Star';

/*  Basic Information------*/
import InfoIcon from "@mui/icons-material/Info";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CheckIcon from '@mui/icons-material/Check';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import axios from "axios";


import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';








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



/* component starts--------*/

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [input, setInput] = React.useState('')
  const [date, setDate] = React.useState('')
  const [value1,setValue1] = React.useState(
    [
    {
    Input : 'This is the Workspace',
    Time : '12:50 AM'
  },
  {
    Input : 'This is the Workspace',
    Time : '12:50 AM'
  }

]
)

const [activeIndex, setActiveIndex] = React.useState(null); // // Edit mode flag

const handleEdit = (index) => {
  setActiveIndex(index); // Enable edit mode
};

const handleInputChange = (index, e) => {
  const updatedValue1 = [...value1];
  updatedValue1[index].Input = e.target.value;
  setValue1(updatedValue1);
};

const handleTimeChange = (index, e) => {
  const updatedValue1 = [...value1];
  updatedValue1[index].Time = e.target.value;
  setValue1(updatedValue1);
};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const onSubmitForm = () => {


    console.log('input===>>>>', input)


    const getDate = date;
    const hour = getDate.$H
    const minutes = getDate.$m

    let period;
    if (hour < 12) {
      period = "AM";
    } else {
      period = "PM";
    }

    const findDate = getDate.$d;
    // console.log('findDate===>>>>',findDate)

    // const date = findDate.getDate(); // Get the date value (24)
    // const month = findDate.getMonth() + 1; // Get the month value (May is represented as 4, so add 1 to get 5)
    // const year = findDate.getFullYear();

    // console.log('hour===>>>>',hour)
    // console.log('minutes===>>>>',minutes)
    // console.log('period===>>>>',period)

    const data = {
      task: input,
      hours: hour,
      minutes: minutes,
      period: period,
      findDate: findDate,

    }
  
    axios.post('http://89.116.30.81:8000/comment/insert/',{data})
    .then((response) => {
      console.log('resss',response);
    })
    .catch(err=>console.log('err',err))

    console.log('data===>>>>', data)
    // console.log('year===>>>>',year)

  }






  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="  icon position tabs example scrollable auto"
        >
          <Tab
            icon={<DescriptionIcon />}
            iconPosition="start"
            label="Basic Information"
            {...a11yProps(0)}
          />
          <Tab
            icon={<KeyboardDoubleArrowUpIcon />}
            iconPosition="start"
            label="Skills"
            {...a11yProps(1)}
          />
          <Tab
            icon={<PersonPinIcon />}
            iconPosition="start"
            label="Employment History"
            {...a11yProps(2)}
          />
          <Tab
            icon={<PersonPinIcon />}
            iconPosition="start"
            label="Portfolio"
            {...a11yProps(3)}
          />
          <Tab
            icon={<PersonPinIcon />}
            iconPosition="start"
            label="Education"
            {...a11yProps(4)}
          />
          <Tab
            icon={<QueryBuilderIcon />}
            iconPosition="start"
            label="Work History"
            {...a11yProps(5)}
          />
          <Tab
            icon={<ListAltIcon />}
            iconPosition="start"
            label="Todo List"
            {...a11yProps(6)}
          />
        </Tabs>
      </Box>
      <TabPanel sx={{ fontSize: "30px" }} value={value} index={0}>
        <section className="basic-information-section">
          <div className="overview-section">
            <div className="d-flex heading justify-content-between">
              <div className="">
                <b>Additional overview</b>
              </div>
              <div>
                <a href="#">
                  info <InfoIcon />
                </a>
              </div>
            </div>
            <div className="overview-content content">
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-6">Team members</div>
                    <div className="col-md-6">{""}</div>
                    <div className="col-md-6">Background</div>
                    <div className="col-md-6">{"Not "}</div>
                    <div className="col-md-6">Demand Salary</div>
                    <div className="col-md-6">{"$3000-$4000"}</div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6 link-color">Links</div>
                    <div className="col-md-6"></div>
                    <div className="col-md-6">On-Required</div>
                    <div className="col-md-6">{"On site required"}</div>
                    <div className="col-md-6">Remote Frienfdly</div>
                    <div className="col-md-6">{"Available"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post-interview-section">
            <div className="d-flex heading justify-content-between">
              <div className="">
                <b>Post Interview skill Assessment</b>
              </div>
              <div>
                <a href="#">View Full Feedback</a>
              </div>
            </div>
            <div className="post-interview-content content">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4">Responsive web Design</div>
                    <div className="col-md-8 d-flex">
                      <RatingValue rating={5} />({5} out of 5)
                    </div>
                    <div className="col-md-4">Corporate Brand Identity</div>
                    <div className="col-md-8 d-flex">
                      <RatingValue rating={2.5} />({2.5} out of 5)
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-5">User Interface Design</div>
                    <div className="col-md-7 d-flex">
                      <RatingValue rating={3} />({3} out of 5)
                    </div>
                    <div className="col-md-5">Label and Package Design</div>
                    <div className="col-md-7 d-flex">
                      <RatingValue rating={4.5} />({4.5} out of 5)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="attachments-documents-section">
            <div className="d-flex heading justify-content-between">
              <div className="">
                <b>Attachments Documents</b>({3} in total)
              </div>
              <div>
                <a href="#">View All</a>
              </div>
            </div>
            <div className="attachments-documents-content content">
              <div className="row">
                <div className="col-md-6">
                  <a href="#">
                    <PictureAsPdfIcon />
                    {"kjkfj"}
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="#">
                    <PictureAsPdfIcon />
                    {"vkfdjvkjdk"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Employment History
      </TabPanel>
      <TabPanel value={value} index={3}>
        Portfolio
      </TabPanel>
      <TabPanel value={value} index={4}>
        Education
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box
          component="form"
          sx={{
            // '& .MuiTextField-root': { m: 1, width: '25ch' },
            backgroundColor:'#eaf0f7',
            height:'100vh'  
          }}
          noValidate
          autoComplete="off"
        >
          {/* <div>
        
       
        <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          placeholder="welcome"
          multiline
          rows={4}
          // defaultValue="Default Value"
        />
      </div> */}  

          <Box sx={{backgroundColor:'#eaf0f7' ,padding:'2%'}}>

            {/* sx={{backgroundColor:'#a18aff'}} */}

            <Box sx={{ marginLeft: '12%' , marginTop:'2%' }}>

              <Typography variant="h4" gutterBottom>
                Today main focus
              </Typography>

              <Typography variant="h3" gutterBottom>
                Design Team Meeting
              </Typography>

            </Box>




            <Box sx={{  marginTop:'2%' }}>

              <FormControl sx={{ m: 1, width: '80%', marginLeft: '12%' }}  >
                {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                <OutlinedInput
                  onChange={e => setInput(e.target.value)}
                  placeholder='Design Team Meeting '
                  // id="outlined-adornment-password"
                  type='text'
                  sx={{border: 'none', borderRadius: 3 , backgroundColor:'white'}}
                  startAdornment={<InputAdornment position="start"><StarIcon sx={{color:'red'}}/></InputAdornment>}
                  endAdornment={
                    <InputAdornment position="end">




                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                          <TimePicker label=" " onChange={e => setDate(e)} sx={{ "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" } }} />
                        </DemoContainer>
                      </LocalizationProvider>




                      <CheckIcon sx={{cursor:'pointer',marginLeft:'10px',marginTop:'5px'}} onClick={onSubmitForm} />

                    </InputAdornment>
                  }
                // label="Password"
                />

              </FormControl>
            </Box>


            <Box>
      {value1.map((item, index) => (
        <Box key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center',  m: 2, width: '80%', marginLeft: '12%',
           backgroundColor: 'white',borderRadius: 3 , }}>
          <TextField
              disabled={activeIndex !== index} // Disable TextField if not active
              value={item.Input}
              sx={{padding:'15px', "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" } }}
              onChange={(e) => handleInputChange(index, e)}
            />

          <TextField
              disabled={activeIndex !== index} // Disable TextField if not active
              value={item.Time}
              sx={{ "& label": { color: "secondary.main" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" },marginLeft:43,width:'130px' }}
              onChange={(e) => handleTimeChange(index, e)}
            />

            <Box sx={{}}>

{activeIndex === index ? (
              <CheckIcon onClick={() => setActiveIndex(null)}/>
                
            ) : (
              <ModeEditOutlineIcon onClick={() => handleEdit(index)} />
               
              )}

</Box>
          </Box>
        </Box>
      ))}
    </Box>
          
          </Box>

        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Todo />
      </TabPanel>
    </Box>
  );
}