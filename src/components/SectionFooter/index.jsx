import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
function SectionFooter() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem",
          height: { lg: "70vh" },
          textAlign: "center",
          backgroundColor: "#e5e5e5",
        }}
      >
        <Typography variant="h2" component="h1">
          "A good software developer works with discipline and consistency from
          day one."
          <br />
        </Typography>
        <Typography variant="h4" component="h1">
          - Omar Bradley -
          <br />
        </Typography>
      </Container>
    </>
  );
}
export { SectionFooter };
