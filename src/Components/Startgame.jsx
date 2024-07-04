import React from 'react'
import styled from 'styled-components'

const Startgame = ({toggle}) => {
  return (
 <Container>
    <div>
    <img src="/images/dices.png" alt="" />
    </div>
    <div className='content'>
    <h1>DICE GAME</h1>
    <Button
    onClick={toggle}
    >Play Now</Button>
    </div>
 </Container>
  )
}

export default Startgame
const Container = styled.div`
    max-width:1100px;
    margin:0 auto;
    display:flex;
    height:100vh;
    align-items:center;
    .content{
        h1{
            font-size:92px;
            white-space:nowrap;

        }
    }
`;
const Button=styled.button`
    color:white;
    background-color:black;
    padding:10px 18px;
    border-radius:5px;
    border:none;
    min-width:220px;
    font-size:16px;
    border:1px solid transparent;
    transition:0.4s background ease-in;
    &:hover{
        background-color:white;
        color:black;
        border:1px solid black;
        transition:0.3s background ease-in;
        cursor: pointer;
}
`;

