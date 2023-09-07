import React from 'react'
import Videocard from './Videocard'

const Vedio = ({vedio}) => {
  return (
    <div className='videos'>
        {vedio.map((item,index)=>(
        <Videocard index={index} key={item.image} image={item.image} name={item.name}/>
        ))
      
        }
    </div>
  )
}

export default Vedio
