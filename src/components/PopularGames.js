import React, {useEffect, useState} from 'react';
import loading from "../loading.gif"
import {Link} from "react-router-dom";

const PopularGames = () => {
  const [listGames, setListGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://games-platform-api.onrender.com/games");
        const data = await response.json();
        setListGames(data)
        console.log("test",data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false)
    })()

  }, []);

  if(isLoading){
    return <img src={loading} alt="Loading..." style={{width: '200px', paddingLeft: "40px" }}
    />
  }
  return (
    <div className="containerGamesDashboard">
    {listGames.map((dataObj) =>  {
    return (
        <Link to={`/game/${dataObj.id}`} style={{textDecoration: 'none'}}>
          <div className="popularGames"  key={dataObj.id}>
              <div className="shopButton">Go to the Store</div>
                <div className="gameBlur" style={{backgroundImage: `url(${dataObj.header_image})`}}></div>
                <div className="gameDashboard" style={{backgroundImage: `url(${dataObj.header_image})`}}/>
                <div className="popularGameBar">
                  <div className="popularGameTitle">{dataObj.name}</div>
                  <div className="popularGamePublisher">{dataObj.publishers}</div>
                </div>
          </div>
        </Link>
    )}
    )}
    </div>
  );
}

export default PopularGames;
