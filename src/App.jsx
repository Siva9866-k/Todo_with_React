import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Avatar,
  Chip,
  Card,
  CardContent,
  Grid,
  Stack,
  Paper,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CodeIcon from "@mui/icons-material/Code";
import LaunchIcon from "@mui/icons-material/Launch";

import { useState } from "react";

import "./App.css";

const skills = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "REST APIs",
  "React",
  "MySQL",
  "AWS",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
];

const projects = [
  {
    title: "Bus Reservation System",
    description:
      "Full-stack web application using Java, Spring Boot, React, and MySQL with authentication, seat booking, admin management, and REST APIs.",
    tech: ["Spring Boot", "React", "MySQL"],
    link: "https://github.com/Siva9866-k",
  },
  {
    title: "Learning Journey",
    description:
      "Built multiple full stack applications while learning modern technologies including Spring Boot, React, AWS, and database integration.",
    tech: ["React", "AWS", "Java"],
    link: "https://github.com/Siva9866-k",
  },
];

export default function App() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(15,23,42,0.85)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              flexGrow: 1,
              letterSpacing: 1,
            }}
          >
            Siva Prasad
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    background: "#0f172a",
                    height: "100%",
                    color: "white",
                  }}
                >
                  <List>
                    {["Skills", "Projects", "Contact"].map(
                      (item) => (
                        <ListItem key={item} disablePadding>
                          <ListItemButton
                            component="a"
                            href={`#${item.toLowerCase()}`}
                            onClick={() =>
                              setOpenDrawer(false)
                            }
                          >
                            <ListItemText
                              primary={item}
                            />
                          </ListItemButton>
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={2}>
              <Button color="inherit" href="#skills">
                Skills
              </Button>

              <Button color="inherit" href="#projects">
                Projects
              </Button>

              <Button color="inherit" href="#contact">
                Contact
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: {
            xs: "auto",
            md: "100vh",
          },

          py: {
            xs: 10,
            md: 0,
          },

          display: "flex",
          alignItems: "center",

          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #111827 100%)",

          color: "white",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 2,
              sm: 4,
            },
          }}
        >
          <Grid
            container
            spacing={6}
            alignItems="center"
          >
            {/* LEFT */}
            <Grid item xs={12} md={7}>
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3.5rem",
                    md: "4.5rem",
                  },

                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Hi, I'm
              </Typography>

              <Typography
                fontWeight="bold"
                sx={{
                  background:
                    "linear-gradient(to right, #38bdf8, #8b5cf6)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",

                  fontSize: {
                    xs: "3rem",
                    sm: "4rem",
                    md: "5rem",
                  },

                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Siva Prasad
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  color: "#cbd5e1",

                  textAlign: {
                    xs: "center",
                    md: "left",
                  },

                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.4rem",
                  },
                }}
              >
                Java Full Stack Developer
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  mb: 4,

                  color: "#94a3b8",
                  lineHeight: 1.8,

                  maxWidth: 600,

                  mx: {
                    xs: "auto",
                    md: 0,
                  },

                  textAlign: {
                    xs: "center",
                    md: "left",
                  },

                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                }}
              >
                Passionate Java Full Stack Developer
                specializing in Spring Boot, React,
                MySQL, and AWS. I build scalable,
                responsive, and modern web applications
                with clean UI and optimized backend
                architecture.
              </Typography>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
                sx={{
                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/Siva9866-k"
                  target="_blank"
                  sx={{
                    px: 4,
                    py: 1.5,

                    borderRadius: "12px",

                    background:
                      "linear-gradient(to right, #0ea5e9, #8b5cf6)",

                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  GitHub
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,

                    borderRadius: "12px",

                    borderColor: "#64748b",
                    color: "white",

                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </Grid>

            {/* RIGHT */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    p: 4,

                    borderRadius: "30px",

                    background:
                      "rgba(255,255,255,0.05)",

                    backdropFilter: "blur(10px)",

                    border:
                      "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Avatar
                    sx={{
                      width: {
                        xs: 180,
                        sm: 220,
                        md: 250,
                      },

                      height: {
                        xs: 180,
                        sm: 220,
                        md: 250,
                      },

                      fontSize: {
                        xs: "60px",
                        md: "90px",
                      },

                      fontWeight: "bold",

                      background:
                        "linear-gradient(to right, #0ea5e9, #8b5cf6)",
                    }}
                  >
                    S
                  </Avatar>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SKILLS */}
      <Container
        id="skills"
        maxWidth="lg"
        sx={{
          py: 12,
          px: {
            xs: 2,
            sm: 4,
          },
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
        >
          Skills
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            mt: 2,
            mb: 6,
            color: "gray",
          }}
        >
          Technologies and tools I work with
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {skills.map((skill) => (
            <Chip
              key={skill}
              icon={<CodeIcon />}
              label={skill}
              sx={{
                px: {
                  xs: 1,
                  sm: 2,
                },

                py: 3,

                fontSize: {
                  xs: "14px",
                  sm: "16px",
                },

                borderRadius: "12px",

                background:
                  "linear-gradient(to right, #e0f2fe, #ede9fe)",

                fontWeight: 600,

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            />
          ))}
        </Stack>
      </Container>

      {/* PROJECTS */}
      <Box
        id="projects"
        sx={{
          py: 12,
          background: "#f8fafc",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 2,
              sm: 4,
            },
          }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
          >
            Projects
          </Typography>

          <Grid container spacing={4} mt={4}>
            {projects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                key={index}
              >
                <Card
                  sx={{
                    height: "100%",

                    borderRadius: "24px",

                    transition: "0.4s",

                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.08)",

                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 2,
                        color: "text.secondary",
                        lineHeight: 1.8,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      mt={3}
                    >
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                        />
                      ))}
                    </Stack>

                    <Button
                      variant="contained"
                      endIcon={<LaunchIcon />}
                      href={project.link}
                      target="_blank"
                      sx={{
                        mt: 4,
                        borderRadius: "10px",
                        textTransform: "none",
                      }}
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CONTACT */}
      <Container
        id="contact"
        maxWidth="lg"
        sx={{
          py: 12,

          px: {
            xs: 2,
            sm: 4,
          },
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
        >
          Contact Me
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            mt: 2,
            color: "gray",
          }}
        >
          Let's connect and build something amazing
        </Typography>

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          mt={6}
        >
          {[
            {
              icon: <EmailIcon color="primary" />,
              text: "sivaprasadkondapalli@gmail.com",
            },
            {
              icon: <PhoneIcon color="primary" />,
              text: "+91 9866934508",
            },
            {
              icon: <GitHubIcon color="primary" />,
              text: "github.com/Siva9866-k",
            },
          ].map((item, index) => (
            <Card
              key={index}
              sx={{
                p: 4,

                width: {
                  xs: "100%",
                  sm: 320,
                },

                textAlign: "center",

                borderRadius: "20px",

                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Box mb={2}>{item.icon}</Box>

              <Typography>{item.text}</Typography>
            </Card>
          ))}
        </Stack>

        {/* SOCIAL ICONS */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          mt={6}
        >
          <IconButton
            href="https://github.com/Siva9866-k"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton>
            <LinkedInIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>
        </Stack>
      </Container>

      {/* FOOTER */}
      <Box
        sx={{
          py: 4,
          background: "#0f172a",
          textAlign: "center",
          color: "#cbd5e1",
        }}
      >
        <Typography>
          © 2026 Siva Prasad Kondapalli • Built
          with React & MUI
        </Typography>
      </Box>
    </>
  );
}