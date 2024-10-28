import React from 'react'
import StakeInfo from './StakeInfo'
import Questions from './Questions'

const QuestionComponent = () => {
  return (
    <div className="flex justify-center bg-slate-700 min-h-screen h-full">
      <div className="flex flex-col justify-center items-center w-1/2">
        <Questions />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <StakeInfo />
      </div>
    </div>
  )
}

export default QuestionComponent
