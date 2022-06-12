import React ,{useState,useEffect,useRef,memo} from 'react'

const users = [
    {
        id : 1 ,
        name : 'Jahangir',
        age : 23
    },
    {
        id : 2 ,
        name : 'Aytan',
        age : 21
    },
    {
        id : 3 ,
        name : 'Duygu',
        age : 19
    },
] ;  
 
function Users({filterUsers,selectedId}) { 
  const filterUsersList = filterUsers(users,selectedId);
  useEffect(()=>{
      console.log('Users component rendered..')
  })

  return (
    <div>   
        {
            <li>{JSON.stringify(filterUsersList)}</li>
        }
    </div>
  );
}


export default memo(Users)

