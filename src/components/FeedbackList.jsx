import React from 'react'
import FeedbackItem from '../components/FeedbackItem'

const FeedbackList = ({ feedback }) => {
    // console.log(feedback)

    if(!feedback || feedback.length === 0){
      return <p>No Feedback Yet</p>
    }


  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}



FeedbackList.PropTypes = {
  feedback: PropTypes.arrayOf (
    PropTypes.shape ({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}




export default FeedbackList