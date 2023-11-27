import React, {useEffect, useState} from 'react';


const PopularGames = () => {
  const [listGames, setListGames] = useState({});


  // const getData  = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/games`)
  //     const json = await response.json()
  //     console.log(json)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  // useEffect(() => getData, [])
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`http://localhost:8000/games`);
        if (!response.ok) throw Error('Did not recieve expected data');
        const listGames = await response.json();
        setListGames(listGames[0]);
        setFetchError(null);
        console.log(listGames[0], 'listgames')
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
  //
  // fetch(api_url)
  //   .then((res) => res.json())
  //   .then((rows) => {
  //     console.log(rows)
  // });
  return (
    <div className="containerGamesDashboard">
      <div className="popularGames">
        <div className="shopButton">Go to the Store</div>
        {/*{listGames.map((dataObj, index) =>  {*/}
        {/*  return (*/}
        {/*    <></>*/}
        {/*  )}*/}
        {/*)}*/}
        {/*<div className="gameBlur" style={{backgroundImage: `url(${listGames.header_image})`}}></div>*/}
        {/*<div className="gameDashboard" style={{backgroundImage: `url(${listGames.header_image})`}}/>*/}
        <div className="popularGameBar">
          <div className="popularGameTitle">{listGames.name}</div>
          {/*<div className="popularGamePublisher">{listGames.publishers}</div>*/}
        </div>
      </div>
    </div>
  );
}

export default PopularGames;
