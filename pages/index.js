import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { Container, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from '../components/SignupForm';

const useStyles = makeStyles({
  container: {
    margin: 0,
    width: '100%'
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={2} justify={'center'} classes={{ container: classes.container }}>
        <Grid item xs={12}>
          <SignupForm />
        </Grid>
      </Grid>
    </Layout>
  );
}
