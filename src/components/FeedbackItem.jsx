import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card';

// Context APi
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
     const { deleteFeedBack } = useContext(FeedbackContext)
   

  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
          <button onClick={() => deleteFeedBack(item.id)} className='close'>
            <FaTimes color='purple' />
          </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}



export default FeedbackItem