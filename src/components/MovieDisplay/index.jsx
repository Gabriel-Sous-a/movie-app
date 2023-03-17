import React from "react";
import { Card, Img, InfoDisplay, Score, Details } from "./style";

export default function MovieDisplay({ img, name, score, description }) {
  return (
    <Card>
      <Img src={img} alt="Movie poster" />
      <InfoDisplay>
        <span>{name}</span>
        <Score>{score}</Score>
      </InfoDisplay>
      <Details>{description}</Details>
    </Card>
  );
}
