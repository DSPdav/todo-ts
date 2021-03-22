import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
        textAlign: 'center',
        
    },
    child: {
        position: 'absolute',
        width: '100vw',
        top: '50%',
        transform: 'translateY(-50%)',

        '& > span': {
            paddingRight: '0.5rem',
            borderRight: '1px solid #444'
        },
        '& > b': {
            paddingLeft: '0.5rem',
        }
    }
});

function Login() {
    const classes = useStyles();
    

    return (
        <div className={classes.root}>
            <p className={classes.child}>
                <span>404</span><b>Page Not Found</b>
            </p>
        </div>
    );
}

export default Login;