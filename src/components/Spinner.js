import React from 'react'
import downloading_cloud from './downloading_cloud.gif'

export default function Spinner() {
  return (
    <div>
        <div className='container text-center'>
            <img src={downloading_cloud} alt="..." className='my-5' />           
        </div>
    </div>
  )
}
