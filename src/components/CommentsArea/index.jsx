import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import {
  commentsFetch,
  postCommentFetch,
} from "../../shared/services/fetchServices";
import { Comment } from "../Comment";

function Comments({
  course,
  type,
  sectionID,
  videoTitle,
  id,
  username,
  avatar,
}) {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fetchComments, setFetchComments] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    if (!fetchComments) {
      const getComments = async () => {
        try {
          const res = await commentsFetch(type, course, sectionID, videoTitle);
          setComments(res);
          console.log(res);
          setFetchComments(true);
        } catch (error) {
          console.error("Error al obtener los comentarios:", error);
        }
      };
      getComments();
    }
  }, [fetchComments]);
  console.log(fetchComments);

  const handleWritte = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };

  const handleClick = async () => {
    function isNotEmptyOrSpaces(str) {
      return str !== null && str.trim() !== "";
    }
    if (isNotEmptyOrSpaces(comment)) {
      const newComment = {
        type: type,
        course: course,
        sectionID: sectionID,
        videoTitle: videoTitle,
        requestBody: {
          discordID: id,
          username: username,
          avatar: avatar,
          newComment: comment,
        },
      };
      const postComment = async (object) => {
        await postCommentFetch(object);
        setFetchComments(false);
        setComment("");
      };
      postComment(newComment);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: {
            lg: "100%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
          height: {
            lg: "75vh",
            md: "75vh",
            sm: "50vh",
            xs: "50vh",
          },
          borderRadius: "1rem",
          backgroundColor: "rgba(229,229,229,0.5)",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            paddingTop: "1rem",
            textAlign: "center",
            px: "3rem",
          }}
        >
          Comments
        </Typography>

        <Divider
          sx={{
            mx: "3rem",
          }}
        />
        <FormControl
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <FormLabel
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                maxHeight: { lg: "46vh", md: "46vh", sm: "22vh", xs: "22vh" },
                minHeight: { lg: "46vh", md: "46vh", sm: "22vh", xs: "22vh" },
                width: "96%",
                maxWidth: { lg: "46vw", md: "46vw", sm: "200vw", xs: "92vw" },
                minWidth: 0,
                overflowY: "auto",
              }}
            >
              {comments.length === 0 ? (
                <Typography
                  gutterBottom
                  variant="body1"
                  sx={{
                    paddingTop: "1rem",
                    textAlign: "center",
                    px: "3rem",
                  }}
                >
                  No comments found:v
                </Typography>
              ) : (
                comments[0].comments.map((comment, index) => (
                  <Comment
                    key={index}
                    id={comment.discordID}
                    username={comment.username}
                    avatar={comment.avatar}
                    comment={comment.newComment}
                  />
                ))
              )}
            </Box>
          </FormLabel>
          <Textarea
            value={comment}
            placeholder="Type something here…"
            minRows={3}
            endDecorator={
              <Box
                sx={{
                  display: "flex",
                  gap: "var(--Textarea-paddingBlock)",
                  pt: "var(--Textarea-paddingBlock)",
                  borderTop: "1px solid",
                  borderColor: "divider",
                  flex: "auto",
                  width: "100%",
                }}
              >
                <IconButton
                  variant="plain"
                  color="neutral"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <FormatBold />
                  <KeyboardArrowDown fontSize="md" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  size="sm"
                  placement="bottom-start"
                  sx={{
                    "--ListItemDecorator-size": "24px",
                  }}
                >
                  {["200", "normal", "bold"].map((weight) => (
                    <MenuItem
                      key={weight}
                      selected={fontWeight === weight}
                      onClick={() => {
                        setFontWeight(weight);
                        setAnchorEl(null);
                      }}
                      sx={{
                        fontWeight: weight,
                      }}
                    >
                      <ListItemDecorator>
                        {fontWeight === weight && <Check fontSize="sm" />}
                      </ListItemDecorator>
                      {weight === "200" ? "lighter" : weight}
                    </MenuItem>
                  ))}
                </Menu>
                <IconButton
                  variant={italic ? "soft" : "plain"}
                  color={italic ? "primary" : "neutral"}
                  aria-pressed={italic}
                  onClick={() => setItalic((bool) => !bool)}
                >
                  <FormatItalic />
                </IconButton>
                <Button sx={{ ml: "auto" }} onClick={handleClick}>
                  Send
                </Button>
              </Box>
            }
            style={{ "--Textarea-focusedHighlight": "transparent" }}
            sx={{
              border: "none",
              width: "100%",
              backgroundColor: "transparent",
              fontStyle: italic ? "italic" : "initial",
              position: "absolute",
              left: 0,
              bottom: "4rem",
              boxShadow: "none",
            }}
            onChange={handleWritte}
          />
        </FormControl>
      </Box>
    </>
  );
}
export { Comments };
