import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function Filter() {
    const classes = useStyles();

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleOpen = () => {
    //     setOpen(true);
    // };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    // open={open}
                    // onClose={handleClose}
                    // onOpen={handleOpen}
                    // value={age}
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>2016-2021</MenuItem>
                    <MenuItem value={20}>2010-2015</MenuItem>
                    <MenuItem value={30}>2000-2009</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                <Select>
                    <MenuItem value={1}>Popularity</MenuItem>
                    <MenuItem value={1}>Top Rated</MenuItem>
                    <MenuItem value={1}>Latest</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                <Select>
                    <MenuItem value={1}>Random</MenuItem>
                    <MenuItem value={1}>Ascending</MenuItem>
                    <MenuItem value={1}>Descending</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Filter
