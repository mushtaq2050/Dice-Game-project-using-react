import Startgame from "./Components/Startgame"
import Playgame from "./Components/Playgame"
import { useState } from "react"
import styled from "styled-components"

function App() {
  const [isgamestarted, setisgamestarted] = useState(false)
  const togglegame=()=>{
    return setisgamestarted((prev)=>!prev);
  }
  return (
 <>
 {
 isgamestarted ? <Playgame/> : <Startgame toggle={togglegame}/>
}
 </>
  )
}

export default App
