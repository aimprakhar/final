import React from 'react'
import useFetch from '../hooks/useFetch';
import "./propertyList.css"


export const PropertyList = () => {

     const {data,loading,error}=useFetch("/hotels/countByTypee");
    // console.log("from here")
    // console.log(data);
    // console.log(data);
    const images=[
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300",


];
const type2=["hotel","apartment","villa","resort","Cabin"];
const counte=[5,6,8,9,0];


  return (
    <div className='pList'>
        {
        loading?("loading"):(
            <> {
                images.map((img,i)=>(

                    <div className="pListItem" key={i}>
                    <img src={img} alt="" className="pListImg" />
                    <div className="pListTitles">
                        <h4>{type2[i]}</h4>
                        <h5>{counte[i]} {type2[i]}</h5>
                    </div>
                    </div>

                ))
       
           }
        </>
        )}
        {/* ------------------------------------------------------- */}
        </div>
  )
}
