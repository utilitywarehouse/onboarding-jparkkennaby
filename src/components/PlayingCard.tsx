export type PlayingCardProps = {
  code: string;
  image: string;
  suit: string;
  [propName: string]: any;
};

const PlayingCard = ({ image }: PlayingCardProps) => {
  return (
    <div className="playing-card">
      <img src={image} alt="" />
    </div>
  );
};

export default PlayingCard;
