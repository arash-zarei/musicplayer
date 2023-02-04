import React from 'react';

// MUI
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Typography
        component="p"
        variant="p"
        bgcolor="transparent"
        color="#fcba03"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        پروژه موزیک پلیر | GraphQL
      </Typography>
    );
};

export default Footer;