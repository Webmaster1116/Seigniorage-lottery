import { Fade } from "react-reveal";

export const Home = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <Fade left>
                <div className="col-md-5 intro-text center">
                  <img src="./img/icon.png" className="img-border" alt="tent" />
                </div>
              </Fade>
              <Fade right>
                <div className="col-md-7 intro-text">
                  <div className="content-border">
                    <h2>{props.data ? props.data.title1 : "Loading"}</h2>
                    <p>
                      {props.data ? props.data.paragraph1.line1 : "Loading"}
                    </p>
                    <p>
                      {props.data ? props.data.paragraph1.line2 : "Loading"}
                    </p>
                    <p>
                      {props.data ? props.data.paragraph1.line3 : "Loading"}
                    </p>
                    <p>
                      {props.data ? props.data.paragraph1.line4 : "Loading"}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <Fade top>
              <div className="row">
                {props.data
                  ? props.data.content.map((d, i) => (
                      <div
                        key={`${d.title}-${i}`}
                        className="col-md-4 intro-text"
                      >
                        <div className="content-border center content-height">
                          <h2>{props.data ? d.title : "Loading"}</h2>
                          <div>
                            <img
                              src={props.data ? d.img : "Loading"}
                              className="home-card-img"
                              alt="tent"
                            />
                          </div>
                          <p>{props.data ? d.paragraph.line1 : "Loading"}</p>
                          <p>{props.data ? d.paragraph.line2 : "Loading"}</p>
                          <p>{props.data ? d.paragraph.line3 : "Loading"}</p>
                          <p>{props.data ? d.paragraph.line4 : "Loading"}</p>
                        </div>
                      </div>
                    ))
                  : "Loading..."}
              </div>
            </Fade>
            <Fade bottom>
              <div className="content-border">
                <div className="intro-text">
                  <h2>{props.data ? props.data.title3 : "Loading"}</h2>
                  <br></br>
                  <h3>
                    {props.data ? props.data.paragraph3.title1 : "Loading"}
                  </h3>
                  <p>{props.data ? props.data.paragraph3.line1 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph3.line2 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph3.line3 : "Loading"}</p>
                  <br></br>
                  <h3>
                    {props.data ? props.data.paragraph3.title2 : "Loading"}
                  </h3>
                  <p>{props.data ? props.data.paragraph3.line4 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph3.line5 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph3.line6 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph3.line7 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph3.line8 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph3.line9 : "Loading"}</p>
                  <br></br>
                  <p>{props.data ? props.data.paragraph3.line10 : "Loading"}</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </header>
  );
};
