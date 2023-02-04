import React from 'react';

// mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// ReactRouterDOM
import { Link, useParams } from 'react-router-dom';

// Loader
import { Audio } from "react-loader-spinner"



const Musics = ( { data } ) => {

    
    const { name, slug, coverPhoto: { url }, artist } = data
    const slugPath = useParams()
  
  return (
    <Card sx={{ display: 'flex', backgroundColor: "#1c2340"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: "1" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" dir='rtl'>
          <Link to={`/music/${slug}`} style={{ textDecoration: "none", color: "#fff" }}>{name}</Link>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" dir='rtl'>
            <Link to={`/singers/${artist.slug}`} style={{ textDecoration: "none", color: "#fcba03" }}>{artist.name}</Link>
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            {slugPath.slug === slug ? <Audio   height="50" width="20" color="#de1f1f" ariaLabel="audio-loading" wrapperStyle={{}} wrapperClass="wrapper-class" visible={true} /> : <Link to={`/musics/${slug}`}><PlayArrowIcon sx={{ height: 38, width: 38, color: "#fcba03" }} /></Link>}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={url}
        alt={slug}
      />
    </Card>
  );
}

export default Musics;