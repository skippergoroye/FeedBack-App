import React from 'react'

// const Header = (props) => {
//   return (
//     <header>
//         <div className="container">
//             <h2>{props.text}</h2>
//         </div>
//     </header>
//   )
// }



const Header = ({ text }) => {
    return (
      <header>
          <div className="container">
              <h2>{text}</h2>
          </div>
      </header>
    )
  }

export default Header