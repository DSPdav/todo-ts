import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        margin: '1rem 0',
    },
});

function Filter({ show, setShow, handleClear }: FilterProps) {
    const classes = useStyles();

    return (
        <Container className={classes.container} disableGutters>
            <Box>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={show.done}
                        onChange={() => setShow({...show, done: !show.done})}
                        name="showDone"
                    />
                }
                label="Done"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={show.onProgress}
                        onChange={() => setShow({...show, onProgress: !show.onProgress})}
                        name="showOnProgress"
                        color="primary"
                    />
                }
                label="On Progress"
            />
            </Box>
            <Button id="clear-btn" variant="contained" color="secondary" onClick={handleClear} disableElevation>clear</Button>
        </Container>
    );
}

export default Filter;