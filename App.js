import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'left' }}>
            Task
          </Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        </Toolbar>
      </AppBar>
      <main style={{ backgroundColor: '#f0f0f0', color: 'gray', padding: '20px' }}>
        <Container>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>
            Welcome to the Project Management App
          </Typography>
          <Box textAlign="center">
            <Typography variant="h6" style={{ marginBottom: '20px' }}>
              Please log in or sign up to access the dashboard.
            </Typography>
            <img src="th.png" alt="Project" style={{ width: '70%', height: '1%', borderRadius: '15px' }} />

          </Box>
        </Container>
      </main>
    </div>
  );
}

export default App;
