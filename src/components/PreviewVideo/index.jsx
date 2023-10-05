import * as React from "react";
import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import Box from "@mui/material/Box";
import { sectionsFetch } from "../../shared/services/fetchServices";
import { getSourceTitle } from "../../shared/hooks/sections";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import sideBar from "../../img/sidebar.png";
import { Media } from "../Media";
import { Text } from "../Text";

function PreviewVideo({ course, id, username, avatar }) {
  const [dataSection, setDataSection] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);
  const [state, setState] = useState({
    left: false,
  });

  const handleClickSource = (event) => {
    const index = event.currentTarget.getAttribute("index");
    const section = event.currentTarget.getAttribute("section");

    const { sources } = dataSection[section - 1];
    setDataVideo([
      {
        course: course,
        sectionID: section,
        ...sources[index],
      },
    ]);
    setState({ ...state, left: false });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    if (dataSection.length === 0) {
      const fetchSections = async () => {
        try {
          const res = await sectionsFetch(course);
          setDataSection(res);
        } catch (error) {
          console.error("Error al obtener las secciones:", error);
        }
      };
      fetchSections();
    }
  }, []);
  return (
    <>
      {dataVideo.length === 0 ? (
        <Media loading />
      ) : dataVideo[0].type === "video" ||
        dataVideo[0].type === "video-recursos" ? (
        <Media
          video={dataVideo}
          username={username}
          id={id}
          avatar={avatar}
          course={course}
        />
      ) : (
        <Text
          video={dataVideo}
          username={username}
          id={id}
          avatar={avatar}
          course={course}
        />
      )}

      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Box
              position="fixed"
              bottom={16}
              right={16} // Ajusta la posición horizontal
              zIndex={1000}
            >
              <Tooltip title="See all sections" arrow>
                <Button
                  sx={{
                    backgroundColor: "#13161c",
                    width: "1vw",
                    height: "5vh",
                    borderRadius: "10rem",
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "#13161c",
                    },
                  }}
                  variant="contained"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <img src={sideBar} width={"20vh"} />
                </Button>
              </Tooltip>
            </Box>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {dataSection.length !== 0 ? (
                <div>
                  {dataSection.map((section) => (
                    <Accordion
                      key={section.id}
                      sx={{
                        width: {
                          lg: "40vw",
                          md: "50vw",
                          sm: "50vw",
                          xs: "50vw",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{section.sectionName}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div>
                          {section.sources.map((source, index) => (
                            <ListItem
                              key={index}
                              index={index}
                              section={section.id}
                              type={source.type}
                              sx={{ cursor: "pointer" }}
                              course={course}
                              onClick={handleClickSource}
                            >
                              <ListItemIcon>
                                <FolderIcon />
                              </ListItemIcon>
                              <ListItemText
                                section={section.id}
                                type={source.type}
                                primary={getSourceTitle(source)}
                              />
                            </ListItem>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              ) : null}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
export { PreviewVideo };
