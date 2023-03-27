import React from 'react'
import useFetch from '../hooks/useFetch';
 import "./featuredProperties.css"
export const FeaturedProperties = () => {

  const {data,loading,error}=useFetch("http://localhost:8700/api/hotels/find?featured=true");
  
  // console.log(data);

  return (
    <div className="fp">

      <>
    
      </>
      {loading?("Loading"):(
      <>
      
      {data.map((item)=>(
 <div className='fpItem'  key={item._id}>
        
 <img src={item.photos[0] }alt="image nhi mili" className="fpImg" />
<span className="fpName">{item.name}</span>
<span className="fpCity">{item.city}</span>
<span className="fpPrice">starting from {item.cheapestPrice}</span>
{item.rating&&
<div className="fpRating">
<button>{item.rating}</button>
<span>Excellent</span>
</div>
}
</div>
      ))
      
     }
     </>)
    

    }
 
</div>
    
  )
}

