import React from "react";

import { Container, Grid} from "@mui/material";
import Singres from "../singers/Singres";
import Musics from "../musics/Musics";
import Title from "../../shared/Title";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12}>
        <Title title="خوانندگان" path="singers" link="" />
          <Singres />
        </Grid>
        <Grid item xs={12}>
        <Title title="آهنگ ها" path="musics" link="بیشتر" />
          <Musics />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
