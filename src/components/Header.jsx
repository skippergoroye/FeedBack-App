import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ text }) => {
  return (
    <div>
        <h2>{text}</h2>
    </div>
  )
}





Header.defaultProps = {
    text: 'FeedBack UI'
}


Header.propTypes = {
    text: PropTypes.string
}


export default Header