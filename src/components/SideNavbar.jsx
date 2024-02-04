import React from 'react'
import styled from 'styled-components'
const Buttons=styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;

    `
    const Btns = styled.div`
        margin:70px 0 30px 0;
        button{
            font-size:1rem;
            border-radius:10px;
            padding:15px;
            background-color:#f0f0f4;
            color:#6b6b75;
            border:5px solid #6b6b75;
            font-weight:bold;
            font-size:30px;
            cursor:pointer;
            &:hover{
                color:white;
                border:5px solid white;
                background-color:#4545bf;
            }
        }
    `
export default function SideNavbar({setActive}) {
    
  return (
    <>
      <Buttons>
        <Btns>
            <button onClick={()=>setActive("inbox")}>INBOX</button>
        </Btns>
        <Btns>
            <button onClick={()=>setActive("today")}>TODAY</button>
        </Btns>
        <Btns>
            <button onClick={()=>setActive("next7days")}>NEXT7DAY</button>
        </Btns>
      </Buttons>
    </>
  )
}
