import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function InfoVideo({ videoTitle, links }) {
  return (
    <>
      <Box sx={{ pr: 2 }}>
        <Typography gutterBottom variant="h4" sx={{ paddingLeft: "1rem" }}>
          {videoTitle}
        </Typography>
        <Divider />
        <List>
          <Typography gutterBottom variant="body1" sx={{ paddingLeft: "1rem" }}>
            Sources:
          </Typography>
          {links ? (
            links.map((link, index) => (
              <ListItem
                key={index}
                disablePadding
                component="a"
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemButton>
                  <ListItemText primary={link["titulo-link"]} />
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="No links attached on this class :c" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    </>
  );
}
export { InfoVideo };
