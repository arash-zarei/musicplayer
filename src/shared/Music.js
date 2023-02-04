import React from "react";


// mui
import { Card, Typography } from "@mui/material";

// ReactRouterDOM
import { Link } from "react-router-dom"

const Music = ({ data }) => {
  const {
    name,
    slug,
    coverPhoto: { url },
    artist,
  } = data;

  return (
    <Card
      sx={{
        boxShadow: "none",
        margin: "15px 0",
        textAlign: "center",
        backgroundColor: "#1c2340",
        padding: "15px",
      }}
    >
      <Link to={`/music/${slug}`}>
        <img src={url} alt={slug} style={{   borderRadius: "0 100% 100% 100%",   width: "100px",   height: "100px", }}/>
      </Link>
      <Link to={`/music/${slug}`} style={{ textDecoration: "none", color: "#fff" }}>
        <Typography component="p" variant="p" padding={1}>{name}</Typography>
      </Link>
      {artist && <Link to={`/singers/${artist.slug}`} style={{ textDecoration: "none", color: "#fcba03" }}>
        <Typography component="p" variant="p">{artist.name}</Typography>
      </Link>}
    </Card>
  );
};

export default Music;
