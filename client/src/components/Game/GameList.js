import React, { Component } from "react";
import GameItem from "./GameItem";

export default class GameList extends Component {
  render() {
    const { value } = this.props;
    const { cart } = this.props.value;
    return (
      <div className="container-fluid">
        {cart.map(item => (
          <GameItem key={item.id} item={item} value={value} />
        ))}
      </div>
    );
  }
}
