import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function Footer() {
  return (
    <Container component="footer" disableGutters>
      <Typography align="center">&copy; 2021</Typography>
    </Container>
  );
}

export default Footer;
