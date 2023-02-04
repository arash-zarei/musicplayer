import React from "react";

// Sanitizer
import sanitizeHtml from "sanitize-html";

// mui
import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// ReactRouterDOM
import { useNavigate, useParams } from "react-router-dom";

// Queris
import { GET_ARTIST } from "../../graphql/queris";

// Apollo
import { useQuery } from "@apollo/client";

// Components
import Loader from "../../shared/Loader";
import Music from "../../shared/Music";

const SingerPage = () => {

    const navigate = useNavigate()
    const { slug } = useParams()
    const { loading, data } = useQuery(GET_ARTIST, {
        variables: { slug: slug }
    })

    if(loading) return <Loader />

    const { name, image: { url }, musics, description: { html } } = data.artist

  return (
    <Container>
      <Grid container>
      <Grid item xs={12} mt={9} display="flex" justifyContent="space-between" alignItems="center">
          <ArrowBackRoundedIcon style={{cursor: "pointer", color: "#fcba03"}} onClick={() => navigate(-1)} />
          <Typography
            component="h2"
            variant="h4"
            color="#fff"
            fontWeight={700}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={6} textAlign="center">
          <img
            src={url}
            alt={slug}
            width="80%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={5} color="#fff">
          <Box component="div" dir="rtl"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(html),
            }}
          ></Box>
        </Grid>
        <Grid item sx={{direction: "rtl", width: "100%"}}>
          <Typography component="h3" variant="h5" fontWeight={700} mt={7} color="#fcba03">
            آهنگ های {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {musics.map(music => (
                <Grid item xs={12} sm={6} md={3}>
                    <Music data={music}/>
                </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingerPage;
