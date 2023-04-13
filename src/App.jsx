import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    {id: 1, text: 'Comment One'},
    {id: 2, text: 'Comment Two'},
    {id: 3, text: 'Comment Three'}
  ]


  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>


      <div>
        <h1>Comments: ({comments.length})</h1>
        <ul>
          {comments.map((eachComment, item) => (
            <li key={item}>{eachComment.text}</li> 
          ))}
        </ul>
      </div>

    </div>
  )
}



export default App;
