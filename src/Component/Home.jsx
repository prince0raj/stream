import React from 'react'
// import db from '../firebase';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import { useEffect } from 'react';
import Viewers from './Viewers';
import Data from '../Data';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movies/movieSlice';
const Home = () => {
  // console.log(Data);
   const dispatch=useDispatch();

   useEffect(()=>{
    dispatch(setMovies(Data));
   },[])

  return (
     <Conatiner>
         <ImageSlider/>
         <Viewers/>
         <Movies/>
     </Conatiner>
  )
}

export default Home;

/// Here Manin use to say the google that this Cosnt = Conatainer is the Main content
const Conatiner=styled.main`  
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
overflow-x: hidden;
  &:before{
    content:"";
    background:url('/images/home-background.png') center center / cover no-repeat fixed;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
  }
`