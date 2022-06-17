import type { Component } from "solid-js";

import styles from "./App.module.css";
import Container from "@suid/material/Container";
import Box from "@suid/material/Box";
import TextField from "@suid/material/TextField";
import Button from "@suid/material/Button";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          sx={{
            width: "400px",
            height: "400px",
            border: "2px solid #42b883",
            borderRadius: 1,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Room Id"
            fullWidth
            sx={{
              color: "#42b883",
              border: "2px solid #42b883",
              borderRadius: 1,
            }}
          />
          <Button
            sx={{
              border: "2px solid #42b883",
              color: "#42b883",
              marginTop: 3,
              padding: "0.5rem 1rem",
            }}
          >
            Hello
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default App;
