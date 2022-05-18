import React from 'react'
import whitelist from '../images/whitelist.png'
import cardone from '../images/display card 2.png'
import cardtwo from '../images/display card 3.png'
import cardthree from '../images/display card 4.png'
import './Second.css';

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
            <img src={cardone} width="85%" alt="" />
            <div className="insideImage">
              <img width="80%" alt="" />
            </div>
            
          </div>
          <div className="cardtwos">
            <img src={cardtwo} width="85%" alt="" />
            <div className="insideImage">
              <img width="80%" alt="" />
            </div>
            
          </div>

          <div className="cardthrees">
            <img src={cardthree} width="95%" alt="" />
            <div className="insideImage">
              <img width="90%" alt="" />
            </div>
            
          </div>

          <div className="cardtwos">
            <img src={cardtwo} width="85%" alt="cover" />
            <div className="insideImage">
              <img width="80%" alt="" />
            </div>
            
          </div>   
          <div className="cardones">
            <img src={cardone} width="85%" alt="cover" />
            <div className="insideImage">
              <img width="80%" alt="" />
            </div>
            
          </div>
          </div>

     </section>
    </>

  )
}

export default Second