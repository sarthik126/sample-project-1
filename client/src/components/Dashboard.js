import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

export default function Dashboard({auth}) {
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth) {
      navigate("/")
    }
  }, [auth])

  return (
    <div>
        <button onClick={()=> navigate("/details")} className='add-details-btn'>Add Details</button>
    </div>
  )
}
