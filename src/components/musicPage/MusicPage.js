import React from "react";

import { Container, Grid, Typography, Box } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MUSIC_DATA } from "../../graphql/queris";
import {Link} from "react-router-dom"
import Loader from "../../shared/Loader";
import sanitizeHtml from "sanitize-html";
import Music from "../../shared/Music";
import MusicPlayer from "../musicPlayer/MusicPlayer";

const MusicPage = () => {

    const navigate = useNavigate()
    const { slug } = useParams()

    const { loading, data } = useQuery(GET_MUSIC_DATA,{
        variables: { slug: slug }
    })

    if(loading) return <Loader />
    const { name, id, coverPhoto: { url }, lyrics: { html }, artist } = data.music
    const otherMusic = artist.musics.filter(music => music.id !== id)
    const playing = artist.musics.filter(music => music.id === id)

  return (
    <>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between" alignItems="center">
          <ArrowBackRoundedIcon
            style={{ cursor: "pointer", color: "#fcba03" }}
            onClick={() => navigate(-1)}
          />
          <Typography component="h2" variant="h4" color="#fff" fontWeight={700} textAlign="center">
          {name}
          <Typography component="p" variant="p" fontWeight={100}>
            <Link to={`/singers/${artist.slug}`} style={{ textDecoration: "none", color: "#fcba03" }}>{artist.name}</Link>
          </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} mt={6} textAlign="center">
          <img
            src={url}
            alt={slug}
            width="50%"
            style={{ borderRadius: 15 }}
            />
        </Grid>
        <Grid item xs={12} mt={5} color="#fff" textAlign="center">
            <Typography component="h4" variant="h3" color="#fcba03">متن ترانه</Typography>
          <Box component="div" 
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(html),
            }}
            ></Box>
        </Grid>
        <Grid item sx={{direction: "rtl", width: "100%"}}>
          <Typography component="h3" variant="h5" fontWeight={700} mt={7} color="#fcba03">
             دیگر آهنگ های {artist.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {otherMusic.map(music => (
              <Grid key={music.id} item xs={12} sm={6} md={3}>
                    <Music data={music}/>
                </Grid>
            ))}
          </Grid>
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

export default MusicPage;
