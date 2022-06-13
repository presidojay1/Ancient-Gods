import React from 'react'
import './Footer.css';
import TeamCoverImage from "../images/Rectangle 35.png"
import verifiedImage from "../images/Group 32.png"
import profilepic from "../images/profilepic.png"
import profilepic2 from "../images/profilepic2.png"
import FooterImage1 from "../images/icon.png"
import FooterImage2 from "../images/iconn.png"
const Footer = () => {
  return (
    <>
    <section className="footerbody1">
        <div className="footerflex">
            <div className="footerflexhead">
                <h1>Meet Our</h1>
                <h1>Team Members</h1>
            </div>
            <div className="newflex1">
                <div className="footerImage">
                    <img src={TeamCoverImage} width="80%" alt="cover" />
                    <div className="group32">
                        <img src={verifiedImage} width="75%" alt="cover" />
                        <div className="profilepic">
                            <img src={profilepic} width="56%" alt="cover" />
                        </div>
                        <div className="text">
                            <h3>Dave</h3>
                            <p>Developer</p>
                        </div>
                    </div> 
                </div>

                <div className="footerImage">
                    <img src={TeamCoverImage} width="80%" alt="cover" />
                    <div className="group32">
                        <img src={verifiedImage} width="75%" alt="cover" />
                        <div className="profilepic">
                            <img src={profilepic2} width="56%" alt="cover" />
                        </div>
                        <div className="text">
                            <h3>Dave</h3>
                            <p>Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="newflex1">
                <div className="footerImage">
                    <img src={TeamCoverImage} width="80%" alt="cover" />
                    <div className="group32">
                        <img src={verifiedImage} width="75%" alt="cover" />
                        <div className="profilepic">
                            <img src={profilepic} width="56%" alt="cover" />
                        </div>
                        <div className="text">
                            <h3>Dave</h3>
                            <p>Developer</p>
                        </div>
                    </div> 
                </div>

                <div className="footerImage">
                    <img src={TeamCoverImage} width="80%" alt="cover" />
                    <div className="group32">
                        <img src={verifiedImage} width="75%" alt="cover" />
                        <div className="profilepic">
                            <img src={profilepic2} width="56%" alt="cover" />
                        </div>
                        <div className="text">
                            <h3>Dave</h3>
                            <p>Developer</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>

        <div className="footerbottom">
            <div className="footerjoin">
                <h2>Join Our Discord And Twitter</h2>
            </div>
            <div className="footerpara">
                <p>Lets show the world how strong and Influce we are. Together Build
                    new community that will make a diffrence
                </p>
            </div>
            <div className="footerImages">
                <div className="footerimagez">
                    <img src={FooterImage1} width="80%" alt="cover" />
                </div>
                <div className="footerimagez">
                    <img src={FooterImage2} width="80%" alt="cover" />
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Footer