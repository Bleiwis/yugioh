import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Stack } from "@mui/material";
import { NextSeo } from "next-seo";

import NavigationBar from "../molecules/NavigationBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const canonical = "https://yugioh-blue.vercel.app/";
  return (
    <React.Fragment>
      <NextSeo
        title="Yu-Gi-Oh! CARD SEARCH"
        description="Welcome to Yu-Gi-Oh! CARD SEARCH, a website that provides you with information about Yu-Gi-Oh! cards."
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: "Yu-Gi-Oh! CARD SEARCH",
          description:
            "Welcome to Yu-Gi-Oh! CARD SEARCH, a website that provides you with information about Yu-Gi-Oh! cards.",
          images: [
            {
              url: "https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <NavigationBar />
      <Container maxWidth="lg">
        <Box component="main" m={1}>
          <Stack spacing={2}>{children}</Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
