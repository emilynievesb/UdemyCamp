import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import discordLogo from "../img/discord.png";
function Login() {
  const dc = `http://${import.meta.env.VITE_BACK_HOST}/auth/discord`;
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#e5e5e5",
        }}
      >
        <Box
          sx={{
            width: "40%",
            height: "80vh",
            backgroundColor: "white",
            boxShadow: "0 0 20px 0 grey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Login</Typography>
          <Typography
            sx={{ maxWidth: "60%", margin: "2rem", textAlign: "center" }}
            variant="body1"
          >
            Remember, you must be part of the campuslands server to log in.
          </Typography>
          <a
            href={dc}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center ",
              textDecoration: "none",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000000",
                width: "50%",
                "&:hover": {
                  backgroundColor: "#000000",
                },
              }}
            >
              <img src={discordLogo} width={"20%"} />
              Login with Discord
            </Button>
          </a>
        </Box>
      </Container>
    </>
  );
}
export { Login };
