import React from 'react'
import styled from 'styled-components'

const Roledice = ({current, currentroledice}) => {
  return (
    <Dicecontainer>
        <div onClick={currentroledice} className='dice'>
        <img src={`/images/dice/dice_${current}.png`} alt="image" />
        </div>
        <p>Click on dice to Roll</p>
      
    </Dicecontainer>
  )
}

export default Roledice
const Dicecontainer=styled.div`
margin-top:70px;
display:flex;
flex-direction:column;
align-items:center;
p{
    font-size:24px
}
.dice{
    cursor:pointer;
}

`;
