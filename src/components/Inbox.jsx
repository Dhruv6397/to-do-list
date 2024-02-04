import React, { useState } from 'react'
import styled from 'styled-components'
const InboxContainer = styled.div`
    height:100%;
    `
    const InboxNav=styled.div`
    background-color:#4545bf;
    height:20%;
    
    `
    const AddButton = styled.div`
    text-align:center;

    button{
        font-size:50px;
        border-radius:20px;
        padding:15px;
        margin:10px;
        width:80%;
        cursor:pointer;
        border:5px solid #6b6b75;
        color:#6b6b75;
        &:hover{
            border:5px solid #f0f0f4;
            color:#f0f0f4;
            background-color:#4545bf;
        }
    }
    
    `
    const TextForm =styled.div`
        text-align:center;
        form{
            div{
                padding:5px;
                input{
                    font-size:20px;
                    padding:5px;
                    border:2px solid black;
                    border-radius:5px;
                    margin:5px;

                }
            }
            div{
                button{
                    font-size:20px;
                    padding:5px;
                    margin:5px;
                    border-radius:10px;
                    cursor:pointer;
                    border:3px solid black;
                    &:hover{
                        color:white;
                        background-color:#ad14ad;
                    }
                }
            }
        }
    `
    const ListContainer = styled.div`
    height:60%;
    margin:20px;
    padding:30px;
    font-size:25px;
    font-weight:bold;
    border-radius:20px;
    background-color:black;
    user-select:none;
    display:flex;
    cursor:pointer;
    flex-direction:column;   
    overflow-y: auto;  
    button{
        font-size:15px;
        margin-left:10px;    
        cursor:pointer;  
    }
    li{
      margin:10px;
      cursor:pointer;
      color:white;
      font-size:20px;
      list-style:none;
    }
    
    `
export default function Inbox({list,setList,setDes,setDesStatus}) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (userData.title === "") {
          alert("Give any title to your task...");
          return;
        }
    
        setList([...list, userData]);
        setUserData({ title: "", description: "" });
        setCondition("addButton");
      };

    const [userData,setUserData] = useState({
        list
    })
    const [condition,setCondition] = useState("addButton")

    const removeFunc = (indexToRemove) => {
        const updatedList = list.filter((item, index) => index !== indexToRemove);
        setList(updatedList);
        alert("Task deleted successfully !")
      };

  return (
    <>
       <InboxContainer>
        <InboxNav>
        {condition==="addButton" && <AddButton>
                <button onClick={()=>setCondition("formShow")}>ADD YOUR NEW TASK</button>
            </AddButton>}
            {condition==="formShow" && <TextForm>
            <form>
              <div>
                <input
                  type="text"
                  value={userData.title}
                  onChange={(e) => setUserData((prevData) => ({ ...prevData, title: e.target.value }))}
                  placeholder="Enter title..."
                />
                <input
                  type="text"
                  value={userData.description}

                  onChange={(e) => {console.log(e.target.value)
                    setUserData((prevData) => ({ ...prevData, description: e.target.value }))}}
                  placeholder="Enter description..."
                />
                <input type="date"
                    value={userData.date}
                    onChange={(e)=>setUserData((prevData)=>({...prevData,date:e.target.value}))}
                 />
                <button onClick={handleSubmit}>ADD TASK</button>
                <button onClick={() => setCondition("addButton")}>CANCEL</button>
              </div>
            </form>
          </TextForm>}
        </InboxNav>
        <ListContainer>
        {list.map((item, index) => (
                <li>
                <li key={index} onClick={()=>{setDes(item.description);setDesStatus(true)}}>
                  {item.title} | {item.date.toString()}  </li>
                     <button onClick={() => removeFunc(index)}>REMOVE</button>
                </li>
              ))}
        </ListContainer>
        
       </InboxContainer>

      
    </>
  )
}
