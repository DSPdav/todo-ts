import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    bottom: '0',
    left: '0',
    right: '0',
    width: '95%',
    margin: '0 auto',
    padding: '1rem',
    borderTop: '1px solid #dbdbdb'
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="footer" disableGutters>
      <Typography align="center">&copy; 2021</Typography>
    </Container>
  );
}

export default Footer;
