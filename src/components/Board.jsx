import React from 'react'
import Target from './Target';
import Ai from'./Ai';
import User from './User'
import AiScoreButton from './AiScoreButton';
import Selection from './Selection';

function Board() {
  return (
    <div className="container">
      <div className="row border border-3 border-dark py-5">
        <div className="col-12 mb-3">
          <Target/>
        </div>
        <div className="col-6">
          <User/>
        </div>
        <div className="col-6">
          <Ai/>
        </div>
        <div className="col-12 mt-4">
          <AiScoreButton/>
        </div>
        <div className="col-12">
          <Selection/>
        </div>
      </div>
    </div>
  )
}

export default Board