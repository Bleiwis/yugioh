import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "../molecules/NavigationBar";
import { Box, Container, Stack } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
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
