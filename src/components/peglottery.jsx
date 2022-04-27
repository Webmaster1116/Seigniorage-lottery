import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export const PegLottery = (props) => {
  return (
    <div id="peglottery" className="text-center">
      <div className="container">
        <div className="section-title peg-title">
          <div className="title-border">
            <h2>PEG LOTTERY</h2>
          </div>
          <h3>BSC</h3>
        </div>
        <Fade right>
          <div className="row peg-cards">
            {props.data
              ? props.data.BSC.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-md-3 col-xs-6">
                    <div className="peg-card">
                      <Link to={d.link}>
                        <img src={d.bsc} className="emp" alt="emp" />
                        <div className="content-border emp-btn">
                          <h4>{d.title}</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </Fade>
        <div className="peg-title">
          <h3>FTM</h3>
        </div>
        <Fade left>
          <div className="row peg-cards">
            {props.data
              ? props.data.FTM.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-md-3 col-xs-6">
                    <div className="peg-card">
                      <Link to={d.link}>
                        <img src={d.ftm} className="emp" alt="emp" />
                        <div className="content-border emp-btn">
                          <h4>{d.title}</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </Fade>
      </div>
    </div>
  );
};
