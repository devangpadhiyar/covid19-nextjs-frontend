import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CountrySelect from '../inputs/CountrySelect';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, useForm } from 'react-hook-form';

const useStyles = makeStyles({
  container: {
    margin: 0,
    width: '100%'
  }
});

const SignupForm = (props) => {
  const classes = useStyles();

  const { control, register, errors, handleSubmit, watch } = useForm({
    mode: 'onChange',
    defaultValues: {
      country: undefined
    }
  });

  return (
    <Paper elevation={10}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
        <Grid container spacing={2} classes={{ container: classes.container }}>
          <Grid item xs={12}>
            <Typography variant={'h6'} align={'center'}>
              Enter details to signup
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: 'Please add email',
                validate: (val) => {
                  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  return emailRegex.test(val) ? true : 'Please enter valid email id';
                }
              })}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
              name={'email'}
              label={'Email'}
              fullWidth
              placeholder={'devang@gmail.com'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: 'This field is required'
              })}
              name={'firstName'}
              error={!!errors.firstName}
              helperText={errors.firstName && errors.firstName.message}
              label={'First name'}
              fullWidth
              placeholder={'Devang'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: 'This field is required'
              })}
              name={'lastName'}
              error={!!errors.lastName}
              helperText={errors.lastName && errors.lastName.message}
              label={'Last name'}
              fullWidth
              placeholder={'Padhiyar'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: 'This field is required'
              })}
              type={'password'}
              name={'password'}
              label={'Password'}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
              fullWidth
              placeholder={'Enter password here'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={register({
                required: 'This field is required',
                validate: (val) => {
                  return val === watch('password') ? true : 'Passwords must match!';
                }
              })}
              type={'password'}
              name={'password2'}
              label={'Confirm password'}
              error={!!errors.password2}
              helperText={errors.password2 && errors.password2.message}
              fullWidth
              placeholder={'Confirm entered password'}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name={'country'}
              rules={{ required: 'Please select country' }}
              render={({ onChange, onBlur, value, name }) => (
                <CountrySelect
                  name={'country'}
                  onChange={(e, value) => onChange(value.code)}
                  textfieldProps={{
                    helperText: errors.country && errors.country.message,
                    error: !!errors.country,
                    name: 'country'
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button type={'submit'} variant={'contained'} color={'primary'} fullWidth>
              Sign up
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant={'contained'} color={'default'} fullWidth>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

SignupForm.propTypes = {
  formStatus: PropTypes.string
};

export default SignupForm;
