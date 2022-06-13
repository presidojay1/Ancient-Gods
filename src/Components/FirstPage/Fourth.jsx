import React from 'react'
import './Fourth.css';
import BrightImage from "../images/Group 23.png"


const Fourth = () => {
  return (
    <>
      <section className="fourthbody">
        <div className="headerparagraph">
          <p>publishing software like Aldus PageMaker including versions of kuhgfddfghjkLorem Ipsum. serhybhg s </p>
          
        </div>
        <h1>We Provide Our Best Service</h1>
        <div className="Firstcar">
          
          <div className="cardon">
            <img src={BrightImage} width="85%" alt="cover" />
            <h5>Uniqueness</h5>
            <p>The formation of special item perosnality and verification of propitorship make non-fungible tokens a solid apparatus</p>
           
          </div>
          <div className="cardtw">
            <img src={BrightImage} width="85%" alt="cover" />
            <h5>Resale & Royalty</h5>
            <p>NFT'S empowerr total straightforwardness in the item deal process, permitting the makers and purchasers to follow</p>
          </div>

          <div className="cardthr">
            <img src={BrightImage} width="85%" alt="cover" />
            <h5>Perpertual Quality</h5>
            <p>considering the NFT token advancement happens on a blockchain stages, the high security code makes it secure and strong</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default Fourth