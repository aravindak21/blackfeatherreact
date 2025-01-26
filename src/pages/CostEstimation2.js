// src/pages/CostEstimation2.js
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px; /* Space for the header */
  padding-bottom: 50px; /* Spacer at the bottom */
  background-color: #000000;
  height: 100vh;
  overflow: hidden;
`;

const Title = styled.h1`
  font-family: "Alata Regular", sans-serif;
  font-size: 36px;
  color: #ffffff;
  text-align: center;
`;

const Divider = styled.div`
  width: 80px;
  height: 2px;
  background-color: #70e000;
  margin: 20px 0;
`;

const ServicesList = styled.div`
  max-height: calc(5 * 70px); /* Adjust height to show only 5 full items */
  overflow-y: auto;
  width: 70%; /* Reduced width */
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #70e000;
    border-radius: 8px;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(30, 30, 30, 0.8);
  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  span {
    font-family: "Alata Regular", sans-serif;
    color: #ffffff;
  }

  .price {
    font-size: 14px;
    color: #7c7e8a;
  }

  .add-icon {
    font-size: 20px;
    color: #70e000;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
`;

const CalculatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  input {
    font-family: "Alata Regular", sans-serif;
    font-size: 16px;
    color: #ffffff;
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 8px;
    padding: 5px 10px;
    text-align: center;
    width: ${(props) => props.width || "60px"};
    appearance: none;
    -moz-appearance: textfield; /* Remove spinner for Firefox */

    &:focus {
      outline: none;
      border-color: #70e000;
    }
  }

  .done-button {
    font-family: "Alata Regular", sans-serif;
    font-size: 16px;
    color: #000000;
    background-color: #70e000;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CartContainer = styled.div`
  position: fixed;
  top: 80px; /* Place below the header */
  right: 20px; /* Padding from the right edge */
  background: rgba(30, 30, 30, 0.8); /* Translucent glass-like background */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  width: 90%;
  max-width: 300px;
  padding: 20px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);

  h3 {
    font-family: "Alata Regular", sans-serif;
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    span {
      font-family: "Alata Regular", sans-serif;
      color: #ffffff;
    }

    .delete-icon {
      font-size: 20px;
      color: #ff0000;
      cursor: pointer;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

const CostEstimation2 = () => {
  const [cart, setCart] = useState([]);
  const [area, setArea] = useState("");
  const [services] = useState([
    { name: "Deep Cleaning", price: 50 },
    { name: "Window Cleaning", price: 40 },
    { name: "Express Cleaning", price: 30 },
    { name: "Disinfecting", price: 60 },
    { name: "Furniture Cleaning", price: 35 },
  ]);

  const addToCart = (service) => {
    if (cart.some((item) => item.name === service.name)) return; // Prevent duplicates
    setCart([...cart, service]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const totalServices = cart.reduce((sum, item) => sum + item.price, 0);
    const totalArea = parseFloat(area) || 0;
    return totalServices * totalArea;
  };

  const resetCalculator = () => {
    setCart([]);
    setArea("");
  };

  return (
    <PageContainer>
      <Header />
      <Title>Cost Estimate</Title>
      <Divider />

      {/* Calculator */}
      <CalculatorContainer>
        <input type="text" value={cart.length} readOnly />
        <span>x</span>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter area in m²"
          width="150px"
        />
        <span>=</span>
        <input type="text" value={`${calculateTotal()}$`} readOnly />
        <button className="done-button" onClick={resetCalculator}>
          Done
        </button>
      </CalculatorContainer>

      {/* Cart */}
      <CartContainer>
        <h3>Your Cart</h3>
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>
            <span className="delete-icon" onClick={() => removeFromCart(index)}>
              🗑️
            </span>
          </div>
        ))}
      </CartContainer>

      {/* Services List */}
      <ServicesList>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <span>{service.name}</span>
            <span className="price">{service.price}$</span>
            <span
              className={`add-icon ${
                cart.some((item) => item.name === service.name) ? "disabled" : ""
              }`}
              onClick={() => addToCart(service)}
            >
              +
            </span>
          </ServiceCard>
        ))}
      </ServicesList>
    </PageContainer>
  );
};

export default CostEstimation2;
