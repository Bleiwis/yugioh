import { FC } from "react";
import PropTypes from "prop-types";
import Img from "react-cool-img";
import Image from "next/image";
interface ShowCardProps {
  url: string;
  width?: string | number;
  alt: string;
}

const ShowCard: FC<ShowCardProps> = ({ url, width, alt }) => {
  return (
    <Img
      style={{
        backgroundImage: `url(${"/assets/background_card.jpeg"})`,
        backgroundSize: "cover",
        width: width,
        height: 247,
        margin: 10,
      }}
      width={width || 170}
      alt={alt}
      src={url}
    />
  );
};

ShowCard.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.any,
  alt: PropTypes.string.isRequired,
};

export default ShowCard;
