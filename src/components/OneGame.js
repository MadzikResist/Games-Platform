import React, {useState} from 'react';
import '../oneGameStyle.css'
import '../index.css'
import Navbar from './Navbar';
import ImageSliderOneGame from './ImageSliderOneGame';
import {SliderData} from './SliderData';
import cyberpunk2 from '../cyberpunk2.jpg'
const OneGame = () => {
  const [current, setCurrent] = useState(0);

  return(
    <div className="oneGameContainer">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="mainGameContainerOneGame" >
          <div style={{width: '100%', height: '100%',  filter: 'blur(4px)', position: 'absolute', backgroundImage: `url(${cyberpunk2})`}}></div>
          <div className="oneGameTitleContainer">
            <div className="oneGameTitle">CYBERPUNK 2077</div>
            <div className="oneGameDescription">After the sudden death of your father you come back to your hometown and move to a new home to live with Liza, Bella, Rachel and Susan. Will you discover their personalities and secrets and maybe even develop romantic relationships with several of the girls?</div>
          </div>
          <ImageSliderOneGame slides={SliderData} current={current} setCurrent={setCurrent}/>
        </div>
      <div className="oneGameDotsContainer">
        {SliderData.map((_, index) => {
          return(
            <div className="dots" style={{backgroundColor: current === index ? '#fe4300' : '#242730'}} key={index}/>
          );
        })}
      </div>
    </div>
  );
};


export default OneGame;
