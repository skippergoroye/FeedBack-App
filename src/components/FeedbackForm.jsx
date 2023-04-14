import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";


const FeedbackForm = () => {
  const [text, setText] = useState("");

  //   const handleTextChange = (e) => {
  //     console.log(e.target.value)
  //   }

  return (
    <Card>
      <form>
        <h1>How would rate your service with us</h1>
        {/* @todo -  rating select component */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            // onChange={handleTextChange}
            // onClick={() => setText(console.log(123))}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
