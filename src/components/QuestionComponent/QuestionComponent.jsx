import React from 'react'
import StakeInfo from './StakeInfo'
import Questions from './Questions'

const QuestionComponent = () => {
  return (
    <div className="flex justify-between bg-gray-700 min-h-screen h-full">
            <div className="flex flex-col justify-center items-center w-2/5">
                <Questions />
            </div>
            <div className="flex flex-col justify-center w-3/5">
                <StakeInfo />
            </div>
        </div>
  )
}

export default QuestionComponent