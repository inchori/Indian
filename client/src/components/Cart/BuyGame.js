import React, { Component } from "react";
import IndianContract from "../../contracts/Indian.json";
import getWeb3 from "../../utils/getWeb3";
import "bootstrap/dist/css/bootstrap.min.css";

class BuyGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: null,
      myGame: 0,
      web3: null,
      contract: null
    };
  }

  componentDidMount = async() => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = IndianContract.networks[networkId];
      const instance = new web3.eth.Contract (
        IndianContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      this.setState({ web3, accounts: accounts[0], contract: instance });
      this.updateMyGames();
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }

  buyGame() {
    console.log(this.state.web3);
    if(!this.state.contract) {
      alert('No Wallet Address!');
    }
    this.state.contract.methods.buyGame().send({
      from: this.state.accounts,
      value: this.state.web3.utils.toWei('10', 'ether'),
      gas: 900000
    }); 
  }

  sellMyGame() {
    if(!this.state.contract) {
      alert('No Wallet Address!');
    }
    this.state.contract.methods.sellMyGame(this.state.web3.utils.toWei('10', 'ether')).send({
      from: this.state.accounts,
      gas: 900000
    });
  }

  updateMyGames() {
    this.state.contract.methods.getMyGame().call({
      from: this.state.accounts
    }).then(result => {
      this.setState({ myGame: Number(result) });
      console.log(result);
    });
  }

  render() {
    return ( 
        <button onClick={() => this.buyGame()}>Purchase</button>
    );
  }
}

export default BuyGame;