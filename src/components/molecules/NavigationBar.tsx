import { AppBar, Container, Toolbar } from "@mui/material";
import { Fragment } from "react";

const NavigationBar = () => {
  return (
    <Fragment>
      <AppBar>
        <Container>
          <Toolbar>hello world</Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};

export default NavigationBar;
