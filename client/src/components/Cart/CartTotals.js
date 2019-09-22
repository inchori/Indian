import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartTotals extends Component {
  
  

  render() {
    const {
      cartTotal,
      cart,
      clearCart,
      buyGame
    } = this.props.value;
    const { history } = this.props;
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
                <Link to="/">
                  <button 
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      buyGame();
                      }}
                      >
                    Purchase
                    </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}