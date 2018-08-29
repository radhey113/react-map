
import React from 'react';
import './style.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const Search = props => {
    let classes = {
        container: "container",
        formControl: "formControl"
    }
        return (
       <div className="container">
           <form onSubmit={props.submit}  autoComplete="on">
               <div className="searchLocation">

                        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                            <InputLabel htmlFor="name-helper">Search Location</InputLabel>
                            <Input id="name-helper" value={props.searchValue} onChange={props.handleChange} />
                            <FormHelperText id="name-helper-text">Search Your Location</FormHelperText>
                        </FormControl>
                            <br />
                </div>
           </form>
        </div>
    )
}

export default Search;
