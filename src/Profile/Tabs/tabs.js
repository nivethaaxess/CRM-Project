
import React, { useEffect } from "react";
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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Textarea from '@mui/joy/Textarea';

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

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



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
  const [task, setTask] = React.useState('')
  const [date, setDate] = React.useState('');
  const [commandGet, setcommandGet] = React.useState([]);

  const [taskReset, settaskRest] = React.useState('');
  const [timeReset, settimeReset] = React.useState(null);

  const [value1, setValue1] = React.useState(
    [
      {
        id: '1',
        Input: 'This is the Workspace',
        Time: '12:50 AM'
      },
      {
        id: '2',
        Input: 'This is the Workspace',
        Time: '12:50 AM'
      }

    ]
  )

  const [activeIndex, setActiveIndex] = React.useState(null); // // Edit mode flag

  const textareaStyle = {
    '&:focus': {
      backgroundColor: 'yellow',
    },
  };

  const handleEdit = (index) => {
    setActiveIndex(index); // Enable edit mode
  };

  const data = [
    { id: 1, name: 'Object 1', value: 10 },
    { id: 2, name: 'Object 2', value: 20 }
  ];

  const resetVal = (id) => {

    const foundObject = commandGet.find(obj => obj.id === id);
    console.log('foundObject:', foundObject);
    console.log('foundObject.time:', foundObject.time);
    console.log('timeReset:',typeof timeReset);
     let time = ''

    if (foundObject.time == timeReset || timeReset == null) {
       time = foundObject.time;
      console.log('Time:', time);
    } else {
      time = timeReset
      console.log('Object not found with the specified ID');
    }



    setActiveIndex(null)
    console.log('ID===>>>>', id)
    // console.log('commandGet===>>>', commandGet)
    const data = {
      task : taskReset ,
      time : time
    }
    

    console.log('data===>>>',data)
    axios.put(`http://89.116.30.81:8000/comment/update/${id}/`,data).then((RES1) => {
      console.log('RES1', RES1)
    }).catch(err => console.log('ERR_++>>', err))
  }

  const handleInputChange = (index, e) => {
    e.preventDefault();
    const updatedValue1 = [...commandGet];
    updatedValue1[index].task = e.target.value;
    setcommandGet(updatedValue1);
    settaskRest(e.target.value)
  };

  const handleTimeChange = (index, e) => {
    e.preventDefault();
    const updatedValue1 = [...commandGet];
    updatedValue1[index].time = e.target.value;
    setcommandGet(updatedValue1);
    settimeReset(e.target.value);
   console.log('e.target.value===>>>',e.target.value)
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const onSubmitForm = (e) => {

    e.preventDefault()
  
    console.log('task===>>>>', task)


    const getDate = date;
    const hours = getDate.$H
    const minutes = getDate.$m

    let period;
    if (hours < 12) {
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
      task: task,
      hours: hours,
      minutes: minutes,
      period: period,
      // findDate: findDate,

    }

    axios.post('http://89.116.30.81:8000/comment/insert/', data)
      .then((response) => {
        console.log('resss', response);
      })
      .catch(err => console.log('err', err))

    console.log('data===>>>>', data)
    // console.log('year===>>>>',year)
    setTask('')
   setDate('');

  }


  useEffect(() => {
    axios.get('http://89.116.30.81:8000/comment/list/').then((RES) => {
      console.log('RESPONSE', RES);
      setcommandGet(RES.data)
      console.log('3333', commandGet)
    }).catch(err => console.log('ERROR222', err))
  }, []);

  const commetDelete = (id) =>{
    console.log('DELETE ID',id);
    axios.delete(`http://89.116.30.81:8000/comment/delete/${id}/`).then((val)=>{

      console.log('VAL',val)
    }).catch(err=>console.log('err==>>',err))
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
            backgroundColor: '#eaf0f7',
            height: '100vh'
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

          <Box sx={{ backgroundColor: '#eaf0f7', padding: '2%' }}>

           




            <Box sx={{ marginTop: '2%' }}>

              <FormControl sx={{  marginLeft: '7%',   backgroundColor: 'white' }}  >
                {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                <OutlinedInput
                   sx={{  backgroundColor: '#eaf0f7' }}
                  startAdornment={<Textarea onChange={e => setTask(e.target.value)}
                  value={task}
                  placeholder='Design Team Meeting '
                  style={textareaStyle}
                  id="outlined-adornment-password"
                  type='text'
                  disableUnderline={false}
                  sx={{ border: '2px solid white', marginLeft:'-11.7px',   backgroundColor: 'white' , width:'1000%', padding:'15px',   "& fieldset": { border: 'none' },}} size="md" name="Size"  position="start"/>}
                  endAdornment={
                    <InputAdornment sx={{   backgroundColor: 'white' }} position="end">




                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                          <TimePicker value={date} label=" " onChange={e => setDate(e)} sx={{ "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" },   backgroundColor: 'white'  }} />
                        </DemoContainer>
                      </LocalizationProvider>




                      <CheckIcon sx={{ cursor: 'pointer', marginLeft: '10px', marginTop: '5px' }} onClick={onSubmitForm} />

                    </InputAdornment>
                  }
                // label="Password"
                />

              </FormControl>
            </Box>


            {/* <Box>
              {commandGet?.map((item, index) => (
                <Box key={index}>
                  <Box sx={{
                    display: 'flex', alignItems: 'center', m: 3, width: '93%', marginLeft: '7%',
                    backgroundColor: 'white', borderRadius: 3, border: '2px solid black'
                  }}>
                    <TextField
                      disabled={activeIndex !== index} // Disable TextField if not active
                      value={item.task}
                      sx={{ padding: '15px', "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '90%' }}
                      onChange={(e) => handleInputChange(index, e)}
                    />

                    <TextField
                      disabled={activeIndex !== index} // Disable TextField if not active
                      value={item.time}
                      sx={{ "& label": { color: "secondary.main" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '20%' }}
                      onChange={(e) => handleTimeChange(index, e)}
                    />

                    <Box sx={{ width: '10%' }}>

                      {activeIndex === index ? (
                        // <CheckIcon onClick={() => setActiveIndex(null)}/>
                        <CheckIcon sx={{ cursor:'pointer'}} onClick={() => resetVal(item.id)} />

                      ) : (
                        <ModeEditOutlineIcon sx={{ cursor:'pointer'}} onClick={() => handleEdit(index, item.id)} />

                      )}
                       
                       <DeleteForeverIcon onClick={()=>commetDelete(item.id)} sx={{marginLeft:'10px',paddingRight:'5px',color:'red' , cursor:'pointer'}} />

                    </Box>
                  </Box>
                </Box>
              ))}
            </Box> */}

            {/* <Box>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
      
        <Grid item xs={6}>
          <Item>{commandGet?.map((item, index) => (
                <Box key={index}>
                  <Box sx={{
                    display: 'flex', alignItems: 'center', m: 3, width: '93%', marginLeft: '7%',
                    backgroundColor: 'white', borderRadius: 3, border: '2px solid black'
                  }}>
                    <TextField
                      disabled={activeIndex !== index} // Disable TextField if not active
                      value={item.task}
                      sx={{ padding: '15px', "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '90%' }}
                      onChange={(e) => handleInputChange(index, e)}
                    />

                    <TextField
                      disabled={activeIndex !== index} // Disable TextField if not active
                      value={item.time}
                      sx={{ "& label": { color: "secondary.main" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '20%' }}
                      onChange={(e) => handleTimeChange(index, e)}
                    />

                    <Box sx={{ width: '10%' }}>

                      {activeIndex === index ? (
                        // <CheckIcon onClick={() => setActiveIndex(null)}/>
                        <CheckIcon sx={{ cursor:'pointer'}} onClick={() => resetVal(item.id)} />

                      ) : (
                        <ModeEditOutlineIcon sx={{ cursor:'pointer'}} onClick={() => handleEdit(index, item.id)} />

                      )}
                       
                       <DeleteForeverIcon onClick={()=>commetDelete(item.id)} sx={{marginLeft:'10px',paddingRight:'5px',color:'red' , cursor:'pointer'}} />

                    </Box>
                  </Box>
                </Box>
              ))}</Item>
        </Grid>
        
      </Grid>
    </Box>
            </Box> */}

            <Box sx={{ marginTop:'45px',marginLeft:'30px'}}>
            <Grid  container spacing={3}>
        {commandGet.map((object,index) => (
          <Grid   item xs={6} key={object.id}>
            <Grid sx={{backgroundColor:'white',border:'1px solid black'}} container >
            <Grid   disabled={activeIndex !== index}  item xs={14}>
                <Box sx={{display:'flex',alignItems:'center' }}>
                  <Box>
                <TextField
                      disabled={activeIndex !== index} // Disable TextField if not active
                      value={object.time}
                      sx={{ padding: '15px', "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '90%' }}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    </Box>
                    <Box>

                    <Box sx={{ width: '10%',display:'flex'}}>

{activeIndex === index ? (
  // <CheckIcon onClick={() => setActiveIndex(null)}/>
  <CheckIcon sx={{ cursor:'pointer'}} onClick={() => resetVal(object.id)} />

) : (
  <ModeEditOutlineIcon sx={{ cursor:'pointer'}} onClick={() => handleEdit(index, object.id)} />

)}
 
 <DeleteForeverIcon onClick={()=>commetDelete(object.id)} sx={{marginLeft:'10px',paddingRight:'5px',color:'red' , cursor:'pointer'}} />

</Box>
                    </Box>
                    </Box>
              </Grid>
              <Grid  disabled={activeIndex !== index} item xs={12}>
              <TextField
                      disabled={activeIndex !== index} // Disable TextField if not active
                      value={object.task}
                      sx={{ padding: '15px', "& label": { color: "black" }, "& fieldset": { border: 'none' }, "&.MuiOutlinedInput-notchedOutline": { border: "none" }, width: '90%' }}
                      onChange={(e) => handleInputChange(index, e)}
                    />
              </Grid>
              
            </Grid>
            
          </Grid>
        ))}
      </Grid>
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