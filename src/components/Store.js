import Navbar from "./Navbar";
import "../store.css";
import { useState } from "react";
import DropDown from "./DropDown";
import PopularGames from "./PopularGames";
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
          <div className="games"></div>
        </div>
      </div>
    </div>
  );
};
export default Store;
