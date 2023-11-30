import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import {useState} from 'react';
import PopularGames from "./PopularGames";
const Dashboard = () => {
  const [current, setCurrent] = useState(0);


  return (
    <div className="dashboardContainer">
      <div className="navbar">
        <div className="mainGameContainerGradientLeft"></div>
        <Navbar />
      </div>
      <div className="mainGameContainer">
        <div className="mainGameContainerGradientLeft"></div>
        <div className="mainGameContainerGradientBottom"></div>
        <div className="mainGameTitleContainer">
          <div className="specialOfferInfo">NEW OFFER</div>
          <div className="mainGameTitle">CYBERPUNK 2077</div>
          <div className="specialOffer">
            AFTER MATH EXPANSION <br /> PRE-ORDER OFFER!
          </div>
          <div className="preOrder">
            <input
              className="inputEmail"
              type="text"
              placeholder="Enter email"
            />
            <div className="preOrderButton">Pre-order</div>
          </div>
        </div>
        <ImageSlider slides={SliderData} current={current} setCurrent={setCurrent}/>
      </div>
      <div className="popularGamesDots">
        <div className="popularGameTextPad">
          <div className="popularGamePad">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 640 512"
              fill="white"
            >
              <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
            </svg>
          </div>
          <div className="popularGamesText">POPULAR GAMES</div>
        </div>
        <div className="dotsContainer">
        {SliderData.map((_, index) => {
          return(
            <div className="dots" style={{backgroundColor: current === index ? '#fe4300' : '#242730'}} key={index}/>
          );
        })}
        </div>
      </div>
      <PopularGames/>
    </div>
  );
};

export default Dashboard;
