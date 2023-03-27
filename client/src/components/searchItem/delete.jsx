import React from 'react'
import {useNavigate } from 'react-router-dom';
import "./searchItem.css"

export const SearchItem = ({item}) => {
  const navigate =useNavigate();
  const handle=()=>{
    navigate("/hotels");
 }

 const p="https://media.istockphoto.com/id/1164435677/photo/happy-hotel-clerks-are-welcoming-professional-at-counter.jpg?s=612x612&w=0&k=20&c=XNbtAFwGK4AHd7JKKQycDwTQcIXFagIxt9TXLNb0Dd4=";

  return (
    <div className='searchItem' onClick={handle}>
<img src={item.photos[0]} alt="" className='siImg'/>
        
<div className="siDesc">
<h1 className="siTitle">Tower Street Apartment</h1>
<span className="siDistance">500 m from centre</span>
<span className="siTaxiOp">Free airport taxi</span>
<span className="siSubtitle">Studio Apartment with air conditioning</span>

<span className='siFeatures'>Entire studio .1 bathroom.21m*m 1full bed</span>
<span className="siCancelOp">Free Cancellation</span>
<span className="siCancelOpSubtitle">You can cancel later ,so lock in this great price today</span>




</div>
<div className="siDetails">
    
  <div className="siRating">
    <span>Excellent</span>
    <button>8.9</button>
  </div>

  <div className='siDetailTexts'>
<span className="siPrice">Rs.1500</span>
<span className="siTaxOp">Includes taxes and fees</span>
<button className='siCheckButton'>See availability</button>
  </div>
    
</div>



        </div>
  )
}
