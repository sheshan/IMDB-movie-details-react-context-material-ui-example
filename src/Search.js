import React, { useContext, useState ,} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { store } from './childComponentProvider'
import axios from "axios";


export default function Search() {

  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const [fetching, setFetching] = React.useState(false);
  const [inputSearchtext, setInputSearchText] = React.useState('')
  const [value, setValue] = React.useState(null)

  const handleClick = () => {
    let splitData = inputSearchtext.split(",")    
    let tempValue = []
    splitData.forEach((value) =>{
      let USER_READ_DATA = new URL("http://www.omdbapi.com/?");
      USER_READ_DATA.searchParams.append('i',value)
      USER_READ_DATA.searchParams.append('apikey','afd0a55d')
      // use .then to get the value from promises (async return a promise)
      fetchData(USER_READ_DATA).then(fetchvalue => {  
        tempValue.push(fetchvalue)
    });

  });
  setValue(tempValue)
  dispatch({ type: 'search', data: value})
}


console.log("Data", value)
  const handleInputChange = (e) => {
    const value = e.target.value
    setInputSearchText(value)
  }
//tt2250912,tt0371746,tt0103923,tt0185116,tt1725668
  const fetchData = async (url) => {
    try {
      setFetching(true)      
      const response = await axios.get(url)
      let tempValues = [
        response.data.Poster,
        response.data.Title,
        response.data.imdbRating,
        response.data.Year,
        response.data.Actors
      ]     
      setFetching(false)
      return tempValues
    } catch (e) {
      console.log(e);
      setFetching(false)
    }
  }

  return (
    <Grid container direction="row"
      justify="center">
      <Grid item xs={6} >
        <Paper component="form" elevation={5}>
          <InputBase
            multiline
            placeholder="Enter IMDB movie IDs to fecth data(Comma separated)"
            inputProps={{ 'aria-label': 'Enter IMDB movie IDs to fecth data' }}
            style={{ width: '80%' }}
            name="searchText"
            id="searchText"
            value={inputSearchtext}
            type="search"
            // error={}
            // helpertext={}
            onChange={handleInputChange}
          />
          <IconButton onClick={handleClick} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>

    </Grid>
  )
}

