import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LogoReact from "../../img/react.png";
import LogoNode from "../../img/nodejs.png";
import LogoGit from "../../img/git.png";
import LogoDocker from "../../img/docker.webp";

function ContentHome() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#13161c",
          height: { lg: "91vh", md: "91vh", sm: "91vh", xs: "160vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", margin: "2rem" }}>
          Choose the course you want to see
        </Typography>
        <Box
          sx={{
            width: { lg: "70%", md: "80%", sm: "95%", xs: "100%" },
            height: "50vh",
            display: "flex",
            flexWrap: "wrap",
            alignContent: { xs: "center" },
            alignItems: "center",
            flexDirection: { lg: "column", xs: "row" },
            justifyContent: "center",
            margin: "5rem",
            margin: { xs: "20rem", lg: "3rem", md: "5rem", sm: "5rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "25%",
              boxShadow: "0 0 20px 0 #c4c8ce",
              maxHeight: "60%",
              padding: "5rem",
              borderRadius: "1rem",
              margin: "10px",
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              React
            </Typography>
            <img src={LogoReact} width={"90vw"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "25%",
              boxShadow: "0 0 20px 0 #c4c8ce",
              padding: "5rem",
              maxHeight: "60%",
              borderRadius: "1rem",
              margin: "10px",
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Docker
            </Typography>
            <img src={LogoDocker} width={"90vw"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              maxHeight: "10vh",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "25%",
              boxShadow: "0 0 20px 0 #c4c8ce",
              maxHeight: "60%",
              padding: "5rem",
              borderRadius: "1rem",
              margin: "10px",
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Git
            </Typography>
            <img src={LogoGit} width={"90vw"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "25%",
              boxShadow: "0 0 20px 0 #c4c8ce",
              maxHeight: "60%",
              padding: "5rem",
              borderRadius: "1rem",
              margin: "10px",
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              NodeJS
            </Typography>
            <img src={LogoNode} width={"90vw"} />
          </Box>
        </Box>
      </Container>
    </>
  );
}
export { ContentHome };
