import React from 'react'
import './searchItem.css'

export const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src='https://media.istockphoto.com/photos/newport-beach-california-picture-id1297258609?b=1&k=20&m=1297258609&s=170667a&w=0&h=wFQW3RdqKqHgUV8h1etlPld8a5ksFJOCaHc5NDBqrck=' alt='' className='siImg'/>
        
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
            Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
            </span>
        </div>
        
        <div className="siDetails">
            <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
            </div>
            <div className="siDetailTexts">
            <span className="siPrice">$112</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}
