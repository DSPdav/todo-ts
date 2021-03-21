import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
        textAlign: 'center',
        
        '& > p': {
            position: 'absolute',
            width: '100vw',
            top: '50%',
            transform: 'translateY(-50%)'
        }
    }
});

function Login() {
    const classes = useStyles();
    

    return (
        <div className={classes.root}>
            <p>404 | Page Not Found</p>
        </div>
    );
}

export default Login;