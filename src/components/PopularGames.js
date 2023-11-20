import React, {useEffect, useState} from 'react';


const PopularGames = () => {
  const api_url = 'https://store.steampowered.com/api/appdetails?appids=1091500';
  const [listGames, setListGames] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(api_url);
        if (!response.ok) throw Error('Did not recieve expected data');
        const listGames = await response.json();
        console.log(listGames)
        setListGames(listGames['1091500'].data.name);
        setFetchError(null);
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
    <div>
      <p>{listGames}</p>
    </div>
  );
}

export default PopularGames;
