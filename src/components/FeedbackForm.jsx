import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

// Content APi
import { useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedBackData from "../Data/FeedBackData";


const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');


  const { addFeedback, editData, updateFeedBack } = useContext(FeedbackContext)

  useEffect(() => {
    if(editData.edit === true){
      setBtnDisabled(false)
      setText(editData.item.text)
      setRating(editData.rating)
    }

    console.log('hello')
  }, [editData])

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 character')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

         setText(e.target.value)
    //   console.log(e.target.value)
    }


    const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length > 10){
        const newFeedback = {
          text,
          rating,
        }

        if(editData.edit === true){
          updateFeedBack(editData.item.id, newFeedback)
        } else {
          addFeedback(newFeedback)
        }

        setText('')
        // console.log(newFeedback)
      }

    }



  return (
    <Card>
      <form onSubmit={handleSubmit}>
            <h1>How would rate your service with us</h1>
            {/* @todo -  rating select component */}
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Write a review"
                    value={text}
                    onChange={handleTextChange}
                    // onClick={() => setText(console.log(123))}
                />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {/* this shows the message  */}
            {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
