import React, { useState } from "react";
import "./list.css";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "../../components/searchItem/SearchItem";
import useFetch from "../../components/hooks/useFetch";
export const List = () => {
  const location = useLocation();
  // hook

  console.log(location.state.destination);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);



  const{data,loading,error,reFetch}=useFetch(`http://localhost:8700/api/hotels/find?city=${destination}&min=${min||1}&max=${max||9999}`);

  const handleBtnCLick=()=>{
    // localhost:8800/api/hotels/find?city=madrid&min=300&max=800
    reFetch();
    // localhost:8800/api/hotels/find?city=madrid&min=300
    //  refetch(`/hotels/find?city=${destination}&min=${min}&max=${max}`)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            {/* -------------------------- */}
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input 
              onChange={e=>setDestination(e.target.value)}
              type="text" placeholder={destination} />
            </div>
            {/* --------------------------- */}
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
            </div>
            {openDate && (
              <DateRange
                onChange={(item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />
            )}
            {/* ---------------------------- */}

            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    // min={1}
                    onChange={e=>setMin(e.target.value)}
                    className="lsOptionInput"
                    placeholder={min||1}
                  />
                </div>
                {/* --------------------------------------------------- */}
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    // max={9999}
                    onChange={e=>setMax(e.target.value)}
                    className="lsOptionInput"
                    placeholder={max||9999}
                  />
                </div>
                {/* --------------------------------------------------- */}
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                {/* --------------------------------------------------- */}
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                {/* --------------------------------------------------- */}
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
                {/* --------------------------------------------------- */}
              </div>
            </div>
            <button onClick={handleBtnCLick}>Search</button>
          </div>

          <div className="listResult">

            {loading?("loading"):(
             <>
             {data.map(item=>(
              <SearchItem item={item} key={item._id}/>
             ))}
             </>

            )}
            
            {/* <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
