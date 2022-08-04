import { CircularProgress, Container, Grid, Box } from "@mui/material";
import type { NextPage } from "next";

import Img from "react-cool-img";

import { useArchetypeCards } from "../hooks/useCards";
import { CardInfo } from "../interface/cards";

const Home: NextPage = () => {
  const { cards, isCardsError, isLoadingCards } = useArchetypeCards();

  if (isLoadingCards) {
    return <div>Loading...</div>;
  }
  if (isCardsError) {
    return <div>Error</div>;
  }

  return (
    <Container sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {cards?.map(({ name, id, card_images }: CardInfo) => (
          <Img
            key={id}
            style={{
              backgroundImage: `url(${"/assets/background_card.jpeg"})`,
              backgroundSize: "150px 219px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: "1rem",
            }}
            width={150}
            alt={name}
            src={card_images[0].image_url}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
