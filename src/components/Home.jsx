import React, { useState } from 'react'
import styled from 'styled-components'
import SideNavbar from './SideNavbar'
import Inbox from './Inbox'
import Today from './Today'
import Next7Days from './Next7Days'
const MainHomeContainer=styled.div`
    background-color:#f0f0f4;
    color:white;
    height:100vh;
    display:flex;
    flex-direction:column;
    border-radius:20px;
    `
    const AppHeading = styled.div`
    text-align:center;
    font-size:40px;
    height:10%;
    font-weight:bold;
    border-radius:10px;
    background-color:#4545bf;
    margin:10px;
    `
    const Container = styled.div`
    height:90%;
    margin:0 20px 20px 20px;
    display:flex;
    `
    const SideNav = styled.div`
    width:20%;
    margin:10px;
    background-color:#4545bf;
    border-radius:20px;
    `
    const MainSection = styled.div`
    width:80%;
    margin:10px;
    border:5px solid #4545bf;
    border-radius:20px;
    `
    const Description =styled.div`
    position:fixed;
    color:white;
    margin:10% 0 10% 20%;
    height:50vh;
    width:60vw;
    border-radius:20px;
    padding:30px;
    text-align:center;
    background-color:grey;
    p{
        font-size:20px;
    }
    button{
        font-size:30px;
        padding:20px;
        border-radius:20px;
        cursor:pointer;
    }
    `
export default function Home() {
    
    const [list,setList] =useState([{
        title:'',
        description:"",
        date:""}])

    const [active,setActive] = useState("inbox")
    const [desStatus,setDesStatus] = useState(false)
    const [des,setDes]=useState("");
    
  return (
    <>
        {desStatus && 
            <Description>
                <h1>DESCRIPTION OF YOUR TASK</h1>
                <p>{des}</p>
                <button onClick={()=>setDesStatus(false)}>CLOSE</button>
            </Description>}
        <MainHomeContainer>
            <AppHeading>
                TO DO LIST
            </AppHeading>
            <Container>
                <SideNav>
                    <SideNavbar setActive={setActive}/>
                </SideNav>
                <MainSection>
                    {(active ==="inbox")&& <Inbox list={list} setList={setList} setDes={setDes} setDesStatus={setDesStatus} />}
                    {(active ==="today")&& <Today list={list}/>}
                    {(active ==="next7days")&& <Next7Days list={list}  setList={setList} setDes={setDes} setDesStatus={setDesStatus}/>}
                </MainSection>
            </Container>
        </MainHomeContainer>
        
    </>
  )
}
