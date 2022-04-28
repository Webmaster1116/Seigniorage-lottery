import { Fade } from "react-reveal";

export const Dibs = (props) => {
  return (
    <div id="empmoney" className="text-center">
      <div className="container">
        <div className="section-title">
          <div className="title-border">
            <h2>Dibs Money</h2>
          </div>
          <h3>BSC</h3>
        </div>
        <Fade top>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                    <div className="title-border">
                      <p>{d.title1}</p>
                      <p>{d.title2}</p>
                      <p>{d.title3}</p>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </Fade>

        <div className="row">
          <Fade top>
            <div className="col-xs-12 col-md-12">
              <div className="content-border">
                <h3>Your Balance: 6002 EMP [Deposit] [Withdraw]</h3>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="col-xs-12 col-md-6">
              <div className="content-border card-height">
                <div className="emp-img">
                  <img src="./img/2dibs.png" className="emp" alt="emp" />
                </div>
                <p>Last Entry: Win/Lose</p>
                <p>You Won: 0/39EMP</p>
                <p>0/39 EMP was Added to Your Deposit!</p>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-xs-12 col-md-6">
              <div className="content-border card-height">
                <div className="emp-img">
                  <img src="./img/dibs.png" className="emp" alt="emp" />
                </div>
                <p>20 EMP Entry Pool</p>
                <p>[Enter Raffle]</p>
                <p>(-20 EMP from Your Deposit)</p>
              </div>
            </div>
          </Fade>
          <div className="col-xs-12 col-md-12">
            <div className="content-border">
              <p>Lottery History (20 EMP Pool): Round (3) (Dropdown Menu)</p>
            </div>
          </div>
          <Fade top>
            <div className="col-xs-12 col-md-12">
              <div className="content-border">
                <p>0x473A838fefc899f548c91bFfCFb35602060cf767 – Win</p>
                <p>0x473A838fefc899f548c91bFfCFb35602060cf767 – Lose</p>
                <p>0x473A838fefc899f548c91bFfCFb35602060cf767 – Win</p>
                <p>0x473A838fefc899f548c91bFfCFb35602060cf767 – Lose</p>
                <p>0x473A838fefc899f548c91bFfCFb35602060cf767 – Win</p>
                <p>0x473A838fefc899f548c91bFfCFb35602060cf767 – Lose</p>
                <p>0x473A838fefc899f548c91bFfCFb35602060cf767 – Win</p>
                <p>0x473A838fefc899f548c91bFfCFb35602060cf767 – Lose</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
