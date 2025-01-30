// src/pages/ContactUs.js
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
`;

const Title = styled.h1`
  font-family: "Alata Regular", sans-serif;
  font-size: 42px;
  text-align: left;
  width: 100%;
  padding-left: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 80%;
  margin-top: 30px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  color: #7C7E8A;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #ffffff;
  color: #ffffff;
  outline: none;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #ffffff;
  color: #ffffff;
  outline: none;
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  background: #70e000;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #5bc000;
  }
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <Title>Fill Out The Form And We Will Contact You</Title>
      <Form>
        <InputField>
          <Label>Your First Name</Label>
          <Input type="text" defaultValue="Aravind" />
        </InputField>
        <InputField>
          <Label>Your Last Name</Label>
          <Input type="text" defaultValue="Kumar" />
        </InputField>
        <InputField>
          <Label>Your Phone Number</Label>
          <Input type="tel" defaultValue="+1 437 545 2552" />
        </InputField>
        <InputField>
          <Label>Your Email Address</Label>
          <Input type="email" defaultValue="offaravind@gmail.com" />
        </InputField>
        <InputField>
          <Label>Site Type</Label>
          <Select>
            <option>Residential</option>
            <option>Commercial</option>
          </Select>
        </InputField>
        <InputField>
          <Label>Type Of Work</Label>
          <Select>
            <option>Combo</option>
            <option>Deep Cleaning</option>
            <option>Express Cleaning</option>
          </Select>
        </InputField>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default ContactUs;
