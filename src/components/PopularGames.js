import React, {useEffect, useState} from 'react';


const PopularGames = () => {
  const api_url = 'https://store.steampowered.com/api/appdetails?appids=1091500';
  const [listGames, setListGames] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(api_url);
        if (!response.ok) throw Error('Did not recieve expected data');
        const listGames = await response.json();
        setListGames(listGames['1091500'].data);
        setFetchError(null);
        console.log(listGames, 'listgames')
      } catch (err){
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchGames())();
    }, 2000)
  }, []);

  // fetch(api_url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  // });
  return (
    <div className="containerGamesDashboard">
      <div className="popularGames">
        <div className="gameBlur" style={{backgroundImage: `url(${listGames.header_image})`}}>
          <div className="gameDashboard" style={{backgrTioundImage: `url(${listGames.header_image})`}}/>
        </div>
        <div className="popularGameBar">
          <div className="popularGametle">{listGames.name}</div>
          <div className="popularGamePublisher">{listGames.publishers}</div>
        </div>
      </div>

    </div>
  );
}

export default PopularGames;
