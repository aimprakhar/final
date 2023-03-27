import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/header/Header'
import useFetch from '../../components/hooks/useFetch'
import { MailList } from '../../components/mailList/MailList'
import { Navbar } from '../../components/Navbar'
import { AuthContext } from '../../context/AuthContext'
import { SearchContext } from '../../context/SearchContext'
import "./hotels.css"
export const Hotels = () => {

  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const [openModal,setOpenModal]=useState(false);
  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpen(true);

  }
  
 

  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber=slideNumber===0?(data.photos.length-1):slideNumber-1;

    }
    else{
      newSlideNumber=slideNumber===(data.photos.length-1)?0:slideNumber+1;

    }

    setSlideNumber(newSlideNumber);

  }
const location=useLocation();

  const id=location.pathname.split("/")[3];


   const{data,loading,error}=useFetch(`http://localhost:8700/api/hotels/find/${id}`);
   const {dates}=useContext(SearchContext);

   const {user}=useContext(AuthContext);
   const navigate=useNavigate();
   const MILLISECONDS_PER_DAY=1000*60*60*24;

   function dayDifference(date1,date2){
    const timeDiff=Math.abs(date2.getTime()-date1.getTime());
    const diffDays=Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
     return diffDays;
  }

   const days=dayDifference(dates[0].endDate,dates[0].startDate);
  //  const handle2=()=>{
    
  
  // }
  const handleClick=()=>{
    if(user){
      navigate("/pay");
    }
    else{
      navigate("/login");
    }
  }



  return (
    <div className=''>
      <Navbar/>
      <Header type="list"/>

      {loading?("loading"):(
      <div className="hotelContainer">

        {open&&<div className="slider">

          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>

        </div>
      } 



        <div className="hotelWrapper">
          <button onClick={handleClick} className='bookNow' >Reserve or Book Now</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon ={faLocationDot}/>
            <span>{data.address}</span>
            </div>
            <span className='hotelDistance'>Excellent location - {data.distance}from center</span>
            <span className='hotelPriceHighLight'>Book a stay over Rs.{data.cheapestPrice} at this property and get a free airport taxi</span>
            <div className="hotelImages">
              {
                data.photos?.map((photo,i)=>(
                  <div className="hotelImgWrapper" key={i}>
                    <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
                  </div>
                ))
              }
            </div>

            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className='hotelTitle'>{data.title}</h1>
                <p className="hotelDesc">
                  {data.disc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days} night stay (as per your selection)</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eum optio distinctio.
                </span>
                <h2>
                  <b>Rs.{days*data.cheapestPrice}</b> ({days}nights)
                </h2>
                <button onClick={handleClick}>Reserve or book now</button>

              </div>

            </div>
         
        </div>

       <MailList/>
       <Footer/>


      </div>)
          }



      </div>
  )
 
}



