import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import UseParams from './components/UseParams';
import UseNavigate from './components/UseNavigate';
import { FeedbackProvider } from './context/FeedbackContext'






function App () {
 

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
      <Routes>
        <Route path="/" element={
          <>
            <FeedbackForm  />
            <FeedbackStats />
            <FeedbackList  />
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
    </FeedbackProvider>
  );
}

export default App;
