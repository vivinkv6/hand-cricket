import React from 'react'
import {Data} from '../App';
import { useContext } from 'react';

function User() {
  
  const{user,userScore}=useContext(Data);
  return (
    <div className='border border-3 border-dark'>

      <h3 className='fw-bold'>You</h3>
     <div className="row py-4">
      <div className="col-6">
      <b style={{fontSize:'40px'}}>{userScore}</b>
      
      </div>
      <div className="col-6">
        {user.length>0 ? 
        <img src={user} height={30} width={30}  />
        :
        <></>
        }
      
      
      </div>
     </div>

    </div>
  )
}

export default User