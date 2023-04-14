import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";


const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

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



  return (
    <Card>
      <form>
            <h1>How would rate your service with us</h1>
            {/* @todo -  rating select component */}
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Write a review"
                    onChange={handleTextChange}
                    // onClick={() => setText(console.log(123))}
                />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            // here
            {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
