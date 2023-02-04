import React from 'react';


// mui
import { Typography } from '@mui/material';

// ReactRouterDOM
import {Link} from 'react-router-dom';

const Title = ({title, path, link}) => {
    return (
        <Typography
            component="h3"
            variant="h5"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row-reverse"
            dir='rtl'
            gap={3}
            color="#fff"
          >
            <Link to={`/${path}`} style={{ textDecoration: "none", color: "#fcba03" }} >
              {link}
            </Link>
            <span style={{   width: "80%",   border: "1px dashed #fcba03" }}></span>
           {title}
          </Typography>
    );
};

export default Title;