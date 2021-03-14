import React, { useState } from 'react'
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

function Filter(props) {
    const classes = useStyles();

// const [open, setOpen] = useState()
//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleOpen = () => {
//         setOpen(true);
//     };

 
    return (
        <div>
        
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                //    open={open}
                //        onClose={handleClose}
                //       onOpen={handleOpen}
                value={props.select}
                onChange={e => props.setSelect(e.target.value)}
                 >
                    <MenuItem value={"bypopularity"}>Popularity</MenuItem>
                    <MenuItem value={"upcoming"}>Upcoming</MenuItem>
                    <MenuItem value={"favorite"}>Top Rated</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Filter
