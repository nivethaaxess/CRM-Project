import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props) {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Read only</Typography> */}
      <Rating name="read-only" value={parseInt(props.rating)} precision={0.5} readOnly />
    </Box>
  );
}