import { useState, useEffect } from "react";
import { description, endDate, propTitle, startDate, choices } from "./propdata";
import 'sf-font';
import { fetchPoll, fetchVoter, vote } from "../components/soroban";
import { retrievePublicKey, checkConnection } from "../components/freighter";

export default function Board() {
  const [total, getTotal] = useState(0);
  const [connect, getConnected] = useState("Connect");
  const [publickey, getPublicKey] = useState("Wallet not Connected..");
  const [modalmsg, setModalMsg] = useState('');

  useEffect(() => {
    if (publickey != "Wallet not Connected..") {
      getConnected('Connected!');
      fetchPoll(publickey).then((values) => {
        fetchVotes(values);
      });
    }
  }, [publickey]);


  const openModal = async () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#msgmodal")
    myModal.show()
  }

  const closeModal = async () => {
    const { Modal } = require("bootstrap");
    let modal = Modal.getInstance(document.getElementById('msgmodal'));
    modal.hide();
  }

  const loadOptions = async () => {
    let choicebutton = document.getElementById("choicebuttons");
    let _button = document.createElement("button");
    _button.onclick = () => getVoter();
    _button.id = "initiate";
    _button.innerHTML = "Initiate";
    _button.className = "w-100 btn btn-md mb-3"
    _button.style.backgroundColor = '#ab20fd'
    _button.style.color = 'white'
    choicebutton.appendChild(_button);
    choicebutton.appendChild(document.createElement("br"));
  }

  async function getVoter() {
    let voterinfo = await fetchVoter();
    let choicebuttons = document.getElementById("choicebuttons");
    let initButton = document.getElementById("initiate");
    initButton.remove();
    if (voterinfo[0] == "none") {
      for (let i = 0; i < choices.length; i++) {
        let choicedesc = choices[i]
        let _button = document.createElement("button");
        _button.value = choicedesc;
        _button.onclick = () => submitVote(choicedesc)
        _button.innerHTML = choicedesc;
        _button.className = "w-100 btn btn-md mb-3"
        _button.style.backgroundColor = '#ab20fd'
        _button.style.color = 'white'
        choicebuttons.appendChild(_button);
        choicebuttons.appendChild(document.createElement("br"));
      }
      return;
    }
    else {
      let title = document.createElement("h5");
      title.textContent = "Vote Already Submitted";
      title.style.color = 'white'
      let choice = document.createElement("h5");
      choice.textContent = "Voted: " + voterinfo[0];
      choice.style.color = 'white'
      choicebuttons.appendChild(title);
      choicebuttons.appendChild(choice);
      return;
    }
  }

  async function connectWallet() {
    setModalMsg('connecting.svg');
    openModal();
    if (await checkConnection()) {
      let publicKey = await retrievePublicKey();
      getPublicKey(publicKey);
    }
  }

  async function fetchVotes(poll) {
    let value = [poll[2], poll[0]];
    getTotal(poll[1]);
    let container = document.getElementById("choicecontainer");
    for (let i = 0; i < choices.length; i++) {
      let choicecount = value[i];
      let choicedesc = choices[i];
      if (choicecount == 0) {
        let div2 = document.createElement("div");
        let html2 = `
          <h5>${choicedesc}: ${choicecount}</h5>
          <h5>0%</h5>
        `
        div2.innerHTML = html2
        container.appendChild(div2);
        container.appendChild(document.createElement("br"));
      }
      else {
        let choicepercent = ((100 * choicecount) / poll[1]).toFixed(2)
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div2.className = "progress-bar my-0"
        div2.role = "progressbar"
        div2.style.backgroundColor = '#9D00FF';
        div2.style.textAlign = 'right';
        div2.style.width = (choicepercent / 4) + 'rem';
        let html1 = `
        <h5>${choicedesc}: ${choicecount}</h5>
        `
        let html2 = `
        <h5>${choicepercent}%</h5>
        `
        div1.innerHTML = html1
        div2.innerHTML = html2
        container.appendChild(div1);
        container.appendChild(div2);
        container.appendChild(document.createElement("br"));
      }
    }
    setModalMsg('connected.svg');
    await new Promise(r => setTimeout(r, 3000));
    loadOptions();
    closeModal();
    return;
  }

  async function submitVote(value) {
    setModalMsg("executing.svg");
    openModal();
    await vote(value);
    setModalMsg("recorded.svg");
    await new Promise(r => setTimeout(r, 3000));
    closeModal();
    location.reload()
  }

  return (
    <>
      <div id="msgmodal" className="modal fade in" data-bs-keyboard="false" data-bs-backdrop="static" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-badge py-3" style={{ background: "#000000" }}>
            <img src={modalmsg} width={300} className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="py-3 px-3">
          <div className=" text-left">
            <img className=" mb-3" src="stellarlogo.png" alt="" width="125" height="100" style={{ opacity: '0.8' }} />
            <h1 style={{ fontWeight: 'bold', textShadow: '0px 1px 10px #ffffff20' }}>{propTitle}</h1>
          </div>
          <div className="row py-0 d-flex justify-content-between">
            <div className="col-md-5 col-lg-4 order-md-last">
              <ul className="list-group mb-1">
                <li className="list-group-item d-flex justify-content-between" style={{ backgroundColor: '#00000090' }}>
                  <div>
                    <h6 className="my-0 text-white">Created by</h6>
                    <img src="n2dlogo.png" width={110}></img>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Start Date</h6>
                  </div>
                  <span className="text-black">{startDate}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">End Date</h6>
                  </div>
                  <span className="text-black">{endDate}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Total Votes</h6>
                  </div>
                  <h3 className="text-black">{total}</h3>
                </li>
              </ul>
              <form className="card border rounded" style={{ backgroundColor: '#000000' }}>
                <h5 className="d-flex justify-content-center mx-auto my-auto"
                  style={{ color: 'white', borderRadius: '2px' }}>Proposal Voting Stats</h5>
                <div className="input-group">
                  <div className="choicecontainer" id="choicecontainer" />
                </div>
              </form>
            </div>
            <div className=" mb-2">
              <div className="card">
                <h5 className="card-header">Proposal Description</h5>
                <div className="card-body">
                  <h5 className="card-title mt-3">A new community of blockchain enthusiasts.</h5>
                  <p className="card-text mb-4">{description}</p>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-3">
              <div className="row m-0 d-flex justify-content-between">
                <ul className="list-group" >
                  <li className="list-group-item  " style={{ backgroundColor: '#00000070', boxShadow: '0px 1px 5px #000' }}>
                    <div className="col-12">
                      <h4 className="mb-3" style={{ color: 'white' }}>Vote</h4>
                      <p id="displayvote" style={{ fontSize: '17px', color: 'white', fontWeight: '800' }}></p>
                      <div id="choicebuttons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="row my-auto p-2 d-flex justify-content-center">
                <ul className="list-group" >
                  <li className="list-group-item " style={{ backgroundColor: '#00000070' }}>
                    <div className="col-4">
                      <div className="w-55 d-flex btn justify-content-center" onClick={connectWallet} style={{ backgroundColor: '#634CC9', boxShadow: '0px 1px 5px #000' }}>
                        <h6 className="my-1 mx-2" style={{ color: 'white' }}>{connect}</h6>
                        <img src="freighter.svg" width={30} />
                      </div>
                      <span style={{ color: '#ffffff', fontWeight: '500', fontSize: '0.85rem' }}>{publickey}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p style={{ color: 'white' }} className="mb-1">&copy; 2024 net2dev.io</p>
          <ul className="list-inline">
          </ul>
        </footer>
      </div>
    </>
  );
}
