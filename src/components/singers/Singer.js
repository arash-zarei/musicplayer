import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Singer = ({ data }) => {
  const {
    name,
    slug,
    image: { url },
  } = data;

  return (
    <Card
      sx={{ backgroundColor: "transparent", boxShadow: "none", margin: "15px 0"}}
    >
      <CardMedia component="img" height="140" image={url} alt={slug} />
      <Box component="div" display="flex" alignItems="center" padding={2}>
        <Typography component="p" variant="p" flex={1} color="#fff">
          {name}
        </Typography>
        <Link
          to={`singers/${slug}`}
          style={{ textDecoration: "none", color: "#fcba03" }}
        >
          <AiOutlineArrowRight />
        </Link>
      </Box>
    </Card>
  );
};

export default Singer;
