import React from 'react'

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center">
            <img width="500px" height="auto" alt="face detection" src={imageUrl}/>
        </div>
    )
}

export default FaceRecognition
