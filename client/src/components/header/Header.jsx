import { faArrowDown, faBed, faCalendarDays, faCar, faChevronCircleDown, faChevronCircleRight, faChevronDown, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';




export const Header = ({type}) => {
  const {user}=useContext(AuthContext);

    const [destination,setDestination]=useState("");
    const [openDate,setOpenDate]=useState(false);

     const handleClick1=()=>{
      setOpenDate(!openDate);
    }

    const [dates, setdates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions,setOpenOptions]=useState(false);
      const [options,setOptions]=useState({
          adult:1,
          children:0,
          room:1

      })

      const navigate =useNavigate()
    //   hook

      const handleOption=(name,operation)=>{
        setOptions(prev=>{return {...prev,[name]:operation==="i"?options[name]+1:options[name]-1}})
      }


       const {dispatch}=useContext(SearchContext)

 

      const handleSearch=()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
         navigate("/hotel", {state:{destination,dates,options}});
      }

      const login=()=>{
       
         navigate("/login");
      }

// ------------------------------------------------------------------------------------------------------------------------------------------------
  return (

    <div className="header">
        <div className={type==="list"? "headerContainer listMode":"headerContainer"}>
<div className='headerList'>
    <div className='headerListItem active'>
    <FontAwesomeIcon icon={faBed} />
    <span>stays</span>
    </div>

    <div className='headerListItem'>
    <FontAwesomeIcon icon={faPlane} />
    <span>Flights</span>
    </div>

    <div className='headerListItem'>
    <FontAwesomeIcon icon={faCar} />
    <span>Car Rentals</span>
    </div>

    <div className='headerListItem'>
    <FontAwesomeIcon icon={faTaxi} />
    <span>Taxi</span>
    </div>

</div>
{/* //start/// */}
{type !=="list" &&<>
<div className='signUp'> 
<h1 className='headerTitle'>A lifetime of discounts? Its genuine</h1>
<p className='headerDesc'>get rewarded for your travel - unlock instant saving of 10% or more with a free AIM Booking </p>
{!user&&<button onClick={login} className="headerBtn1">Signin / Register</button>}

</div>
<div className='headerSearch'>
    {/* ------------------------------------------------------- */}
<div className='headerSearchItem'>
    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
    <input type="text" placeholder='where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)}/>
</div>
{/* ------------------------------------------------------- */}
<div className='headerSearchItem'>
    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'> {`${format(dates[0].startDate,"dd/MM/yyyy")} to ${format(dates[0].endDate,"dd/MM/yyyy")}`}</span>
    {openDate&& <><DateRange
  editableDateInputs={true}
  onChange={item => setdates([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={dates}
  className="date"
  minDate={new Date()}
/>
<button className='donebtn'>
 <span>Set ?  </span>
 
 <button className='setButton' onClick={handleClick1}>

 <span>Continue </span>
 <FontAwesomeIcon icon={faChevronCircleDown}/></button>
 </button>
 
</>
}

</div>
{/* ------------------------------------------------------- */}
<div className='headerSearchItem'>
    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
    <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult}adult . ${options.children}children . ${options.room}room`}</span>
    { openOptions&& <div className='options'>
        <div className="optionItem">
          <span className='optionText'>Adult</span>
            
            <div className="optionCounter">
            <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
            <span className='optionCounterNumber'>{options.adult}</span>
            <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
            </div>
        </div>
        {/* ------------------------------ */}
        <div className="optionItem">
            <span className='optionText'>Children</span>
            <div className="optionCounter">
            <button disabled={options.children<=0} className="optionCounterButton"  onClick={()=>handleOption("children","d")}>-</button>
            <span className='optionCounterNumber'>{options.children}</span>
            <button className="optionCounterButton"  onClick={()=>handleOption("children","i")}>+</button>
            </div>
        </div>
        {/* ------------------------------ */}
        <div className="optionItem">
            <span className='optionText'>Room</span>
            <div className="optionCounter">
            <button disabled={options.room<=1} className="optionCounterButton"  onClick={()=>handleOption("room","d")}>-</button>
            <span className='optionCounterNumber'>{options.room}</span>
            <button className="optionCounterButton"  onClick={()=>handleOption("room","i")}>+</button>
            </div>
        </div>
        {/* ------------------------------ */}

    </div>}
</div>
{/* ------------------------------------------------------- */}
<div className='headerSearchItem'>
  <button className="headerBtn2" onClick={handleSearch}>Search</button>
</div>
{/* ------------------------------------------------------- */}
</div>
</>}
</div>
</div>
    )
}
