import { v4 as uuidV4 } from 'uuid'
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import FeedBackData from "./Data/FeedBackData";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";





function App () {
  const [feedback, setFeedBack] = useState(FeedBackData)


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidV4()
    setFeedBack([newFeedback, ...feedback])
    // console.log(newFeedback)
  }

  const deleteFeedBack = (id) =>  {
    // console.log('App', id)
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }
  

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm  handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}

export default App;
