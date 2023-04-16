import { v4 as uuidV4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import FeedBackData from "./Data/FeedBackData";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import UseParams from './components/UseParams';
import UseNavigate from './components/UseNavigate';






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
    <Router>
      <Header />
      <div className="container">
      <Routes>
        <Route path="/" element={
          <>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats navigatefeedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
          </>
        }>
        </Route>

          <Route path='/about' element={<AboutPage />} />
          <Route path='/params/:id/:name' element={<UseParams />} />
          <Route path='/navigate/*' element={<UseNavigate />} />
      </Routes>
      <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
