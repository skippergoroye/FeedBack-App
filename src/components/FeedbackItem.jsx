import { useState } from 'react'

const FeedbackItem = () => {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This ia an eaxmple of a feddback Item')


    // const handleClick  = () => {
    //     setRating(10)
    // }


    // const handleClick  = () => {
    //     setRating(() => {
    //         return 10
    //     })
    // }


    const handleClick  = () => {
        setRating((prev) => {
            // console.log(prev)
            return prev + 1
        })
    }


  return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{text}</div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem