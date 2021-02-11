import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

export const TextInput = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <>
      <TextField {...props}  {...field} name={name} />
      {/* <input className="text-input" /> */}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
