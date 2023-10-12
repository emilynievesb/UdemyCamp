import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Comment({ id, username, avatar, comment }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: {
            lg: "100%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
          paddingLeft: "1rem",
          padding: 2,
        }}
      >
        <Avatar
          alt="Avatar"
          src={`https://cdn.discordapp.com/avatars/${id}/${avatar}`}
        />
        <Box sx={{ width: "85%" }}>
          <Typography
            variant="subtitle1"
            sx={{
              ml: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {username}:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              overflowWrap: "break-word",
              ml: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {comment}
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
        }}
      />
    </>
  );
}
export { Comment };
