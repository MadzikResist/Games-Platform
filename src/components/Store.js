import Navbar from "./Navbar";
import "../store.css";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
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
      <div className="storeContainer">
        <div className="navbar">
          <div className="mainGameContainerGradientLeft"></div>
          <Navbar />
        </div>
        <div className="gamesAndSort">
          <div className="gamesText">Games</div>
          <div className="searchStore">
            <div className="searchIconStore">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
            <input className="input" type="text" placeholder="Find game..." />
          </div>
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
