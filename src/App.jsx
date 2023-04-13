import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment One" },
    { id: 2, text: "Comment Two" },
    { id: 3, text: "Comment Three" },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading......</h1>;


  const commentBlock = (
    <div>
      <h1>Comments: ({comments.length})</h1>
      <ul>
        {comments.map((eachComment, item) => (
          <li key={item}>{eachComment.text}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>




      {/* if show comment is true return 'yes' else return 'no' */}
      {/* {showComments ? 'yes' : 'no'}      */}
      {/* {showComments ? ('comment') : ('no')}      */}


       {/* using ternary and  No */}
      {showComments ? (
        <div>
          <h1>Comments: ({comments.length})</h1>
          <ul>
            {comments.map((eachComment, item) => (
              <li key={item}>{eachComment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        "no"
      )}




      {/* Using ternary and null */}
      {showComments ? (
        <div>
          <h1>Comments: ({comments.length})</h1>
          <ul>
            {comments.map((eachComment, item) => (
              <li key={item}>{eachComment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        null
      )}




      {/* Using double ampersand If showComment is true then go ahead and show the comment */}
      {showComments && (
          <div>
            <h1>Comments: ({comments.length})</h1>
            <ul>
              {comments.map((eachComment, item) => (
                <li key={item}>{eachComment.text}</li>
              ))}
            </ul>
          </div>
        )}




       {/* Using double ampersand If showComment is true then go ahead and show the comment */}
       {showComments && commentBlock }

    </div>
  );
}

export default App;
