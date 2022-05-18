import React from 'react'
import './Fifth.css';
import RoadMap1 from "../images/roadmap card 1.png"
import RoadMap2 from "../images/roadmap card 5.png"
import RoadMap3 from "../images/roadmap card 3.png"
import RoadMap4 from "../images/roadmap card 4.png"
const Fifth = () => {
  return (
    <>
    <section className='fifthbody'>
      <div className="header">
        <h2>RoadMap</h2>
      </div>

      <div className="phaseflex">
        <div className="phaseone">
          <h2>Phase 1</h2>
        </div>
        <div className="phasetwo">
          <h2>Phase 2</h2>
        </div>
      </div>

      <div className="imageflex">
        <div className="imageone">
          <img src={RoadMap1} width="85%" alt="cover" />
        </div>
        <div className="imagetwo">
          <img src={RoadMap2} width="85%" alt="cover" />
        </div>
      </div>

      <div className="listItemsflex">
        <div className="listitem1">
          <ul>
            <li><p>Creation of the landing page representing our values</p></li>
            <li><p>Opening pre-sale of 100 NFTs</p></li>
            <li><p>Each Nft member will receive an exclusive close chat invitation</p></li>
            <li><p>Giveaway of 4 Nfts for Discord Members</p></li>
          </ul>
        </div>
        <div className="listitems2">
          <ul>
            <li><p>Creation of the landing page representing our values</p></li>
            <li><p>Opening pre-sale of 100 NFTs</p></li>
            <li><p>Each Nft member will receive an exclusive close chat invitation</p></li>
            <li><p>Giveaway of 4 Nfts for Discord Members</p></li>
          </ul>
        </div>
      </div>

      <div className="phaseflextwo">
        <div className="phasethree">
          <h2>Phase 3</h2>
        </div>
        <div className="phasefour">
          <h2>Phase 4</h2>
        </div>
      </div>

      <div className="imageflextwo">
        <div className="imagethree">
          <img src={RoadMap3} width="85%" alt="cover" />
        </div>
        <div className="imagefour">
          <img src={RoadMap4} width="85%" alt="cover" />
        </div>
      </div>

      <div className="listItemsflextwo">
        <div className="listitem3">
          <ul>
            <li><p>Creation of the landing page representing our values</p></li>
            <li><p>Opening pre-sale of 100 NFTs</p></li>
            <li><p>Each Nft member will receive an exclusive close chat invitation</p></li>
            <li><p>Giveaway of 4 Nfts for Discord Members</p></li>
          </ul>
        </div>
        <div className="listitems4">
          <ul>
            <li><p>Creation of the landing page representing our values</p></li>
            <li><p>Opening pre-sale of 100 NFTs</p></li>
            <li><p>Each Nft member will receive an exclusive close chat invitation</p></li>
            <li><p>Giveaway of 4 Nfts for Discord Members</p></li>
          </ul>
        </div>
      </div>

    </section>
    </>
  )
}

export default Fifth