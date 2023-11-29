import React, {useEffect, useState} from 'react';
import loading from "../loading.gif"

const PopularGames = () => {
  const [listGames, setListGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/games");
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
        <div className="popularGames"  key={dataObj.id}>
          <div className="shopButton">Go to the Store</div>
            <div className="gameBlur" style={{backgroundImage: `url(${dataObj.header_image})`}}></div>
            <div className="gameDashboard" style={{backgroundImage: `url(${dataObj.header_image})`}}/>
            <div className="popularGameBar">
              <div className="popularGameTitle">{dataObj.name}</div>
              {/*<div className="popularGamePublisher">{listGames.publishers}</div>*/}
            </div>
      </div>
    )}
    )}
    </div>
  );
}

export default PopularGames;
