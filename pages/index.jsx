import {
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { AccountCircle, LockOutlined } from "@material-ui/icons";
import Head from "../components/Head";
import React from "react";

export default function index() {
  return (
    <>
      <Head />
      <Container style={{ padding: "5rem" }}>
        <center>
          <img src="/mstclogo.png" alt="MSTC Official Logo" />
          <h1 style={{ fontSize: 50 }}>Sample Project</h1>
        </center>
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <form>
              <TextField
                label="Username"
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle color="primary" />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: 10 }}
              />
              <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined color="primary" />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: 10 }}
              />
              <Button fullWidth variant="contained" color="primary">
                Sign In
              </Button>
            </form>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}
