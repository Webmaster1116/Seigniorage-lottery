import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Home } from "./components/home";
import { PegLottery } from "./components/peglottery";
import { EMPMoney } from "./components/empmoney";
import { Bomb } from "./components/bomb";
import { Dibs } from "./components/dibs";
import { Tomb } from "./components/tomb";
import { Eomb } from "./components/2omb";
import { Based } from "./components/based";
import { PFTM } from "./components/pFTM";
import { Faq } from "./components/faq";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // return (
  //   <div>
  //     <Navigation />
  //     <Home data={landingPageData.Home} />
  //     <PegLottery data={landingPageData.PegLottery} />
  //     <EMPMoney data={landingPageData.EMPMoney} />
  //     <Faq data={landingPageData.Faq} />
  //     <div className="social-btn">
  //       <a href="https://discord.gg/SeigniorageClub">
  //         <img src="./img/discord.png" className="social-icon" alt="discord" />
  //       </a>
  //     </div>
  //   </div>
  // );

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home data={landingPageData.Home} />} />
        <Route
          exact
          path="/lottery"
          element={<PegLottery data={landingPageData.PegLottery} />}
        />
        <Route
          exact
          path="/emp"
          element={<EMPMoney data={landingPageData.EMPMoney} />}
        />
        <Route
          exact
          path="/bomb"
          element={<Bomb data={landingPageData.Bomb} />}
        />
        <Route
          exact
          path="/dibs"
          element={<Dibs data={landingPageData.Dibs} />}
        />
        <Route
          exact
          path="/tomb"
          element={<Tomb data={landingPageData.Tomb} />}
        />
        <Route
          exact
          path="/2omb"
          element={<Eomb data={landingPageData.Eomb} />}
        />
        <Route
          exact
          path="/based"
          element={<Based data={landingPageData.Based} />}
        />
        <Route
          exact
          path="/pFTM"
          element={<PFTM data={landingPageData.pFTM} />}
        />
        <Route exact path="/faq" element={<Faq data={landingPageData.Faq} />} />
      </Routes>
      <div className="social-btn">
        <a href="https://discord.gg/SeigniorageClub">
          <img src="./img/discord.png" className="social-icon" alt="discord" />
        </a>
      </div>
    </Router>
  );
};

export default App;
