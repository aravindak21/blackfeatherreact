// src/components/Header.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const FIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px; /* Increased width to prevent cropping */
  height: 28px;
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease-in-out; /* Smooth transition */

  &:hover div {
    background-color: #70e000;
  }
`;

const FVerticalBar = styled.div`
  width: 6px;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  transition: all 0.4s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      height: 0%;
    `}
`;

const FHorizontalBar = styled.div`
  height: 4px;
  background-color: #ffffff;
  border-radius: 2px;
  width: ${(props) => props.width || "60%"};
  transition: all 0.4s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      &:nth-child(2) {
        transform: rotate(45deg) translate(4px, 6px); /* Adjusted position */
        width: 100%;
      }
      &:nth-child(3) {
        opacity: 0;
      }
      &:nth-child(4) {
        transform: rotate(-45deg) translate(4px, -6px); /* Adjusted position */
        width: 100%;
      }
    `}
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #ffffff;
  width: 120px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 8px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 10px 0;
    font-size: 16px;
    cursor: pointer;
    text-align: left;

    &:hover {
      color: #70e000;
    }
  }
`;

const Title = styled.h1`
  font-family: "Alata Regular", sans-serif;
  color: #ffffff;
  font-size: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ContactButton = styled.button`
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #70e000;
    color: #000000;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <FIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen((prev) => !prev)}>
        <FVerticalBar isOpen={isMenuOpen} />
        <FHorizontalBar isOpen={isMenuOpen} width="80%" />
        <FHorizontalBar isOpen={isMenuOpen} width="60%" />
        <FHorizontalBar isOpen={isMenuOpen} width="40%" />
      </FIcon>
      <Title>Black Feather Services</Title>
      <ContactButton onClick={() => navigate("/contact")}>Contact Us</ContactButton>

      <DropdownMenu isOpen={isMenuOpen}>
        <ul>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/gallery")}>Gallery</li>
          <li onClick={() => navigate("/team")}>Team</li>
          <li onClick={() => navigate("/contact")}>Cost</li>
        </ul>
      </DropdownMenu>
    </HeaderContainer>
  );
};

export default Header;
