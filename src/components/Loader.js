import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader = (value) => {
  //   const [progress, setProgress] = useState(10);
  return (
    <div>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
