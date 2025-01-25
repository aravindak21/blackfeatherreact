import React, { useState } from "react";
import styled, { css } from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  position: relative;
  z-index: 10;
`;

const FIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;

  &:hover div {
    background-color: #70e000; /* Highlight all bars in green when hovered */
  }
`;

const FVerticalBar = styled.div`
  width: 6px;
  height: 100%; /* Full height for the vertical stroke */
  background-color: #ffffff;
  position: absolute;
  left: 0;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      height: 0%; /* Shrink vertical bar when menu is open */
    `}
`;

const FHorizontalBar = styled.div`
  height: 4px; /* Thickness of the horizontal bars */
  background-color: #ffffff;
  border-radius: 2px;
  width: ${(props) => props.width || "60%"}; /* Dynamic width for each bar */
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      &:nth-child(2) {
        transform: rotate(45deg) translateY(5px); /* Top bar rotates down */
        width: 80%; /* Match top bar size */
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translateY(-5px); /* Bottom bar rotates up */
        width: 80%; /* Match bottom bar size */
      }
    `}
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px; /* Space below the F icon */
  left: 0; /* Align dropdown menu below the F icon */
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
  backdrop-filter: blur(8px); /* Frosted glass effect */
  -webkit-backdrop-filter: blur(8px); /* Frosted glass for Safari */
  color: #ffffff;
  width: 160px; /* Reduced width for a sleeker look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
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
    text-align: left; /* Align text to the left for a clean look */

    &:hover {
      color: #70e000; /* Highlight menu items on hover */
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
  border-radius: 12px; /* Reduced corner rounding */
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      {/* Custom "F" Icon with onClick handler */}
      <FIcon isOpen={isMenuOpen} onClick={toggleMenu}>
        <FVerticalBar isOpen={isMenuOpen} />
        <FHorizontalBar isOpen={isMenuOpen} width="80%" />
        <FHorizontalBar isOpen={isMenuOpen} width="60%" />
        <FHorizontalBar isOpen={isMenuOpen} width="40%" />
      </FIcon>
      <Title>Black Feather Services</Title>
      <ContactButton>Contact Us</ContactButton>

      {/* Dropdown Menu */}
      <DropdownMenu isOpen={isMenuOpen}>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Team</li>
          <li>Cost</li>
        </ul>
      </DropdownMenu>
    </HeaderContainer>
  );
};

export default Header;
