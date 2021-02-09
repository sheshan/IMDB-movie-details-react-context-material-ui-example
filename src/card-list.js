import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { store } from './childComponentProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
     width: '80%',
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();
    // Update the document title using the browser API
    const globalState = useContext(store);
    const {state } = globalState;
    const [value, newValue] = React.useState(state)
    console.log("State value", value)
  return (
    <div className={classes.root}>
      <GridList cellHeight={280} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Movies based on ID's provided</ListSubheader>
        </GridListTile>
        {state==null ? "" :state.map((value,key) => (
        
          <GridListTile key={key}>
            <img src={value[0]} alt={value[1]} />
            <GridListTileBar
              title={value[1]}
              subtitle={<span>Actors: {value[4]} <br />IMDB Rating:<strong>{value[2]}</strong><br />
              Year:<strong>{value[3]}</strong>
              </span>}             
            />
          </GridListTile>
   
        ))}
      </GridList>
    </div>
  );
}