import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, FormControl, Select, MenuItem, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, InputLabel } from '@mui/material';
import Navbar from "../Dashboard/components/Navbar";
import Menu from "../Dashboard/components/Menu";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Popover } from '@mui/material';
import Button from '@mui/material/Button';
import '../Dashboard/design.css';
import { DataGrid } from '@mui/x-data-grid';
import DangerousRoundedIcon from '@mui/icons-material/DangerousRounded';
import './style.css';



// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';








const User1 = ({ rows, columns }) => {


  // const gridRef = useRef(null);

  // const scrollToBottom = () => {
  //   const gridApi = gridRef.current.api;
  //   const rowCount = gridApi.getRowsCount();
  //   const lastRowIndex = rowCount - 1;
  //   gridApi.scrollToIndexes({ rowIndex: lastRowIndex });
  // }

  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  // }));

  // const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  //   // hide last border
  //   '&:last-child td, &:last-child th': {
  //     border: 0,
  //   },
  // }));

  const useStyles = makeStyles((theme) => ({
    tableContainer: {
      maxHeight: '120%',    // Set the maximum height for the table container
      maxWidth: '950px',      // Set the maximum width for the table container
      // Enable vertical scrolling if the table overflows
      overflow: 'auto',

    },

   
    textField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '5px', // Set border radius
      },
    },
    blackrow: {
      backgroundColor: '#000000',
      colmor: '#ffffff',
    },
    whiterows: {
      backgroundColor: '#ffffff',
      colmor: '#000000',
    },
    hoverRow: {
      '&:hover': {
        backgroundColor: 'lightblue',
        // transition: 'background-Color 0.5s ease',

      },
      roundedElement: {
        borderRadius: '8px', // Set the desired radius value
      },

      coloredDialogContent: {
        backgroundColor: 'lightblue', // Set your desired background color
        color: 'white', // Set the text color
        // Add any other custom styles as needed
      },
    },
  }))


  
  

  const tablestyle =
  {
    fontSize: 12,
    fontfamily: 'Helvetica Neue',
    fontWeight: 'bold',
    color: '#000000',
  }

  const buttonstyle = {
    backgroundColor: '#c6e5fa',
  }

  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedOption, setSelectedOption] = useState('QA');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [open1, setOpen] = React.useState(false);
  const [getdata, setData] = React.useState(false);
  const [api, setApi] = useState([]);
  const [getapi, showApi] = useState([{ key1: "value1", key2: "value2" }]);
  const [enapi, setEnapi] = useState([]);
  const [getEnapi, showEnapi] = useState([{ key1: "value1", key2: "value2" }])
  const [inputValues, setInputValues] = useState([]);
  const [getedit, setEdit] = useState(true);
  const [editRow, setEditRow] = useState()
  const [geteditRow, seteditRow] = useState()
  const [getrefresh, setrefresh] = useState();
  const [getskills, setskills] = React.useState('');

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const fullScreens = useMediaQuery(theme.breakpoints.down('md'));


  // const handleInputChange = (key, value) => {
  //   setInputValues((prevInputValues) => ({
  //     ...prevInputValues,
  //     [key]: value,
  //   }));
  // };

   const handleskillsChange = (event)=>{
      setskills(event.target.value)
   }

  const handleClickOpen = (id) => {
    setEditRow(id)
    setOpen(true);
    axios.get(`http://89.116.30.81:8000/qa/${id}/`)
      .then(response => {
        console.log('res1', response.data);
        showApi([response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleOpen = (id) => {
    seteditRow(id)
    setData(true);
    axios.get(`http://89.116.30.81:8000/enquiry/${id}/`)
      .then(response => {
        console.log('ress', response.data);
        showEnapi([response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };


  const handleClose1 = () => {
    setOpen(false);
  };

  const handleCloseClick1 = () => {
    setData(false);
  }

  const handleChangePage1 = () => {

    setInputValues()
  }



  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setPage(0); // Reset page when search text changes
  };




  // const open = Boolean(anchorEl);
  // const id = open ? 'mouse-over-popover' : undefined;




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page when rows per page changes
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = (event) => {
    console.log('check====>>>>', event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseClick = () => {
    setAnchorE2(null);
  }

  const handleInputChange = (e, key, ID) => {
    // console.log('handleInputChange', .join(''))
    const newValue = e.target.value;
    showApi((prevGetApi) => {
      const updatedApi = [...prevGetApi];
      updatedApi[0][key] = newValue;
      return updatedApi;
    });
  };

  const handleInputOnChange = (e, key, ID) => {
    const newValue = e.target.value;
    showEnapi((prevGetApi) => {
      const updateApi = [...prevGetApi];
      updateApi[0][key] = newValue;
      return updateApi;
    });
  }



  const handleEditClick = (e) => {
    // console.log('handleEditClick',e);
    setEdit(!getedit);
    // {console.log('id3',id)}
    console.log('api1', `http://89.116.30.81:8000/qa/${editRow}/`, getapi[0])
    axios.put(`http://89.116.30.81:8000/qa/${editRow}/`, getapi[0])
      .then(response => {
        console.log('success', response.data);
        setrefresh(response.data);

      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleEditOnClick = () => {
    setEdit(!getedit);
    axios.put(`http://89.116.30.81:8000/enquiry/${geteditRow}/`, getEnapi[0])
      .then(response => {
        console.log('success1', response.data);

      })



  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;






  // const handleOptionChange = (event) => 

  useEffect(() => {
    axios.get('http://89.116.30.81:8000/qa/')
      .then(response => {
        // console.log(response.data)
        setApi(response.data)
      })
      .catch(error => {
        console.log(error)
      })

  }, [selectedOption, getrefresh])

  useEffect(() => {
    axios.get('http://89.116.30.81:8000/enquiry/')
      .then(response => {
        console.log('res2', response.data);
        setEnapi(response.data);
      })
      .catch(error => {
        console.log(error);
      })

  }, [selectedOption])








  // useEffect(() => {
  //   axios.get(`http://89.116.30.81:8000/qa/${getId}/`)
  //     .then(response => {
  //       console.log('res1', response.data)
  //       showApi([response.data]);

  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  let qaColumns = [];

  if (api.length > 0) {
    console.log(api);
    qaColumns = Object.keys(api[0]).map((a) => {
      return { field: a };
    });
    console.log(qaColumns);
  }

  let enquiryColumns = [];

  if (enapi.length > 0) {
    console.log('kkk', enapi);
    enquiryColumns = Object.keys(enapi[0]).map((b) => {
      return { field: b };
    });
    // console.log(enquiryColumns);
  }




  // const qaColumns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  //   { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  // ];

  // const enquiryColumns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'subject', headerName: 'Subject', width: 200 },
  //   { field: 'message', headerName: 'Message', width: 400 },
  //   { field: 'status', headerName: 'Status', width: 120 },
  // ];

  const qaRows = api;

  // const qaRows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 34 },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  const enquiryRows = enapi;

  // const enquiryRows = [
  //   { id: 1, subject: 'Question 1', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
  //   { id: 2, subject: 'Question 2', message: 'Lorem ipsum dolor sit amet.', status: 'Closed' },
  //   { id: 3, subject: 'Question 3', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
  //   { id: 4, subject: 'Question 4', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
  //   { id: 5, subject: 'Question 5', message: 'Lorem ipsum dolor sit amet.', status: 'Closed' },
  //   { id: 6, subject: 'Question 6', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
  //   { id: 7, subject: 'Question 7', message: 'Lorem ipsum dolor sit amet.', status: 'Closed' },
  //   { id: 8, subject: 'Question 8', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
  //   { id: 9, subject: 'Question 9', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
  // ];

  const filteredRows = selectedOption === 'QA' ? qaRows : enquiryRows;

  // Filter the rows based on the search text
  const filteredAndSearchedRows = filteredRows.filter((row) =>
    Object.values(row).some((value) =>
      value && value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = filteredAndSearchedRows.slice(startIndex, endIndex);

  const check = () => {
    console.log('Checking')
  }



  return (
    <Box>

      <Box>
        <Navbar />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Menu />
        </Box>
        <Box>

          <TextField
            sx={{ marginTop: 3, marginLeft: 4, width: 350 }}
            label="Search"
            variant="outlined"
            size="small"
            placeholder="Search anything"
            value={searchText}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <FormControl sx={{ mt: 3, minWidth: 120, marginLeft: 60 }} size='small'>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <MenuItem value="QA">QA</MenuItem>
              <MenuItem value="Enquiry">Enquiry</MenuItem>
            </Select>
          </FormControl>
          {selectedOption === 'QA' ? (
            <div style={{ height: 400, width: '100%', marginTop: 20, marginLeft: 30 }}>
              <TableContainer className={classes.tableContainer}>
                <Table >
                  <TableHead className='drop'>
                    <TableRow className='down'>
                      {qaColumns.map((column, index) => (
                        <TableCell key={column.field} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', color: '#000000' }}>
                          {column.field}
                          {/* {index=== qaColumns.length-1 &&(
                        <IconButton>
                          <CallToAction/>
                        </IconButton> 
                      )} */}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedRows.map((row, index) => (
                      <TableRow
                        onClick={() => handleClickOpen(row.id)}

                        key={row.id}


                        // aria-describedby={id}
                        className={`${classes.hoverRow} ${index === 0 ? classes.firstRow : ''}`}>
                        {console.log('row', row.id)}
                        {/* <Button aria-describedby={id} variant="contained"  onMouseEnter={handleClick}>
                          Open Popover
                        </Button> */}
                        {/* <Typography>  
                          Hover with a Popover.
                        </Typography> */}


                        {qaColumns.map((column) => (
                          <TableCell key={column.field}>{row[column.field]}</TableCell>
                        ))}
                      </TableRow>

                    ))}


                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </div>
          ) : (
            <div style={{ height: 400, width: '100%', marginTop: 20, marginLeft: 30 }}>
              <TableContainer className={classes.tableContainer}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {enquiryColumns.map((column) => (
                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', color: '#000000' }} key={column.field}>{column.field}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedRows.map((row1, index) => (
                      <TableRow onClick={() => handleOpen(row1.id)}

                        key={row1.id}


                        // aria-describedby={id}
                        className={`${classes.hoverRow} ${index === 0 ? classes.firstRow : ''}`}>
                        {console.log('row', row1.id)}

                        {enquiryColumns.map((column) => (

                          <TableCell key={column.field}>{row1[column.field]}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </div>
          )}
        </Box>
      </Box>

      <div className='row justify-content-around '>
        <div className='col-6 '>
          <div className='col-3'>
            <Dialog
              fullScreen={fullScreen}
              open={open1}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title" className='d-flex justify-content-between design'>
                {"Form"}   <Button sx={{ color: 'black' }} autoFocus onClick={handleClose1}>
                  <DangerousRoundedIcon />
                </Button>
              </DialogTitle>

              <DialogContent className='abd'>
                <DialogContentText >
                  <div className='d-flex flex-wrap'>
                    {getapi.length > 0 &&
                      Object.keys(getapi[0]).map((b) => {
                        if (b === 'id') {
                          return

                        }
                        if (b === 'Skills')
                        { 
                          return(
                            <FormControl sx={{ mt: 2.3, ml:3, minWidth: 230 }} size="small" >
                            <InputLabel  id="demo-select-small-label">Skills</InputLabel>
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              value={getskills}
                              label="Skills"
                              disabled={getedit}
                              onChange={handleskillsChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>React</MenuItem>
                              <MenuItem value={20}>python</MenuItem>
                              <MenuItem value={30}>Html</MenuItem>
                            </Select>
                          </FormControl>
                          )
                        }
                        // if (b === 'Name')
                        // {
                        //    return(
                        //     <TextField id="filled-basic" label={b} variant="filled" />
                        //    )

                        // }
                        const value = getapi[0][b];
                        { console.log('value====>>>>>>>', getapi.map(a => a.id)) }
                        const ID = getapi.map(a => a.id);
                        { console.log('getapi====>>>>>>>', ID) }
                        return (
                          <div className='col-6 text-center p-1' >
                            <TextField className={classes.textField}  sx={{ mt: 2, border:'none' }} id="outlined-basic"
                              onChange={(e) => handleInputChange(e, b, ID)}
                              label={b}
                              disabled={getedit}
                              size="small"
                              variant='outlined'/>
                          </div>
                        );
                      })}

                  </div>
                </DialogContentText>
              </DialogContent>


              <DialogActions className='abd' >
                {getedit ?
                  <button className="btn btn-primary" onClick={() => setEdit(!getedit)}>Edit</button> :
                  <button className="btn btn-success" onClick={() => handleEditClick(id)}>Update</button>

                }

                <button className='btn btn-danger'>
                  Delete
                </button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>

      <Dialog
        fullScreen={fullScreens}
        open={getdata}
        onClose={handleCloseClick}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Form"}   <Button sx={{ ml: 16 }} autoFocus onClick={handleCloseClick1}>
            <DangerousRoundedIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <table>
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>BODY</th>
                </tr>
              </thead>
              <tbody>
                {getEnapi.length > 0 &&
                  Object.keys(getEnapi[0]).map((b) => {
                    const value = getEnapi[0][b];
                    { console.log('value====>>>>>>>', getEnapi.map(a => a.id)) }
                    const ID = getEnapi.map(a => a.id);
                    { console.log('getapi====>>>>>>>', ID) }
                    return (
                      <tr key={b}>
                        <td>{b}</td>
                        <td>
                          <input
                            type="text"
                            value={value || ""}
                            disabled={getedit}
                            onChange={(e) => handleInputOnChange(e, b, ID)}
                          />
                        </td>
                      </tr>

                    );
                  })}

              </tbody>
            </table>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          {getedit ?
            <Button onClick={() => setEdit(!getedit)}>Edit</Button> :
            <Button onClick={() => handleEditOnClick(id)}>Update</Button>
          }
        </DialogActions>
      </Dialog>
    </Box >
    // </Box>
  );
};

export default User1;