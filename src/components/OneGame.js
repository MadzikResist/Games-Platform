import React, { useState, useEffect } from "react";
import "../oneGameStyle.css";
import "../index.css";
import Navbar from "./Navbar";
import ImageSliderOneGame from "./ImageSliderOneGame";
import { Pegi } from "./Pegi";
import { useParams } from "react-router-dom";
import loading from "../loading.gif";
const OneGame = () => {
  const [current, setCurrent] = useState(0);
  const [oneGame, setOneGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://games-platform-api.onrender.com/game/", {
          method: "POST",
          body: JSON.stringify({
            id,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const oneGame = await response.json();
        setOneGame(oneGame);
        console.log("test", oneGame);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    })();
  }, [id]);
  const fitAge = (required_age) => {
    if (required_age > 3 && required_age < 8) {
      return Pegi["7"];
    }
    if (required_age > 7 && required_age < 13) {
      return Pegi["12"];
    }
    if (required_age > 12 && required_age < 17) {
      return Pegi["16"];
    }
    if (required_age >= 0 && required_age < 4) {
      return Pegi["3"];
    }
    return Pegi["18"];
  };
  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0a0d16",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={loading} alt="Loading..." style={{ width: "200px" }} />
      </div>
    );
  }
  return (
    <div className="oneGameContainer">
      <div className="navbar">
        <div className="mainGameContainerGradientLeft"></div>
        <Navbar />
      </div>
      <>
        <div className="mainGameContainerOneGame">
          <div
            style={{
              width: "100%",
              height: "100%",
              filter: "blur(20px) brightness(50%)",
              position: "absolute",
              backgroundImage: `url(${oneGame.screenshots[0].path_thumbnail})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <div className="oneGameTitleContainer">
            <div className="oneGameTitle">{oneGame.name}</div>
            <div
              className="titleInfo"
              style={{ width: oneGame.is_free ? "80%" : "50%" }}
            >
              {oneGame.is_free ? (
                <div className="elementInfoOneGame">
                  <div className="recommendations">Free</div>
                  <div className="infoText">Play for free</div>
                </div>
              ) : null}
              <div className="elementInfoOneGame">
                <div className="recommendations">
                  {oneGame.recommendations.total}
                </div>
                <div className="infoText">Recommendations</div>
              </div>
              <div className="elementInfoOneGame">
                <div className="recommendations">50%</div>
                <div className="infoText">Zniżki</div>
              </div>
            </div>
            <div className="oneGameDescription">
              {oneGame.short_description}
            </div>
            <div className="buttonsContainer">
              <div className="buyButtonOneGame">Buy 199,99 $</div>
              <div className="listButtonOneGame">♥</div>
            </div>
          </div>
          <div className="sliderContainerOneGame">
            <ImageSliderOneGame
              current={current}
              setCurrent={setCurrent}
              oneGame={oneGame}
            />
            <div className="oneGameDotsOuterContainer">
              <div className="oneGameDotsContainer">
                {oneGame.screenshots.map((slide, index) => {
                  return (
                    <div
                      className="dotsOneGame"
                      style={{
                        border:
                          current === index ? "2px solid white" : "#242730",
                        backgroundImage: `url(${slide.path_thumbnail})`,
                        transform:
                          current > 5
                            ? `translateX(-${(current - 5) * 116}px)`
                            : "translateX(0)",
                      }}
                      key={index}
                      onClick={() => setCurrent(index)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="additionalInfoOneGame">
          <div
            className="pegiSymbol"
            style={{
              backgroundImage: `url(${fitAge(oneGame.required_age).image}`,
            }}
          ></div>
          <div className="pegiInfo">{fitAge(oneGame.required_age).name}</div>
        </div>
        <div className="containerInformationsOneGame">
          <div className="informationsText">Informations</div>
          <div className="boxInfotmationsContainer">
            <div className="boxInfotmations">
              <div className="elementBoxOneGameContainer">
                <div className="elementBoxOneGame">
                  <div className="oneGameTitleInfo">Publisher:</div>
                  <div className="oneGameFullDesc">{oneGame.publishers[0]}</div>
                </div>
                <div className="elementBoxOneGame">
                  <div className="oneGameTitleInfo">Release Date:</div>
                  <div className="oneGameFullDesc">
                    {oneGame.release_date.date}
                  </div>
                </div>
                <div className="elementBoxOneGame">
                  <div className="oneGameTitleInfo">Available space:</div>
                  <div className="oneGameFullDesc">26,1 GB</div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  width: "100%",
                  height: "60%",
                  bottom: 0,
                  left: 0,
                  background:
                    "linear-gradient(to bottom, rgba(10, 13, 22, 0.1), rgba(10, 13, 22, 0.6) )",
                  display: showMore ? "none" : "block",
                }}
              />
              <div
                className="oneGameFullDescBox"
                dangerouslySetInnerHTML={{ __html: oneGame.about_the_game }}
                style={{
                  height: showMore ? "100%" : "300px",
                  overflow: "hidden",
                }}
              />
              <div
                className="showMoreButon"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "READ LESS" : "READ MORE..."}
              </div>
            </div>
            <div className="boxInfotmationsPlatform">
              <div className="elementBoxOneGameContainerPlatform">
                <div className="informationsTextBox">Categories</div>
                <div className="elementBoxOneGamePlatform">
                  {oneGame?.categories?.map((category, index) => {
                    return (
                      <div className="boxElementPlatform">
                        {category?.description}
                      </div>
                    );
                  })}
                </div>
                <div className="informationsTextBox">Genres</div>
                <div className="elementBoxOneGamePlatform">
                  {oneGame.genres.map((genre, _) => {
                    return (
                      <div className="boxElementPlatform">
                        {genre.description}
                      </div>
                    );
                  })}
                </div>
                <div className="informationsTextBox">Windows requirements</div>
                <div
                  className="oneGameFullDescBox"
                  dangerouslySetInnerHTML={{
                    __html: oneGame.pc_requirements.minimum,
                  }}
                />
                <div
                  className="oneGameFullDescBox"
                  dangerouslySetInnerHTML={{
                    __html: oneGame.pc_requirements.recommended,
                  }}
                />
                {oneGame.platforms.mac ? (
                  <>
                    <div className="informationsTextBox">Mac requirements</div>
                    <div
                      className="oneGameFullDescBox"
                      dangerouslySetInnerHTML={{
                        __html: oneGame?.mac_requirements?.minimum,
                      }}
                    />
                    <div
                      className="oneGameFullDescBox"
                      dangerouslySetInnerHTML={{
                        __html: oneGame?.mac_requirements?.recommended,
                      }}
                    />
                  </>
                ) : (
                  <></>
                )}
                <div className="informationsTextBox">Supported Languages</div>
                <div
                  className="oneGameFullDescBox"
                  dangerouslySetInnerHTML={{
                    __html: oneGame.supported_languages,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default OneGame;
