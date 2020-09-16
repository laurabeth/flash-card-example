import React from "react";

interface FlashCard {
  cardId: string;
  content: string;
  index: string;
  isFlipped: boolean;
  stackId: string;
  title: string;
}

const FlashCard: React.FC<FlashCard> = ({
  cardId,
  content,
  index,
  isFlipped,
  stackId,
  title,
}) => {
  if (isFlipped) {
    return (
      <>
        <p>{content}</p>
      </>
    );
  }

  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default FlashCard;
