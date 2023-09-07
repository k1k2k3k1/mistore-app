import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import'../style/prorivew.css'
const Proriview = ({productrivew}) => {
  return (
    <div className='ProductReviews'>
     { productrivew.map((item,index)=>(
      <ProductReviewCard prise={item.price} name={item.name} img={item.image}
       review={item.review} index={index} key={item.image}/>
     ))
}
    </div>
  )
}

export default Proriview
