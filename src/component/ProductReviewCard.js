import React from 'react'
import '../style/ProductReviewCard.css'

const ProductReviewCard = ({prise,name,index,img,review}) => {
  return (
    <div className="ProductReviewCard">
            <img src={img} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span> 
            <b>{prise}</b> 
        </div>
  )
}

export default ProductReviewCard
