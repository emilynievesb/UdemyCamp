import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Comments } from "../CommentsArea";
import { InfoVideo } from "../InfoVideo";

function Media(props) {
  const { loading = false } = props;
  const [commentsKey, setCommentsKey] = React.useState(false);
  console.log(props.video);

  React.useEffect(() => {
    setCommentsKey(!commentsKey);
  }, [props.video]);

  return (
    <>
      <Grid
        container
        sx={{
          flexWrap: { lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap" },
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(loading ? Array.from(new Array(1)) : props.video).map(
          (item, index) => (
            <Box
              key={index}
              sx={{
                width: { lg: "70%", md: "70%", sm: "95%", xs: "100%" },
                px: { lg: "3rem", md: "3rem", xs: "3rem" },
                my: 5,
                marginBottom: { xs: "0", sm: "0" },
              }}
            >
              {item ? (
                <video
                  autoPlay
                  loop
                  controls
                  style={{ width: "100%", height: "60vh" }}
                  src={`http://192.168.110.14:5010/cursos/play?course=${item.course}&seccion=${item.sectionID}&video=${item.videoURL}`}
                ></video>
              ) : (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    margin: { xs: "0" },
                    padding: { xs: "0" },
                    width: {
                      lg: "100%",
                      md: "100%",
                      sm: "100%",
                      xs: "100%",
                    },
                  }}
                  height={"50vh"}
                />
              )}

              {item ? (
                <InfoVideo videoTitle={item.videoTitle} links={item.links} />
              ) : (
                <Box>
                  <Skeleton
                    sx={{
                      width: {
                        lg: "100%",
                        md: "100%",
                        sm: "100%",
                        xs: "100%",
                      },
                      height: "8vh",
                    }}
                  />
                  <Skeleton
                    sx={{
                      width: {
                        lg: "100%",
                        md: "100%",
                        sm: "100%",
                        xs: "100%",
                      },
                      height: "20vh",
                    }}
                  />
                </Box>
              )}
            </Box>
          )
        )}
        {(loading ? Array.from(new Array(1)) : props.video).map(
          (item, index) => (
            <Box
              key={index}
              sx={{
                width: { lg: "30%", md: "30%", sm: "100%", xs: "100%" },
                my: { lg: 5, md: 5, sm: 0, xs: 0 },
                marginRight: { lg: "2rem", md: "2rem" },
                padding: { sm: "1rem", xs: "1rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item ? (
                item.comments ? (
                  <Comments
                    key={commentsKey}
                    course={item.course}
                    sectionID={item.sectionID}
                    videoTitle={item.videoTitle}
                    id={props.id}
                    username={props.username}
                    avatar={props.avatar}
                  />
                ) : null
              ) : (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: {
                      lg: "100%",
                      md: "100%",
                      sm: "100%",
                      xs: "100%",
                    },
                    height: {
                      lg: "70vh",
                      md: "70vh",
                      sm: "30vh",
                      xs: "100vh",
                    },
                    px: { lg: "3rem", md: "3rem", xs: "3rem" },
                  }}
                />
              )}
            </Box>
          )
        )}
      </Grid>
    </>
  );
}
export { Media };
