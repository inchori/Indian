import React, { Component } from "react";
import IndianContract from "./contracts/Indian.json";
import getWeb3 from "./utils/getWeb3";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indianInstance: null,
      myAccount: null,
      myGame: 0,
      web3: null
    };
  }

  componentWillMount() {
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });

        this.instantiateContract();
      })
      .catch(() => {
        console.log("Error finding web3.");
      });
  }

  instantiateContract() {
    const contract = require("truffle-contract");
    const indian = contract(IndianContract);
    indian.setProvider(this.state.web3.currentProvider);

    this.state.web3.eth.getAccounts((error, accounts) => {
      if (!error) {
        indian.deployed().then(instance => {
          this.setState({ indianInstance: instance, myAccount: accounts[0] });
          this.updateMyGames();
        });
      }
    });
  }

  buyGame() {
    this.state.indianInstance.buyGame({
      from: this.state.myAccount,
      value: this.state.web3.toWei(10, "ether"),
      gas: 900000
    })
  }

  sellMyGame() {
    this.state.indianInstance.sellMyGame(this.state.web3.toWei(10, "ether"), {
      from: this.state.myAccount,
      gas: 900000
    });
  }

  updateMyGames() {
    this.state.indianInstance.getMyGame().then(result => {
      this.setState({ myGame: result.toNumber() });
    })
  }

  render() {
    return <div className="App">
      <h1>게임의 가격: 10ETH</h1>
      <button onClick={() => this.buyGame()}>구매하기</button>
      <p>내가 가진 게임: {this.state.myGame}</p>
      <button onClick={() => this.sellMyGame()}>
        판매하기 (판매 가격: {10 * this.state.myGame})
        </button></div>;
  }
}

export default App;