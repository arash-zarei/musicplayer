import React from "react";

// ReactRouterDOM
import { useNavigate, useParams } from "react-router-dom";

// mui
import { Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// Apollo
import { useQuery } from "@apollo/client";

// Queris
import { GET_ALL_MISICS } from "../../graphql/queris";

// Components
import Loader from "../../shared/Loader";
import Musics from "./Musics";
import MusicPlayer from "../musicPlayer/MusicPlayer";

const MusicsPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams()
  const { loading, data } = useQuery(GET_ALL_MISICS);
  
  if (loading) return <Loader />;
  
  const playing = data.musics.filter(music => music.slug === slug)

  return (
    <>
      <Container maxWidth="lg">
        <Grid container pb={10}>
          <Grid item xs={12} mt={9} display="flex" justifyContent="space-between"
          >
            <ArrowBackRoundedIcon
              sx={{ cursor: "pointer", color: "#fff" }}
              onClick={() => navigate(-1)}
            />
            <Typography component="h2" variant="h4" color="#fff" fontWeight={700}
            >
              آهنگ ها
            </Typography>
          </Grid>
          <Grid container spacing={2} mt={2}>
            {data.musics.map((music) => (
              <Grid item xs={12} sm={6} md={4} key={music.id}>
                <Musics data={music} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Grid container>
        <Grid item mt={5} position="fixed" bottom="0" width="100%">
          <MusicPlayer data={playing} />
        </Grid>
      </Grid>
    </>
  );
};

export default MusicsPage;
