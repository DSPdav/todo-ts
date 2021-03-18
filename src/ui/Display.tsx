import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { DisplayProps } from './types';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', 
        padding: '.5rem', 
        margin: '1rem 0'
    },
});

function Display({ item, handleChangeDone }: DisplayProps) {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <Box>
                <Typography color={item.done ? "secondary" : "primary"}>{item.content}</Typography>
                <Typography>{item.date}</Typography>
            </Box>
            <Checkbox checked={item.done} onChange={() => handleChangeDone(item.id)} name="toggle-done"/>
        </Card>
    );
}

export default Display;