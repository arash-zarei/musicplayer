import React from "react";

// mui
import { Grid } from "@mui/material";

// Apollo
import { useQuery } from "@apollo/client";

// Queris
import { GET_ARTISTS } from "../../graphql/queris";

// Components
import Singer from "./Singer";
import Loader from "../../shared/Loader";

const Singres = () => {
  const { loading, data } = useQuery(GET_ARTISTS);

  if (loading) return <Loader />;

  return (
    <Grid container spacing={2} mt={2}>
      {data.artists.map((artist) => (
        <Grid item xs={12} sm={6} md={4} key={artist.id}>
          <Singer data={artist} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Singres;
