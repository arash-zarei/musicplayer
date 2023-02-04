import React, { useState, useRef, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import { Container } from "@mui/material";
import { Oval } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
  theme.palette.mode === "dark" ? "rgba(28,35,64,0.9)" : "rgba(24,31,84,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 80,
  height: 80,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "1.05rem",
  opacity: 1,
  fontWeight: 600,
  letterSpacing: 0.2,
});

const MusicPlayer = ({ data }) => {
  const [position, setPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const theme = useTheme();
  const audioMp3 = useRef(null);
  const { pathname } = useLocation();

  const playMusic = () => {
    audioMp3.current.play();
    setIsPlay(true);
  };
  const pauseMusic = () => {
    audioMp3.current.pause();
    setIsPlay(false);
  };

  useEffect(() => {
    isLoaded && setIsLoaded(false);
    setIsPlay(true);
  }, [pathname]);

  useEffect(() => {
    if (audioMp3.current.currentTime === audioMp3.current.duration) {
      setIsPlay(false);
    }
  });

  const { name, artist, coverPhoto, file } = data[0];

  setInterval(() => {
    setPosition(audioMp3.current !== null && audioMp3.current.currentTime);
  }, 1000);

  const duration = audioMp3.current !== null && audioMp3.current.duration;
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = (value - minute * 60).toFixed(0);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <audio
        autoPlay
        ref={audioMp3}
        onLoadedMetadata={() => setIsLoaded(true)}
        src={file.url}
      ></audio>
      <Widget>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row-reverse",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row-reverse",
            }}
          >
            <CoverImage sx={{ marginLeft: "10px" }}>
              <img alt={name} src={coverPhoto.url} />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography noWrap dir="rtl" color="#fff">
                <b>{name}</b>
              </Typography>
              <Typography
                noWrap
                letterSpacing={-0.25}
                dir="rtl"
                color="#fcba03"
              >
                {artist.name}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <TinyText color="#fcba03">{formatDuration(position)}</TinyText>
          </Box>{" "}
          <IconButton>
            {!isLoaded ? (
              <Oval
                height={40}
                width={40}
                color="#fcba03"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#000"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : !isPlay ? (
              <PlayArrowRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
                onClick={playMusic}
              />
            ) : (
              <PauseRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
                onClick={pauseMusic}
              />
            )}
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "15px",
            }}
          >
            <TinyText color="#fcba03">
              {Number(duration) ? formatDuration(duration - position) : "00:00"}
            </TinyText>
          </Box>
        </Container>
      </Widget>
    </Box>
  );
};

export default MusicPlayer;
