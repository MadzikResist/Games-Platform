import Navbar from "./Navbar";
import "../store.css";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import PopularGames from "./PopularGames";
import loading from "../loading.gif";
import { Link } from "react-router-dom";
const Store = () => {
  const options = [
    { value: "recommendations", label: "Recommendations" },
    { value: "titleAZ", label: "Title A-Z" },
    { value: "titleZA", label: "Title Z-A" },
  ];
  const genres = [
    { value: "geen", label: "geen" },
    { value: "titleAZ", label: "Title A-Z" },
    { value: "titleZA", label: "Title Z-A" },
    { value: "titleZA", label: "Title Z-A" },
    { value: "titleZA", label: "Title Z-A" },
  ];
  const [listGames, setListGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/store");
        const data = await response.json();
        setListGames(data);
        console.log("test", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <img
        src={loading}
        alt="Loading..."
        style={{ width: "200px", paddingLeft: "40px" }}
      />
    );
  }

  return (
    <div className="oneGameContainer">
      <div className="storeContainer">
        <div className="navbar">
          <div className="mainGameContainerGradientLeft"></div>
          <Navbar />
        </div>
        <div className="gamesAndSort">
          <div className="gamesText">Games</div>
          <div className="sortSelect">
            <div className="sortByText">Sort by</div>
            <DropDown options={options} />
          </div>
        </div>
        <div className="filtersGames">
          <div className="filters">
            Filters
            <div className="hr"></div>
            <div className="genres">Genre</div>
            <DropDown options={genres} />
            <div className="genres" style={{ marginTop: "32px" }}>
              Category
            </div>
            <DropDown options={genres} />
          </div>
          <div className="games">
            <div className="containerGamesStore">
              {listGames.map((dataObj) => {
                return (
                  <Link
                    to={`/game/${dataObj.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="popularGames" key={dataObj.id}>
                      <div className="shopButton">Go to the Store</div>
                      <div
                        className="gameBlur"
                        style={{
                          backgroundImage: `url(${dataObj.header_image})`,
                        }}
                      ></div>
                      <div
                        className="gameDashboard"
                        style={{
                          backgroundImage: `url(${dataObj.header_image})`,
                        }}
                      />
                      <div className="popularGameBar">
                        <div className="popularGameTitle">{dataObj.name}</div>
                        <div className="popularGamePublisher">
                          {dataObj.publishers}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Store;
