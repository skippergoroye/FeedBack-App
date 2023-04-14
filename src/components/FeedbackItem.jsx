import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ item, handleDelete }) => {
  // const handleClick = () => {
  //   console.log(123)
  // }
   
  // const handleClick = (id) => {
  //   console.log(id)

  // }
   

  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
          {/* <button onClick={() => console.log(123)} className='close'> */}
          {/* <button onClick={() => console.log(item.id)} className='close'> */}
          {/* <button onClick={handleClick} className='close'> */}
          <button onClick={() => handleDelete(item.id)} className='close'>
            <FaTimes color='purple' />
          </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem