import React from 'react'
import Webcam from 'react-webcam'

export default function Camera() {
  return (
    <Webcam height={480} width={640} audio={true}/>
  )
}
