import React from 'react'
import styled from 'styled-components'

const Loginpage = () => {
  return (
    <Conatiner>
       <Cta>
          <CtalogoOne src="./images/cta-logo-one.svg"/>
          <Signup>GET ALL TIME</Signup>
       <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem dolore nostrum, sapiente unde possimus, sapiente unde possimus, tempore officiis, vitae!
       </Desc>
       <CatlogoTwo src="./images/cta-logo-two.png"/>
       </Cta>
    </Conatiner>
  )
}

export default Loginpage

const Conatiner=styled.div`
display:flex;
align-items:top;
min-height: calc(100vh - 70px);
justify-content:center;
padding:0 calc(3.5vw + 5px);
  position:relative;
  &:before{
    content: "";
    position: absolute;
    background-image: url(./images/login-background.jpg);
    top: 0;
    left: 0;
    bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    right: 0;
    opacity:0.7;
    z-index:-1;
  }
`
const Cta=styled.div`
max-width:650px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
margin-top:100px;
align-items:center;
`
const CtalogoOne=styled.img`
`
const Signup=styled.a`
  width:100%;
  background-color:#0063e5;
  font-weight:bold;
  color:#f9f9f9;
  padding:17px 0;
  border-radius:4px;
  text-align:center;
  font-size:18px;
  letter-spacing:1.5px;
  margin-top:8px;
  margin-bottom:12px;
  cursor:pointer;
  transition:all 250ms;
  &:hover{
    background:#0483ee;
  }
`
const Desc=styled.p`
  font-size:11px;
  letter-spacing:1.5px;
  text-align:center;
  line-height: 1.5;
  margin:4px 0;
`
const CatlogoTwo=styled.img` 
 width:90%;

`