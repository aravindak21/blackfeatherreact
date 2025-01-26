import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #000000;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    text-decoration: none;
    font-size: 14px;
    color: #7c7e8a; /* Initial footer color */

    &:hover {
      color: #70e000; /* Highlighted green color on hover */
    }
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #7c7e8a;
  margin-top: 10px;

  &:hover {
    color: #70e000;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/careers">Careers</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/gallery">Gallery</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
      </FooterLinks>
      <Copyright>© Black Feather Services</Copyright>
    </FooterContainer>
  );
};

export default Footer;
