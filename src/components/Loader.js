import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';

const Loader = (value) => {
  //   const [progress, setProgress] = useState(10);
  return (
    <div>
      <CircularProgress value={value} />
    </div>
  );
};

export default Loader;
