import React from 'react'
import './FirstPage.css';
import NavBar from '../NavBar/NavBar';
import firstImage from "../images/card 2.png"
import secondImage from "../images/card 1.png"
import InsideImage from "../images/image1.png"
import InsidetwoImage from "../images/image2.png"
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Footer from './Footer';
import '../query/Queries.css';
const FirstPage = () => {
  return (
    <>
    <section className='toppage'>
      <div className="navbardiv">
        <NavBar />
      </div>
      <h1>Ancient Gods</h1>
      <div className="Firstcards">
        <div className="cardone">
          <img src={firstImage} width="85%" alt="cover" />
          <div className="insideImage">
            <img  src={InsideImage} width="78%" alt="cover" />
          </div>
          
        </div>
        <div className="cardtwo">
          <img src={secondImage} width="85%" alt="cover" />
          <div className="insideImage">
            <img src={InsidetwoImage} width="78%" alt="cover" />
          </div>
          
        </div>
        <div className="cardthree">
          <img src={secondImage} width="95%" alt="cover" />
          <div className="insideImage">
            <img  src={InsidetwoImage} width="88%" alt="cover" />
          </div>
          
        </div>
        <div className="header">
          <p>NFT DROP</p>
          <p>Coming SOON</p>
        </div>

      </div>
    </section>
    <div className="secondbody">
      <Second />
    </div>

    <div className="Thirdbody">
      <Third />
    </div>

    <div className="Fourthbody">
      <Fourth />
    </div>
    
    <div className="Fifthbody">
      <Fifth />
    </div>

    <div className="Footer">
      <Footer />
    </div>

    </>
  )
}

export default FirstPage