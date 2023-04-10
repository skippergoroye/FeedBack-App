import { useState }from 'react'

const FeedbackItem = () => {
    const [rating, setRating] = useState(9)
    const [text, setText] = useState('This is an example of FeedBackItem')


    const handleClick = () => {
        // setRating(10)

        // setRating(() => {
        //     return 10
        // })

        setRating((prev) => {
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