// src/pages/Journey.js
import React from "react";
import styled from "styled-components";

const JourneyContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  width: 100%;
`;

const Card = styled.div`
  background: #1a1a1a;
  color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;
`;

const LargeCard = styled(Card)`
  grid-column: span 2;
  font-size: 24px;
  font-weight: bold;
`;

const Journey = () => {
  return (
    <JourneyContainer>
      <Grid>
        <LargeCard>Welcome to Bento UI</LargeCard>
        <Card>🚀 Fast Performance</Card>
        <Card>🎨 Beautiful UI</Card>
        <Card>🔥 Responsive Design</Card>
      </Grid>
    </JourneyContainer>
  );
};

export default Journey;
