import React from "react";

import { Grid } from "@mui/material";

import { useQuery } from "@apollo/client";
import { GET_LIMIT_MUSIC } from "../../graphql/queris";
import Loader from "../../shared/Loader";
import Music from "../../shared/Music";

const Musics = () => {
  const { loading, data } = useQuery(GET_LIMIT_MUSIC);

  if (loading) return <Loader />;

  return (
    <Grid container spacing={2} mt={2}>
      {data.musics.map((music) => (
        <Grid item xs={6} sm={4} md={2} key={music.id}>
            <Music data={music} />
        </Grid>
      ))}
     
    </Grid>
  );
};

export default Musics;
