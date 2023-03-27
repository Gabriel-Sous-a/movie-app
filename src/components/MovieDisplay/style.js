import styled from "styled-components";

export const Details = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  z-index: 1;
  background-color: white;
  width: 300px;
  opacity: 90%;
`;

export const Card = styled.div`
  position: relative;
  background-color: #373b69;
  box-sizing: border-box;
  width: 300px;
  margin: 1rem;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 3px;

  &:hover ${Details} {
    display: block;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const InfoDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: white;
`;

export const Score = styled.span`
  background-color: #22254b;
  color: ${(props) => props.color};
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
`;
