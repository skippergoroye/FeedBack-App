import { v4 as uuidV4 } from 'uuid'
import { createContext, useState } from "react";
import FeedBackData from "../Data/FeedBackData";


const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {

    // Using Data fron the json file
    // const [feedback, setFeedBack] = useState(FeedBackData)



    const [feedback, setFeedBack] = useState([
        {
            id: 1,
            text: 'This item 1 is from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item 2 is from context',
            rating: 19
        },
        {
            id: 3,
            text: 'This item 3 is from context',
            rating: 7
        }
    ])



    const [editData, setEditData] = useState({
        item: {},
        edit: false
    })


    // AddFeedBack
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidV4()
        setFeedBack([newFeedback, ...feedback])
    }


    // Set item to be updated
    const editFeedback = (item) => {
        setEditData({
            item,
            edit: true
        })
    }


   


    // DeleteFeedBack
    const deleteFeedBack = (id) =>  {
        if(window.confirm('Are you sure you want to delete?')) {
          setFeedBack(feedback.filter((item) => item.id !== id))
        }
    }




  return (
    <FeedbackContext.Provider 
        value={{
            feedback,
            editData,
            addFeedback,
            editFeedback,
            deleteFeedBack,
        }}>

        {children}
    </FeedbackContext.Provider>
  );
};


export default FeedbackContext
