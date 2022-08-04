import { FC, Fragment } from "react";
import PropTypes, { InferType } from "prop-types";
import Img from "react-cool-img";

interface ShowCardProps {
  url: string;
  width?: string | number;
  alt: string | number;
}

const ShowCard: FC<ShowCardProps> = ({ url, width, alt }) => {
  return (
    <Fragment>
      <Img
        label={alt}
        style={{
          margin: "1rem",
          backgroundImage: `url(${"/assets/background_card.jpeg"})`,
          backgroundSize: "cover",
          width: width,
          height: 247,
        }}
        width={width || 170}
        alt={alt}
        src={url}
      />
    </Fragment>
  );
};

ShowCard.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.any,
  alt: PropTypes.any.isRequired,
};

export default ShowCard;
