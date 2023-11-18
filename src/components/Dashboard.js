import Navbar from "./Navbar"

const Dashboard = () => {

    return (
    <div className="dashboardContainer">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="mainGameContainerGradientLeft"></div>
      <div className="mainGameContainer">
        <div className="mainGameContainerGradientBottom"></div>
        <div className="mainGameTitleContainer">
          <div className="specialOfferInfo">NEW OFFER</div>
          <div className="mainGameTitle">CYBERPUNK 2077</div>
          <div className="specialOffer">AFTER MATH EXPANSION <br/> PRE-ORDER OFFER!</div>
          <div className="preOrder">
            <input className="inputEmail" type="text" placeholder="Enter email" />
            <div className="preOrderButton">
              Pre-order
            </div>
          </div>
        </div>
        <div className="mainGameImage">
          <div className="mainGameContainerGradient"></div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
