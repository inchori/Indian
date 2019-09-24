import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1 className="h2">{title}</h1>
                  <h4 className="h5 text-uppercase text-muted mt-3 mb-2">
                    Dev By: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : 
                      {price} <span>ETH</span>
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about game :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                    <Link to="/">
                      <Button>Invest</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainBlue);
border-color: ${props =>
  props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
color: var(--mainWhite);
color: ${props => (props.cart ? "var(--mainYellow)" : "var(--mainBlue)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
outline-color: red;
cursor: pointer;
display: inline-block;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
  background: var(--mainBlue);
  background: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
  color: var(--mainWhite);
}
&:focus {
  outline: none;
}
`;

const Button = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid Black;
border-color: ${props =>
  props.cart ? "var(--mainYellow)" : "Black"};
color: var(--mainWhite);
color: ${props => (props.cart ? "var(--mainYellow)" : "Black")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
outline-color: red;
cursor: pointer;
display: inline-block;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
  background: var(--mainBlue);
  background: ${props =>
    props.cart ? "var(--mainYellow)" : "Black"};
  color: var(--mainWhite);
}
&:focus {
  outline: none;
}
`;