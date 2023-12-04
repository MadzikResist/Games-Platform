import React, {useState, useEffect} from 'react';
import '../oneGameStyle.css'
import '../index.css'
import Navbar from './Navbar';
import ImageSliderOneGame from './ImageSliderOneGame';
import {SliderData} from './SliderData';
import {Pegi} from './Pegi'
import cyberpunk2 from '../cyberpunk2.jpg'
import {useParams} from "react-router-dom";
const OneGame = () => {
  const [current, setCurrent] = useState(0);
  const [oneGame, setOneGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  console.log("id:", id)
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/game/",
            {
                method: 'POST',
                body: JSON.stringify({
                    id,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );
        const oneGame = await response.json();
        setOneGame(oneGame)
        console.log("test",oneGame);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false)
    })()

  }, []);
  return(
    <div className="oneGameContainer">
      <div className="navbar">
          <Navbar />
      </div>
    {/*{listGames.map((dataObj) =>  {*/}
    {/*    return (*/}
          <>
      <div className="mainGameContainerOneGame"   >
          <div style={{width: '100%', height: '100%',  filter: 'blur(20px)', position: 'absolute', backgroundImage: `url(${cyberpunk2})`}}></div>
          <div className="oneGameTitleContainer">
            <div className="oneGameTitle">{oneGame.name}</div>
            <div className="titleInfo">
              <div className="elementInfoOneGame">
                <div className="recommendations">665</div>
                <div className="infoText">Recommendations</div>
              </div>
              <div className="elementInfoOneGame">
                <div className="recommendations">50%</div>
                <div className="infoText">Zniżki</div>
              </div>
            </div>
            <div className="oneGameDescription">After the sudden death of your father you come back to your hometown and move to a new home to live with Liza, Bella, Rachel and Susan. Will you discover their personalities and secrets and maybe even develop romantic relationships with several of the girls?</div>
            <div className="buttonsContainer">
              <div className="buyButtonOneGame">Buy 199,99 $</div>
              <div className="listButtonOneGame">♥</div>
            </div>
          </div>
          <div className="sliderContainerOneGame">
            <ImageSliderOneGame slides={SliderData} current={current} setCurrent={setCurrent}/>
            <div className="oneGameDotsContainer">
              {SliderData.map((slide, index) => {
                return(
                  <div className="dotsOneGame" style={{border: current === index ? '2px solid white' : '#242730', backgroundImage: `url(${slide.image})`
                  }} key={index} onClick={()=> setCurrent(index)}
                  />
                );
              })}
            </div>
            </div>
        </div>
      <div className="additionalInfoOneGame">
        <div className="pegiSymbol" style={{backgroundImage: `url(${Pegi[3].image})`}}></div>
        <div className="pegiInfo">{Pegi[3].name}</div>
      </div>
      <div className="containerInformationsOneGame">
        <div className="informationsText">Informations</div>
        <div className="boxInfotmationsContainer">
          <div className="boxInfotmations">Publishers:</div>
          <div className="boxInfotmations"></div>
          </div>
      </div>
          </>
      {/*  )}*/}
      {/*)}*/}

    </div>

  );
};


export default OneGame;
