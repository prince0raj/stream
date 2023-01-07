import React from 'react'
import styled from 'styled-components';
import poster from '../accests/movies/deadpool-2-banner.jpeg'
import logo from '../accests/movies/deadpool-logo.png'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Data from '../Data';
const Detail = () => {
  const {id} =useParams();
  console.log(id);
  return (
    <Container>
        <Background>
            <img src={Data[id-1].poster} alt="" />
        </Background>
        {/* <ImageTittle>
            <img src={logo} alt="" />
        </ImageTittle> */}
        <Butbox>
        <Control>
            <PlayButton>
               <img src="/images/play-icon-black.png" alt="" />
               <span>PLAY</span>
            </PlayButton>
            <Trailler>
            <img src="/images/play-icon-white.png" alt="" />
               <span>Trailer</span>
            </Trailler>
            <Add>
             <span>+</span>
            </Add>
            <Group>
               <img src="/images/group-icon.png" alt="" />
            </Group>
        </Control>
        <Subtittle>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut illum doloribus!
        </Subtittle>
        <Desc>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quia? Rerum maiores velit ratione ipsa nesciunt ipsum aperiam aliquid porro error voluptatum. Eaque, consequuntur!
        </Desc>
        </Butbox>

    </Container>
  )
}

export default Detail;

const Butbox=styled.div`
transform: translateY(90%);
`
const Container=styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
`
const Background=styled.div`
   position:fixed;
   top:60px;
   left:0;
   right:0;
   bottom:0;
   z-index:-1;
   opacity:0.8;
   img{
    width:100%;
    height:100%;
    // object-fit:cover;
   }
`
const ImageTittle=styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-top:60px;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`
const Control=styled.div`
 display:flex;
 align-items:center;
 
`
const PlayButton=styled.button`
  border-radius:4px;
  font-size:13px;
  padding:0px 24px;
  display:flex;
  align-items:center;
  height:56px;
  background:rgb(249, 249, 249);
  border:none;
  margin-right:22px;
  letter-spacing:1.8px;
  cursor:pointer;
  &:hover{
    background:rgb(190, 190, 190);
  }
`
const Trailler=styled(PlayButton)`
border:1px solid  rgb(249, 249, 249);
text-transform:uppercase;
color:rgb(249, 249, 249);
background:rgb(0 0 0 / 0.3);
`
const Add=styled.button`
  margin-right:16px;
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  border:2px solid  rgb(249, 249, 249);
  background-color:rgb(0 0 0 / 0.6);
  cursor:pointer;
  span{
    font-size:30px;
    color:white;
  }
`
const Group=styled(Add)`
background-color:rgb(0 0 0);
`

const Subtittle=styled.p`
font-size:15px;
color:rgb(249, 249, 249);
min-height:20px;
margin-top:26px;
`
const Desc=styled.p`
line-height:1.4;
font-size:16px;
margin-top:16px;
color:rgb(249, 249, 249);
max-width:760px;
`