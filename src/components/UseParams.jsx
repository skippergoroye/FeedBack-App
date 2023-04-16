import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const params = useParams()
    
  return (
    <div>
       <h1>Post {params.id}</h1>
       <p>post {params.name}</p>
    </div>
  )
}

export default Post