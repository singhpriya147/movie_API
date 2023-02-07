import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
function Header() {
  const [endPoint, setendPoint] = useState('');





  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className='search'>
        <form onSubmit={submitHandler} className='form'>
          <input
            type='text'
            placeholder='search...'
            value={endPoint}
            onChange={(e) => setendPoint(e.target.value)}
          />
          <Button
            variant='contained'
            type='submit'
            sx={{ backgroundColor: '#561B77' }}
          >
            Submit
          </Button>
        </form>
      </div>
      <div className='title'>
        <h2>Search you Favorite TV shows</h2>
        <div className='underline'></div>
      </div>
    </div>
  );
}

export default Header