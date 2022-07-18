import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Homepage.css"
import sale from "../../images/Homepage/sale.jpg"
import electronics from "../../images/Homepage/electronics.jpg"
import men from "../../images/Homepage/men.jpg"
import jewe from "../../images/Homepage/jewe.jpg"
import women from "../../images/Homepage/women.jpg"



// const [homeData, setHomeData] = useState{[]} 



function Homepage() {
  return (
    <>
      <Navbar />
      <div className='Home_container'>
                <img src={sale} className="ban_img"/>
                <p className='header' >Shopping Starts Here..</p>
                <div className='topclass'>

                <div className='section_card' >
                    <div className='section_card_img'>
                        <img src={electronics} alt="logo" />
                        <p className='section_card_p'>ELECTRONICS</p>
                    </div></div>
                    
                    <div className='section_card'>
                          <div className='section_card_img'>
                            <img src={men} alt="logo" />
                            <p className='section_card_p' >MENS'S CLOTHING</p>
                        </div></div>
                    
                    <div className='section_card'>
                        <div className='section_card_img'>
                            <img src={jewe} alt="logo" />
                             <p className='section_card_p'>JEWELLERY</p>
                        </div>
                    </div>
                    <div className='section_card'>
                    <div className='section_card_img'>
                        <img src={women} alt="logo" />

                        <p className='section_card_p'>WOMEN'S CLOTHING</p></div>
                    </div>
                </div>
                </div>
        </>
        )
}

        export default Homepage