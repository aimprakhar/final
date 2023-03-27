import React from 'react'
import {useNavigate } from 'react-router-dom';
import "./searchItem.css"
import { Link } from 'react-router-dom';

export const SearchItem = ({item}) => {
  const navigate =useNavigate();
  const handle=()=>{
    navigate("/hotels/find");
 }

//  const p="https://media.istockphoto.com/id/1164435677/photo/happy-hotel-clerks-are-welcoming-professional-at-counter.jpg?s=612x612&w=0&k=20&c=XNbtAFwGK4AHd7JKKQycDwTQcIXFagIxt9TXLNb0Dd4=";

  return (
    <div className='searchItem' >
<img src={item.photos[0]} alt="" className='siImg'/>
        
<div className="siDesc">
<h1 className="siTitle">{item.name} <br/><span >City:{item.city}</span></h1>
<span className="siDistance">{item.distance} from centre</span>
<span className="siTaxiOp">Free airport taxi</span>
<span className="siSubtitle">Studio Apartment with air conditioning</span>

<span className='siFeatures'>{item.description}</span>
<span className="siCancelOp">Free Cancellation</span>
<span className="siCancelOpSubtitle">You can cancel later ,so lock in this great price today</span>




</div>
<div className="siDetails">
  { item.rating&& 
  <div className="siRating">
    <span>Excellent</span>
    <button>{item.rating}</button>
  </div>
}
  <div className='siDetailTexts'>
<span className="siPrice">Rs.{item.cheapestPrice}</span>
<span className="siTaxOp">Includes taxes and fees</span>

<Link to={`/hotels/find/${item._id}`}> 
<button className='siCheckButton'>See availability</button>
</Link>

  </div>
    
</div>



        </div>
  )
}
