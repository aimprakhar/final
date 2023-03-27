import React from 'react'
import { days } from '../../Pages/hotels/Hotels'
import { Header } from '../header/Header'
import { Navbar } from '../Navbar'
import "./paymentPage.css"
import img from"./qr.jpg"

export const PaymentPage = () => {
  return (
    <>
   <Navbar/>
   <Header type="list"/>
    <div className="paymentPage" >
        

        <img src={img} alt="" className="payImg" />
        
           <button className='payy'>
            Scan the QR and Pay Rs.50 to Confirm the Booking and rest amount is payable at hotel
           </button>

        </div>

        </>

  )
}
