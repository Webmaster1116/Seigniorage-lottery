import React, { useState } from "react";
import { Fade } from "react-reveal";
import Select from "react-select";
import Modal from "react-modal";

const options = [
  { value: 10, label: "10 Bomb" },
  { value: 20, label: "20 Bomb" },
  { value: 30, label: "30 Bomb" },
  { value: 40, label: "40 Bomb" },
];

const options1 = [
  { value: 1, label: "Round 1" },
  { value: 2, label: "Round 2" },
  { value: 3, label: "Round 3" },
  { value: 4, label: "Round 4" },
  { value: 5, label: "Round 5" },
  { value: 6, label: "Round 6" },
];

const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Bomb = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 20,
    label: "20 Bomb",
  });

  const [selectedOption1, setSelectedOption1] = useState({
    value: 3,
    label: "Round 3",
  });

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [modalIsOpen1, setIsOpen1] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#fff";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#fff";
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  return (
    <div id="empmoney" className="text-center">
      <div className="container">
        <div className="section-title">
          <div className="title-border">
            <h2>Bomb Money</h2>
          </div>
          <h3>BSC</h3>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="title-border">
              <p>Ticket Price:</p>
              <p>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="title-border">
              <p>Round 7</p>
              <p>Time Left to Enter 56:49</p>
              <p>Drawing in 52:49</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="title-border">
              <p>Winners Get: 39 Bomb</p>
              <p>Win Chance: 50%</p>
              <p>Players: 162</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="title-border">
              <p>Token to be Burnt</p>
              <p>126</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="title-border">
              <p>Token Burnt Last Week</p>
              <p>1273</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="title-border">
              <p>Token Burnt So Far</p>
              <p>37896</p>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-md-12">
          <div className="content-border modal-btns">
            <h3>Your Balance: 6002 Bomb</h3>
            <div>
              <button className="modal-btn" onClick={openModal}>
                Deposit
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Deposit Modal"
              >
                <div className="modal-title">
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Deposit Bomb
                  </h2>
                </div>
                <div className="emp-modal-content">
                  <p>0.0000 Bomb Available</p>
                  <div class="inputWithButton">
                    <input type="text" />
                    <button>Max</button>
                  </div>
                </div>
                <button className="confirm-btn">Confirm</button>
              </Modal>
            </div>
            <div>
              <button className="modal-btn" onClick={openModal1}>
                Withdraw
              </button>
              <Modal
                isOpen={modalIsOpen1}
                onAfterOpen={afterOpenModal1}
                onRequestClose={closeModal1}
                style={customStyles}
                contentLabel="Deposit Modal"
              >
                <div className="modal-title">
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Withdraw Bomb
                  </h2>
                </div>
                <div className="emp-modal-content">
                  <p>0.0000 Bomb Available</p>
                  <div class="inputWithButton">
                    <input type="text" />
                    <button>Max</button>
                  </div>
                </div>
                <button className="confirm-btn">Confirm</button>
              </Modal>
            </div>
          </div>
        </div>
        <Fade left>
          <div className="col-xs-12 col-md-6">
            <div className="content-border card-height">
              <div className="emp-img">
                <img src="./img/2bombs.png" className="emp" alt="emp" />
              </div>
              <p>Last Entry: Win/Lose</p>
              <p>You Won: 0/39 Bomb</p>
              <p>0/39 Bomb was Added to Your Deposit!</p>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xs-12 col-md-6">
            <div className="content-border card-height">
              <div className="emp-img">
                <img src="./img/bomb.png" className="emp" alt="emp" />
              </div>
              <p>20 Bomb Entry Pool</p>
              <p>
                <button className="raffle-btn">Enter Raffle</button>
              </p>
              <p>(-20 Bomb from Your Deposit)</p>
            </div>
          </div>
        </Fade>
        <div className="col-xs-12 col-md-12">
          <div className="content-border">
            <div className="select-group">
              <p>Lottery History: </p>
              <p>
                <Select
                  defaultValue={selectedOption1}
                  onChange={setSelectedOption1}
                  options={options1}
                />
              </p>
            </div>
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
  );
};
