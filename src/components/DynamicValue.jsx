import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function DynamicValue () {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1367674774848, text: "Comment One" },
    { id: 2404404040404, text: "Comment Two" },
    { id: 3877877833874, text: "Comment Three" },
  ];


  // const loading = false

  // if(loading)  return <h1>Loading........</h1>   // If Loading is true then return this <h1>Loading........</h1>

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading........</h1>;


  const commentBlock = (
    <div className="comments">
      <h2>Comments: ({comments.length})</h2>
      <ul>
        {comments.map((element, item) => (
          <li key={item}>
            {element.text} {element.id}
          </li>
        ))}
      </ul>
    </div>
  )






  

  return (
    <div className="me">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {/* if show comment is true return 'yes' else return 'no' */}
      {/* {showComments ? 'yes' : 'no'}      */}
      {/* {showComments ? ('comment') : ('no')}      */}


       {/* using No */}
      {showComments ? (
        <div className="comments">
          <h2>Comments: ({comments.length})</h2>
          <ul>
            {comments.map((element, item) => (
              <li key={item}>
                {element.text} {element.id}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        "no"
      )}


       {/* Using null */}
      {showComments ? (
        <div className="comments">
          <h2>Comments: ({comments.length})</h2>
          <ul>
            {comments.map((element, item) => (
              <li key={item}>
                {element.text} {element.id}
              </li>
            ))}
          </ul>
        </div>
      ) : null}



      {/* If show comment is true then go ahead and show this */}
      {showComments && (
        <div className="comments">
          <h2>Comments: ({comments.length})</h2>
          <ul>
            {comments.map((element, item) => (
              <li key={item}>
                {element.text} {element.id}
              </li>
            ))}
          </ul>
        </div>
      )}


      {showComments && commentBlock}

      {/* <div>{3 + 3}</div>
      {Math.random() * (5 + 5)} */}
    </div>
  );
}

export default DynamicValue;
