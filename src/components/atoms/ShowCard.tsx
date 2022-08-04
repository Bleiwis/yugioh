import { FC } from "react";
import PropTypes, { InferType } from "prop-types";
import Img from "react-cool-img";

interface ShowCardProps {
  url: string;
  width: string | number;
  alt: string | number;
}

const ShowCard: FC<ShowCardProps> = ({ url, width, alt }) => {
  return <Img width={width || 100} alt={alt} src={url} />;
};

ShowCard.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.any,
  alt: PropTypes.any.isRequired,
};

export default ShowCard;
