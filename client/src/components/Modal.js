import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <h5>Game added to cart</h5>
                      <img src={img} className="img-fluid" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : {price}ETH</h5>
                      <Link to="/">
                        <Button
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

const Button = styled.button`
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
