import React from 'react';
import { useDispatch } from 'react-redux';

export const Note = ({ state }) => {
  const dispatch = useDispatch();
  const toggleImportant = (id) => {
    dispatch({
      type: '@note/toggle_important',
      payload: {
        id,
      },
    });
  };

  return (
    <ul>
      {state.map((note) => {
        return (
          <li
            key={note.id}
            onClick={() => toggleImportant(note.id)}
            style={{ cursor: 'pointer' }}
          >
            {note.content}{' '}
            <strong> {note.important ? 'important' : 'not important'}</strong>
          </li>
        );
      })}
    </ul>
  );
};