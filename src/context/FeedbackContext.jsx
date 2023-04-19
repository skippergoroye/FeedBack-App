import { v4 as uuidV4 } from 'uuid'
import { createContext, useEffect, useState } from "react";
// import FeedBackData from "../Data/FeedBackData";


const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {

    // Using Data fron the json file
    // const [feedback, setFeedBack] = useState(FeedBackData)

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedBack] = useState([])
    const [editData, setEditData] = useState({
        item: {},
        edit: false
    })


    useEffect(() => {
        fetchFeedBack()
        // console.log('1234')
    }, [])


    // using async Await Fetch Feedback  Data
    const fetchFeedBack = async () => {
        const response = await fetch(`http://localhost:5000/feedback`)

        const data = await response.json()

        setFeedBack(data)
        setIsLoading(false)
        // console.log(data)
    }



    // using Promises
    // const fetchFeedBack = () => {
    //     fetch('http://localhost:5000/feedback')
    //        .then(res => res.json())
    //        .then(data => setFeedBack(data))
    // }







    // Set item to be updated
    const editFeedback = (item) => {
        setEditData({
            item,
            edit: true
        })
    }




    // AddFeedBack
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidV4()
        setFeedBack([newFeedback, ...feedback])
    }



    // UpdateFeedBack
    const updateFeedBack = (id, updItem) => {
        setFeedBack(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        // console.log(id, updItem)
        )
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
            isLoading,
            addFeedback,
            editFeedback,
            updateFeedBack,
            deleteFeedBack,
        }}>

        {children}
    </FeedbackContext.Provider>
  );
};


export default FeedbackContext
