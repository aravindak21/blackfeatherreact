import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  position: relative;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
`;

const Title = styled.h1`
  font-family: "Alata Regular", sans-serif;
  color: #ffffff;
  font-size: 32px;
  position: absolute;
  left: 50%; /* Position relative to center */
  transform: translateX(-50%); /* Center the title horizontally */
`;

const ContactButton = styled.button`
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 12px; /* Reduced corner rounding */
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #70e000;
    color: #000000;
    box-shadow: 0 0 8px #70e000; /* Add glow effect */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <MenuIcon>☰</MenuIcon>
      <Title>Black Feather Services</Title>
      <ContactButton>Contact Us</ContactButton>
    </HeaderContainer>
  );
};

export default Header;
