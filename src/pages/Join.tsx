import Box from "@suid/material/Box"
import Button from "@suid/material/Button"
import Container from "@suid/material/Container"
import TextField from "@suid/material/TextField"
import Typography from "@suid/material/Typography"

const Join = ()=> {

    return (  <Container
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
        <Typography sx={{
              color: "#42b883",
                fontSize: "2rem",
            }}>Scrum Poker</Typography>
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
            Join
          </Button>
        </Box>
      </Container>)
}


export default Join;