import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import fondoPage from "../../img/home.png";
function SectionHome() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: `url(${fondoPage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h4"
          component="span"
          sx={{
            textAlign: { md: "center", xs: "center" },
            color: "#0ae98a",
          }}
        >
          For all your challenges,
        </Typography>
        <Typography
          variant="h3"
          component="h4"
          sx={{ textAlign: { md: "center", xs: "center" }, color: "white" }}
        >
          get ready at UDEMY CAMP
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            textAlign: { md: "center", xs: "center" },
            color: "white",
            margin: "4rem",
            maxWidth: "50%",
          }}
        >
          The online learning community where you develop your skills and
          enhance your professional growth.
        </Typography>
        <Button
          sx={{
            width: { xs: "30%", sm: "20%", md: "20%" },
            marginTop: "3rem",
            backgroundColor: "#0ae98a",
            "&:hover": {
              backgroundColor: "#00af63",
            },
          }}
          variant="contained"
        >
          Get Started
        </Button>
      </Container>
    </>
  );
}
export { SectionHome };
