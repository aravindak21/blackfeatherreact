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
 