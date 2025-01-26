import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResidentialImage from "../assets/residential.jpg"; // Replace with your image path
import OfficeImage from "../assets/office.jpg"; // Replace with your image path

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000000; /* Black background */
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px; /* Space between buttons */
  width: 80%; /* Constrain width */
  margin: auto; /* Center container */
`;

const ImageButton = styled.button`
  flex: 1; /* Equal width for buttons */
  height: 75vh; /* Adjust height for better match */
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
  border-radius: 8px; /* Slightly rounded corners */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Alata Regular", sans-serif;
  font-size: 32px;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  overflow: hidden; /* Ensure no content overflows */
  transition: transform 0.3s ease-in-out; /* Smooth animation */

  &:hover {
    transform: scale(1.05); /* Slight zoom effect */
    background-color: rgba(0, 0, 0, 0.5); /* Optional darken on hover */
    color: #70e000;
  }
`;

const Divider = styled.div`
  height: 1.5px; /* Thinner line */
  width: 200px; /* Wider line */
  background-color: #70e000;
  margin: 40px auto; /* Equal space between buttons and footer */
  box-shadow: 0 0 6px #70e000; /* Reduced glow effect */
`;

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <ButtonsContainer>
          <ImageButton bgImage={ResidentialImage}>Residential</ImageButton>
          <ImageButton bgImage={OfficeImage}>Office</ImageButton>
        </ButtonsContainer>
        <Divider />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Home;
