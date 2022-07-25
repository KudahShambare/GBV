import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularLoader() {
  return (
    <Box style={{  textAlign:"center"}}>
      <CircularProgress />
    </Box>
  );
}
export default CircularLoader;