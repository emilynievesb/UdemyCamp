import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import fondoPage from "../../img/section.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
function CoursesSection() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          height: { xs: "200vh", md: "120vh", lg: "115vh" },
          backgroundColor: "#b07be2",
          backgroundImage: `url(${fondoPage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "initial",
            padding: "5rem",
            paddingBottom: "0",
            paddingTop: "3rem",
            color: "#00af63",
          }}
        >
          HOW DO YOU LEARN WITH UDEMY CAMP?
        </Typography>
        <Typography
          variant="h4"
          sx={{ textAlign: "initial", paddingLeft: "5rem" }}
        >
          WE GIVE YOU THE TOOLS TO GROW
        </Typography>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "column", lg: "row" },
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              width: { lg: "100%", md: "100%", xs: "100%" },
              alignItems: "center",
              justifyContent: "center",
              height: { xs: "170vh", md: "100vh", lg: "100vh" },
              flexWrap: "wrap",
              flexDirection: { xs: "column", md: "column", lg: "row" },
            }}
          >
            <Card sx={{ maxWidth: 275, minHeight: "38vh", margin: "0.5rem" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  React
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Framework
                </Typography>
                <Typography variant="body2">
                  Discover React, the leading JavaScript library for creating
                  interactive and dynamic user interfaces. You will learn how to
                  build modern and engaging web applications using reusable
                  components and React's declarative approach.
                  <br />
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 275, minHeight: "38vh", margin: "0.5rem" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Docker
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Performance
                </Typography>
                <Typography variant="body2">
                  Explore Docker, the revolutionary technology that simplifies
                  application development and deployment. Learn how to create
                  and manage containers to ensure portability and consistency of
                  your applications in any environment.
                  <br />
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 275, minHeight: "38vh", margin: "0.5rem" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Git
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Tool
                </Typography>
                <Typography variant="body2">
                  Master Git, the essential tool for version control and team
                  collaboration. Learn how to track and manage changes to your
                  code efficiently, which will facilitate collaboration with
                  other developers and project management.
                  <br />
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 275, minHeight: "38vh", margin: "0.5rem" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  NodeJS
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Environment
                </Typography>
                <Typography variant="body2">
                  Dive into the world of Node.js, the server-side JavaScript
                  runtime environment. Gain skills to create fast, scalable web
                  applications using JavaScript on both the client and server
                  side.
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Container>
      </Container>
    </>
  );
}
export { CoursesSection };
