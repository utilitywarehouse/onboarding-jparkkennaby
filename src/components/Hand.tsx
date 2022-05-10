import React from "react";
import PlayingCard, { PlayingCardProps } from "./PlayingCard";

type Props = {
  playingCards: PlayingCardProps[];
};

const Hand = ({ playingCards }: Props) => {
  return (
    <div className="hand" style={{ display: "flex" }}>
      {playingCards.map((card: PlayingCardProps) => {
        return <PlayingCard key={card.code} {...card} />;
      })}
    </div>
  );
};

export default Hand;
