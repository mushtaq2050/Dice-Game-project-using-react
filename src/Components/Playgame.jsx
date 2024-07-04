import React from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import Roledice from './Roledice'
import { useState } from 'react'

const Playgame = () => {
  const [selectednumber, setselectednumber] = useState()
  const [current, setcurrent] = useState(1)
  const [score, setscore] = useState(0)
  const [eror, seteror] = useState("")
  const resetgame=()=>{
    setscore(0)
  }
  const randomnumber=(min,max)=>{
    return (Math.floor(Math.random() * (max - min) + min))
 };
 const currentroledice=()=>{
  if(!selectednumber){
      seteror("please first select number") 
    return
  }
  seteror('')
    const Randomnumber=randomnumber(1,7);
    console.log(Randomnumber)
    setcurrent((prev) => Randomnumber)
    if(selectednumber === Randomnumber){
  setscore((prev)=>prev+Randomnumber)
    }
    else{
      setscore((prev ) => prev-2)
    }
    setselectednumber(undefined)
 }
  return (
    <Maincontainer>
    <div className='top-section'>
  <Totalscore score={score}/>
  <Numberselector selectednumber={selectednumber} setselectednumber={setselectednumber} eror={eror} seteror={seteror} />
    </div>
    <Roledice current={current} currentroledice={currentroledice} />
    <div className='btn'>
      <button onClick={resetgame} className='btn1'>Reset Score</button>
      {/* <button className='btn2'>Show role</button> */}
    </div>
    </Maincontainer>
  )
}

export default Playgame
const Maincontainer=styled.main`
padding-top: 70px;
.top-section{
display:flex;
justify-content:space-around;
align-items:end;
}
.btn{
  margin-top:5px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 10px;
}
.btn1{
  color:white;
    background-color:black;
    padding:10px 18px;
    border-radius:5px;
    border:none;
    min-width:220px;
    font-size:16px;
    border:1px solid transparent;
    transition:0.4s background ease-in;
}
    .btn1:hover{
        background-color:white;
        color:black;
        border:1px solid black;
        transition:0.3s background ease-in;
        cursor: pointer;
}
/* .btn2{
  color:black;
    background-color:black;
    color:wheat;
    padding:10px 18px;
    border-radius:5px;
    border:1px solid black;
    min-width:220px;
    font-size:16px;
    border:1px solid transparent;
    transition:0.4s background ease-in;
}
.btn2:hover{
        background-color:white;
        color:black;
        border:1px solid black;
        transition:0.3s background ease-in;
        cursor: pointer;
} */
`;
