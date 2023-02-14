import React from 'react'
import {Data} from '../App';
import { useContext } from 'react';

function AiScoreButton() {
  const{setAiScore,setHide,hide}= useContext(Data);
  let{generateAiScore}=useContext(Data);
  const generatingScore=()=>{
   generateAiScore=Math.floor(Math.random()*80);
   setAiScore(generateAiScore);
   setHide(true);
  }
  return (
    <>
      {setHide ? 
      <>
      <button className='btn btn-primary' onClick={generatingScore}>AI Score</button>
        <br />
        <br />
       <h6>You Need __ Runs more</h6>
       </> 
       :
       <></>
       }
        
    
    </>
  )
}

export default AiScoreButton