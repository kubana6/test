import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { changeModalActive, createShares } from '../../redux/reducers/dataTable';
import { TextInput } from '../textInput/textInput';
import { Close } from '@material-ui/icons';
import { useStyles } from './style/materialUIStyles';
import { Box, Button } from '@material-ui/core';
import moment from 'moment'

export const FormShares = () => {
  const dispatch = useDispatch()
  const closeModalActive = () => {
    dispatch(changeModalActive())
  }
  const classMaterial = useStyles();
  return (<Box
    className={`${classMaterial.overlay} ${classMaterial.active}`}
    onClick={closeModalActive}
  >
    <Box className={classMaterial.modal} onClick={(e) => e.stopPropagation()}>
      <Box className={classMaterial.close}>
        <Close
          className={classMaterial.iconClose}
          color="action"
          onClick={closeModalActive}
        />
      </Box>
      <Formik
        initialValues={{
          date: moment().format('YYYY-MM-DD'),
          name: '',
          cost: 0,
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(3, 'Min 3 symbol'),
          cost: Yup.number().min(1, 'Min 1 number')
        })}
        onSubmit={(values, { setSubmitting }) => {

          dispatch(createShares(values))
          setSubmitting(false);
          closeModalActive();
        }}
      >
        <Form className={classMaterial.form}>
          <TextInput
            id="date"
            name="date"
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextInput
            id="name"
            name="name"
            label="Name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextInput
            id="cost"
            name="cost"
            label="Cost"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Box className={classMaterial.box}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
            >
              Save
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  </Box>)
}