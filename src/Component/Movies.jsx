import React from 'react'
import styled from 'styled-components'
import Data from '../Data'
const Movies = () => {
  return (
    <Container>
        <h4>
            Recommended for You
        </h4>
        <Content>
        {Data.map((data)=>(
        <Wrap key={data.id}>
            <img src={data.poster} alt="" />
        </Wrap>
        ))}
        </Content>
    </Container>
  )
}

export default Movies

const Container=styled.div`
  
`
const Content=styled.div`
  display:grid;
  grid-gap:25px;
  margin:10px 0;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
border: 3px solid rgb(249 249 249 / 10%);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor:pointer;
  img{
    width:100%;
    height:100%;
    object-position:center;
  }
  &:hover{
    transform:scale(1.05);
    border-color: rgb(249 249 249 / 80%);
  }
`