import './App.css';
import HeaderBlock from './components/HeaderBlock';
import Users from './components/Users';
import React,{useEffect,memo,useMemo,useState,useRef,useCallback} from 'react'


function App() {
  /* Header */
  const [headerText,setHeaderText] = useState('Header') ;
  const inputRef = useRef() ;
  const memoizedHeaderText = useMemo(()=>{
    return headerText
  },[headerText])

 /* Users */
  const refInputUsers = useRef();
  const [selectedUserID , setSelectedUserID] = useState('1')
  const memoizedSelectedId = useMemo(()=>{
    return selectedUserID
  },[selectedUserID])


  const filterUsers = useCallback((userList,id) =>{
    var filtered; 
    return filtered = userList.find(user=>user.id==id);
  },[selectedUserID])
  
  return (
    <div className="App">
             <HeaderBlock headerText={memoizedHeaderText} />
             <input type='text' ref={inputRef} className='inputHeaderText' placeholder='Type here..'></input>
             <button onClick={()=>{setHeaderText(inputRef.current.value)}} className='btnHeaderText'>Change Header text</button>
         
             <div className='containerUsers'>
                <input type='text' ref={refInputUsers} className='inputFindUser' placeholder="Enter user id.."/>
                <button className='btnFindUser' onClick={()=>{setSelectedUserID(refInputUsers.current.value)}}>Find user</button><br></br>
                <Users  filterUsers={filterUsers} selectedId={memoizedSelectedId}/>
             </div>
    </div>
  );
}

export default App;
