import {
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { AccountCircle, LockOutlined } from "@material-ui/icons";
import Head from "../components/Head";
import React, { useState } from "react";

export default function index() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Head />
      <Container style={{ padding: "5rem" }}>
        <center>
          <img src="/mstclogo.png" alt="MSTC Official Logo" />
        </center>
        <Grid container spacing={3} style={{ marginTop: 30 }}>
          <Grid item xs={8}>
            <img src="/login.png" alt="" />
          </Grid>
          <Grid item xs={4}>
            <h1 style={{ fontSize: 50 }}>File Management</h1>
            <form>
              <TextField
                label="Username"
                variant="filled"
                fullWidth
                autoFocus
                placeholder="Enter Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle color="primary" />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: 10 }}
                onChange={event => setUsername(event.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="filled"
                placeholder="Enter Password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined color="primary" />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: 10 }}
                onChange={event => setPassword(event.target.value)}
              />
              <Button fullWidth variant="contained" color="primary" size='large'>
                Sign In
              </Button>
            </form>
          </Grid>
        </Grid>
        <p style={{ textAlign: 'center', color: 'GrayText', marginTop: '2em' }}>&copy; MSTC Limited</p>
      </Container>
    </>
  );
}
