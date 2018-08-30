
import React from 'react';
import './style.css';
import { List, ListItem, Avatar, ListItemText } from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';


const ListOfLocations = (props) => {
  
  let listOfLocatoin = props.locationList.map((location, index) => {
      return location ? <ListItem key={index}>
                  <Avatar>
                    {index+1}
                  </Avatar>
                  <ListItemText primary={location.place.formatted_address} secondary={location.name} />
                   <DeleteForeverTwoToneIcon className="deleteIconStyle" onClick={() => props.removeLocation(index)} />
              </ListItem> : '';
  })

  let title = listOfLocatoin.length ?
              <div><h1> Location List </h1><br /></div> : ''

    return (
        <div className="listStyle">
            {title}
            <List>
              {listOfLocatoin}
            </List>
        </div>
    )
}

export default ListOfLocations;

