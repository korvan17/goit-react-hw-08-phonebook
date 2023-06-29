import {
  IconButton,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useDeleteContactMutation } from './redux/contactSlice';


function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }


export default function Contact({ Contact }) {

  const [delContact] = useDeleteContactMutation();

    

  return (
    <>
      {generate(
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={()=> delContact(Contact.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={Contact.name}
            secondary={Contact.number}
          />
        </ListItem>
      )}
    </>
  );
}
