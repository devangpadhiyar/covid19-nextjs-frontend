import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import { Container, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SigninForm from '../../components/SigninForm';

const useStyles = makeStyles({
  container: {
    margin: 0,
    width: '100%'
  }
});

const Signin = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={2} justify={'center'} classes={{ container: classes.container }}>
        <Grid item xs={12}>
          <SigninForm />
        </Grid>
      </Grid>
    </Layout>
  );
};

Signin.propTypes = {};

export default Signin;
