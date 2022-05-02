import React, { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Fade } from "react-reveal";

export const Faq = (props) => {
  return (
    <div id="faq">
      <div className="container">
        <div className="section-title text-center">
          <div className="title-border">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <Fade bottom>
          <div className="row">
            <Fragment>
              <Accordion>
                {props.data
                  ? props.data.map((d, i) => (
                      <Accordion.Item
                        eventKey={`${i}`}
                        className="title-border"
                      >
                        <Accordion.Header>{d.question}</Accordion.Header>
                        <Accordion.Body>{d.answer}</Accordion.Body>
                      </Accordion.Item>
                    ))
                  : "Loading..."}
              </Accordion>
            </Fragment>
          </div>
        </Fade>
      </div>
    </div>
  );
};
