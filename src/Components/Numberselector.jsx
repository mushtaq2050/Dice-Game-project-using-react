import React from 'react'
import styled from 'styled-components'


const Numberselector = ({selectednumber, setselectednumber,eror,seteror}) => {
    const arr=[1, 2, 3, 4, 5, 6];
    const selectednumbercontroler=(value)=>{
      setselectednumber(value)
      seteror("")
    }
  return (
    <Selecnumbercontainer>
      <p className='error'>{eror}</p>
    <div className='flex'>
      {arr.map((value,index)=>(
       <Box key={index}
       isselected={value === selectednumber}
       onClick={()=> selectednumbercontroler(value)}
       >
        {value}
       </Box>
      ))}
    </div>
    <p>Select Number</p>
    </Selecnumbercontainer>
  )
}

export default Numberselector
const Selecnumbercontainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;

.flex{
    display:flex;
    gap:23px;
}
p{
    font-size:22px;
    font-weight:650;
}
.error{
  color:red;
  padding-bottom:10px;
}

`;

const Box = styled.div`
height:72px;
width:72px;
display:grid;
place-items:center;
font-size:24px;
font-weight:500px;
border:1px solid black;
background-color:${(props) => (props.isselected ? "black" : "white")};
color:${(props) => (!props.isselected ? "black" : "white")};

`;
