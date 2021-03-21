import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '85vw',
        margin: '0 auto',
        transform: 'translateY(100%)',

        '& > div': {
            margin: '0 0 .5rem',
            width: '100%',
        },
        '& > button': {
            alignSelf: 'center',
            width: '50%',
        },
    }
});

function Signup() {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        alert(`email: ${email}\npassword: ${password}`);
        setEmail('');
        setPassword('');
    }

    return (
        <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="email" label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} required/>
            <TextField id="password" label="Password" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <Button variant="contained" color="primary" type="submit" disableElevation>Signup</Button>
        </form>
    );
}

export default Signup;