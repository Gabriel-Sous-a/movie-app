import React from "react";
import { Card, Img, InfoDisplay, Score, Details } from "./style";

export default function MovieDisplay({ img, name, score, description }) {
  return (
    <Card>
      <Img src={img} alt="Movie poster" />
      <InfoDisplay>
        <span>{name}</span>
        <Score color={getScoreColor(score)}>{score}</Score>
      </InfoDisplay>
      <Details>{description}</Details>
    </Card>
  );
}

function getScoreColor(score) {
  if (score > 7) {
    return "green";
  } else if (score > 3) {
    return "yellow";
  } else {
    return "red";
  }
}
