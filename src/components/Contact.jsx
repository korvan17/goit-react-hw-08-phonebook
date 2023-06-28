import {
  IconButton,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';


function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }


export default function Contact({ name }) {

    function onDelete(e) {
        console.log('push delete - ', e)
    }

  return (
    <>
      {generate(
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={name}
          />
        </ListItem>
      )}
    </>
  );
}
