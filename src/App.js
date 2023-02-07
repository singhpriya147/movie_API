import React, { useEffect, useState } from 'react';
import Container from './Container'
import TextField from '@mui/material/TextField';
import "./App.css"
import Button from '@mui/material/Button';


// import Header from './Header'

function App() {
  const [endPoint, setendPoint] = useState('');
  const [container, setContainer] = useState([]);

    useEffect(() => {
      start();
    },[]);
  useEffect(() => {
    fetchMe();
  }, [endPoint]);


  
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const start=()=>{
    // <div>
    //   <img
    //     src='https://i0.wp.com/ravemotionpictures.com/wp-content/uploads/2022/03/Best-Movies-on-Netflix.jpg?w=1512&ssl=1'
    //     alt=''
    //   />
    // </div>;
  }

  const fetchMe = () => {
    // const options = {
    // method: 'GET',
    // headers: {
    //   'X-RapidAPI-Key': 'f5b4b2fdc1msh59e789a8ca58fadp1d4b10jsn50ec87355c08',
    //   'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    // },

    // };

    // fetch(
    //   `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`,
    //   options
    // )
    //   .then((response) => response.json())
    //   // .then((response) => console.log(response))
    //   .then((data) => setContainer(data.d))
    //   .catch((err) => console.error(err));

    fetch(`http://api.tvmaze.com/search/shows?q=${endPoint}`)
    // fetch(
    //   `https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test`
    // )
      .then((response) => response.json())
      .then((data) => setContainer(data));
  };

  

  return (
    <div className='main'>
      <div className='bg-img'>

      </div>
      <div className='form-cnt'>
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
      {/* {Container.map((item) => {
        return (
          <div>
            <img src={item.i.imageUrl} alt='' />
            <p>{item.l}</p>
          </div>
        );

      })}  */}
      {/* 
      <section >
        {endPoint.length > 0 ? (
          <div className='goals'>
          
              <Container container={container} />
             
            
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section> */}

      <div>
        <Container container={container} />
      </div>
    </div>
  );
}

export default App;
