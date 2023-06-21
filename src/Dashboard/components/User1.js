import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, FormControl, Select, MenuItem } from '@mui/material';
import '../design.css';
import Navbar from './Navbar';
import Menu from './Menu';
import axios from 'axios';

const User1 = () => {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedOption, setSelectedOption] = useState('QA');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setPage(0); // Reset page when search text changes
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [api,setApi]= useState([]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page when rows per page changes
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
     
  };
  useEffect(()=>{
    axios.get('http://89.116.30.81:8000/qa/')
     .then(response=>{
      console.log(response.data)
      setApi(response.data)
     })
     .catch(error=>{
      console.log(error)
     })

  },[selectedOption])

  let qaColumns =[]
  if(api.length>0){
    console.log(api)
   qaColumns = Object.keys(api[0]).map((a)=> {
    return {field:a}
  })
         console.log(qaColumns)
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

  const enquiryColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'subject', headerName: 'Subject', width: 200 },
    { field: 'message', headerName: 'Message', width: 400 },
    { field: 'status', headerName: 'Status', width: 120 },
  ];

  const qaRows = api;
  // const qaRows = 
  // [
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

  const enquiryRows = [
    { id: 1, subject: 'Question 1', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
    { id: 2, subject: 'Question 2', message: 'Lorem ipsum dolor sit amet.', status: 'Closed' },
    { id: 3, subject: 'Question 3', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
    { id: 4, subject: 'Question 4', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
    { id: 5, subject: 'Question 5', message: 'Lorem ipsum dolor sit amet.', status: 'Closed' },
    { id: 6, subject: 'Question 6', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
    { id: 7, subject: 'Question 7', message: 'Lorem ipsum dolor sit amet.', status: 'Closed' },
    { id: 8, subject: 'Question 8', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
    { id: 9, subject: 'Question 9', message: 'Lorem ipsum dolor sit amet.', status: 'Open' },
  ];

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

  return (
    <div>
    <TextField
      sx={{ marginTop: 3, marginLeft: 4, width:350}}
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
   
       <FormControl sx={{ mt:3, minWidth: 120,marginLeft:60 }}size='small'>       
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
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {qaColumns.map((column) => (
                  <TableCell key={column.field}>{column.field}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  {qaColumns.map((column) => (
                    <TableCell key={column.field}>{row[column.field]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    ) : (
      <div style={{ height: 400, width: '100%', marginTop: 20, marginLeft: 30 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {enquiryColumns.map((column) => (
                  <TableCell key={column.field}>{column.headerName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
            {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  {enquiryColumns.map((column) => (
                    <TableCell key={column.field}>{row[column.field]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    )}


    
    </div>

  );
};

export default User1;