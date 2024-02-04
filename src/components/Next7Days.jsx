import React from 'react'
import styled from 'styled-components';

const Next7DaysContainer = styled.div`
height:80%;
setList={setList}
color:white;
border-radius:15px;
margin:50px;
background-color:black;
overflow-y:auto;
div{
  li{
    color:white;
  }
}
`


export default function Next7Days({list,setList,setDes,setDesStatus}) {
    const date =new Date();
    const filteredList = list.filter((item)=>{
        const timeDiff = item.date - date;
        const dayDiff = Math.ceil(timeDiff/(24*60*60*1000))
        if(dayDiff>=0 && dayDiff<8){
            return true
        }
        return false;
    })
    const removeFunc = (indexToRemove) => {
      const updatedList = list.filter((item, index) => index !== indexToRemove);
      setList(updatedList);
      alert("Task deleted successfully !")
    };
  return (
    <>
      <Next7DaysContainer>
        <div>
            {filteredList.map((item,index)=>(<li key={index}>
              <li onClick={()=>{setDes(item.description);setDesStatus(true)}}>
              {item.title} | {item.date.toString()} 
              </li>
              <button onClick={() => removeFunc(index)}>REMOVE</button>
            </li>))}
        </div>
      </Next7DaysContainer>
    </>
  )
}
