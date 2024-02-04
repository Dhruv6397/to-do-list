import React from 'react'
import styled from 'styled-components'
const TodayContainer = styled.div`
height:100%;
background-color:black;
border-radius:15px;
`
export default function Today({list,setList, setDes, setDesStatus}) {

  const date = new Date();
  const filteredList = list.filter((item)=>{
    if(date.getFullYear() !== item.date.getFullYear()){
     return false
    }
    if(date.getMonth() !== item.date.getMonth()){
     return false
    }
    if(date.getDate()!== item.date.getDate()){
     return false
    }
    return true;

 })

 const removeFunc = (indexToRemove) => {
  const updatedList = list.filter((item, index) => index !== indexToRemove);
  setList(updatedList);
  alert("Task deleted successfully !")
};
  return (
    <>
      <TodayContainer>

      {filteredList>0 && (filteredList.map((item,index)=>(<li key={index}>
              <li onClick={()=>{setDes(item.description);setDesStatus(true)}}>
              {item.title} | {item.date.toString()} 
              </li>
              <button onClick={() => removeFunc(index)}>REMOVE</button>
            </li>)))}
      </TodayContainer>
    </>
  )
}
