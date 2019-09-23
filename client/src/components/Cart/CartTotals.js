import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartTotals extends Component {

  render() {
    const {
      cartTotal,
      cart,
      clearCart,
      buyGame,
      investGame,
    } = this.props.value;
    console.log(this.props.value);
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong> {cartTotal}ETH </strong>
                </h5>
                <Link to="/cart">
                  <button 
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      buyGame();
                      }}
                      >
                    Buy
                    </button>
                </Link>
                <h5>
                <Link to="/cart">
                  <button 
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      investGame();
                      }}
                      >
                    Invest
                    </button>
                </Link>
                </h5>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}