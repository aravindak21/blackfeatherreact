import React from "react";
import styled from "styled-components";
import Header from "../components/Header"; // Import the header component

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 80px; /* Add padding to prevent overlap with header */
  background-color: #000000;
`;

const Title = styled.h1`
  font-family: "Alata Regular", sans-serif;
  font-size: 36px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
`;

const GetStartedButton = styled.button`
  font-family: "Alata Regular", sans-serif;
  font-size: 16px;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 25px;
  padding: 10px 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #70e000; /* Green fill on hover */
    color: #000000; /* Black text */
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  font-family: "Klein Regular", sans-serif;
  font-size: 12px;
  color: #7c7e8a;

  nav {
    margin-bottom: 10px; /* Adds spacing between links and copyright */
  }

  a {
    color: inherit;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #70e000;
    }
  }

  p {
    margin-top: 10px;
  }
`;

const CostEstimation1 = () => {
  const navigateToCalculator = () => {
    window.location.href = "/cost-estimation-calculator"; // Adjust route as needed
  };

  return (
    <PageContainer>
      <Header /> {/* Add the same header as in the home page */}
      <Title>Shine Brighter with a Sparkling Clean! Estimate Your Cost Now.</Title>
      <GetStartedButton onClick={navigateToCalculator}>Get started</GetStartedButton>
      <Footer>
        <nav>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/gallery">Gallery</a>
          <a href="/team">Team</a>
          <a href="/contact">Contact</a>
        </nav>
        <p>© Black Feather Services</p>
      </Footer>
    </PageContainer>
  );
};

export default CostEstimation1;
