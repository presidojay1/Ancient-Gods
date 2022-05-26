import React from 'react'
import whitelist from '../images/whitelist.png'
import cardone from '../images/display card 2.png'
import cardtwo from '../images/display card 3.png'
import cardthree from '../images/display card 4.png'
import './Second.css';
import HorizontalScroll from 'react-scroll-horizontal'

const Second = () => {
  return (
    <>
     <section>
        <div className="getonwhistle">
             <h4>Get on the whiteList</h4>
             <div className="whistleimage">
                <img src={whitelist} width="125%" alt="" />
             </div>  
        </div>
        <div className="Firstcard">
          <div className="cardones">
            <img src={cardtwo}alt="" />
            <div className="insideImage">
              <img alt="" />
            </div>
            
          </div>
          <div className="cardtwos">
            <img src={cardtwo} alt="" />
            <div className="insideImage">
              <img alt="" />
            </div>
            
          </div>

          <div className="cardthrees">
            <img src={cardtwo} alt="" />
            <div className="insideImage">
              <img alt="" />
            </div>
            
          </div>

          <div className="cardtwos">
            <img src={cardtwo} alt="cover" />
            <div className="insideImage">
              <img alt="" />
            </div>
            
          </div>   
          <div className="cardones">
            <img src={cardtwo} alt="cover" />
            <div className="insideImage">
              <img alt="" />
            </div>
            
          </div>
          </div>

     </section>
    </>

  )
}

export default Second