import React from "react";
import { Link } from "react-router-dom";

// MUI
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

// Components
import LongMenu from "../menu/LongMenu";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1c2340" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{display: "flex", flexDirection: "row-reverse", justifyContent: "space-between"}}>
          <Typography component="h1" variant="h5" fontWeight={700}>
            <Link to="/" style={{ textDecoration: "none", color: "#fcba03" }}>
            موزیک پلیر
            </Link>
          </Typography>
          <LongMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
