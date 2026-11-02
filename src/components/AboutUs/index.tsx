import { Box, Button, Container, Stack, Typography } from "@mui/material";

import {
  ArrowForwardRounded,
  FavoriteBorderRounded,
  LocalFloristOutlined,
  RestaurantOutlined,
  ShoppingBasketOutlined,
  PlaceOutlined,
} from "@mui/icons-material";

import { Link as RouterLink } from "react-router-dom";

import { CBreadcrumbs } from "src/components/common";
import storeImage from "src/assets/about.png";
import { about2 } from "src/assets";

const advantages = [
  {
    icon: <LocalFloristOutlined />,
    title: "Always Fresh",
    description: "Fresh produce and quality ingredients selected with care.",
  },
  {
    icon: <FavoriteBorderRounded />,
    title: "Personal Service",
    description: "Friendly people and a welcoming neighborhood atmosphere.",
  },
  {
    icon: <RestaurantOutlined />,
    title: "Freshly Prepared",
    description: "Delicious deli specialties and ready-to-enjoy meals.",
  },
  {
    icon: <ShoppingBasketOutlined />,
    title: "Unique Selection",
    description: "Everyday favorites and traditional flavors worth discovering.",
  },
];

const AboutPage = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* BREADCRUMBS */}
      <Box
        sx={{
          borderBottom: "1px solid #f1f1f1",
          py: 2,
        }}
      >
        <CBreadcrumbs page="About Us" />
      </Box>

      {/* HERO SECTION */}
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: {
            xs: 420,
            sm: 480,
            md: 560,
          },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#222",
        }}
      >
        <Box
          component="img"
          src={storeImage}
          alt="Fresh produce and groceries at Harvest Fresh"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,15,15,0.82) 0%, rgba(15,15,15,0.55) 48%, rgba(15,15,15,0.14) 100%)",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            py: 8,
          }}
        >
          <Box sx={{ maxWidth: 680 }}>
            <Typography
              sx={{
                color: "#FFD8AA",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: 12,
                fontWeight: 700,
                mb: 2.5,
              }}
            >
              Welcome to Harvest Fresh
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "2.7rem",
                  sm: "3.6rem",
                  md: "4.5rem",
                },
                fontWeight: 800,
                letterSpacing: "-2px",
                lineHeight: 1.12,
                color: "#fff",
                mb: 3,
              }}
            >
              Fresh Food.
              <br />
              Familiar Faces.
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: 15,
                  md: 18,
                },
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.88)",
                maxWidth: 490,
                mb: 4,
              }}
            >
              Discover quality ingredients, traditional flavors, and the warmth of your neighborhood
              grocery & deli.
            </Typography>

            <Button
              variant="contained"
              href="#our-story"
              endIcon={<ArrowForwardRounded />}
              sx={{
                backgroundColor: "#BD3447",
                color: "#fff",
                borderRadius: "40px",
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#9F2639",
                  boxShadow: "none",
                },
              }}
            >
              Discover Our Story
            </Button>
          </Box>
        </Container>
      </Box>

      {/* OUR STORY SECTION */}
      <Box
        component="section"
        id="our-story"
        sx={{
          py: {
            xs: 8,
            md: 13,
          },
          scrollMarginTop: "90px",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              alignItems: "center",
              gap: {
                xs: 5,
                md: 9,
              },
            }}
          >
            {/* STORY IMAGE */}
            <Box
              sx={{
                position: "relative",
                minWidth: 0,
              }}
            >
              <Box
                component="img"
                src={about2}
                alt="Fresh food being prepared in a kitchen"
                loading="lazy"
                sx={{
                  width: "100%",
                  height: {
                    xs: 340,
                    sm: 420,
                    md: 510,
                  },
                  objectFit: "cover",
                  borderRadius: "20px",
                  display: "block",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: {
                    xs: -20,
                    md: -25,
                  },
                  right: {
                    xs: 10,
                    md: -25,
                  },
                  backgroundColor: "#BD3447",
                  color: "#fff",
                  px: 3,
                  py: 2.5,
                  borderRadius: "14px",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  Freshness
                </Typography>

                <Typography
                  sx={{
                    color: "white",
                    fontSize: 13,
                    opacity: 0.9,
                  }}
                >
                  In Every Aisle
                </Typography>
              </Box>
            </Box>

            {/* STORY CONTENT */}
            <Box>
              <Typography
                sx={{
                  color: "#BD3447",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Who We Are
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: 30,
                    sm: 36,
                    md: 42,
                  },
                  fontWeight: 700,
                  color: "#292929",
                  lineHeight: 1.2,
                  letterSpacing: "-1px",
                  mb: 3,
                }}
              >
                A Neighborhood Store With a Passion for Food.
              </Typography>

              <Typography
                sx={{
                  fontSize: 16,
                  color: "#666",
                  lineHeight: 1.9,
                  mb: 2.5,
                }}
              >
                At XO Harvest Fresh & Deli, we believe grocery shopping should be more than a
                routine. It should be an experience filled with fresh discoveries, familiar
                favorites, and genuine care.
              </Typography>

              <Typography
                sx={{
                  fontSize: 16,
                  color: "#666",
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                From colorful produce and quality groceries to delicious deli specialties, we bring
                together everyday essentials and flavors that remind you of home.
              </Typography>

              <Box
                sx={{
                  borderLeft: "3px solid #BD3447",
                  pl: 3,
                  py: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 17,
                    color: "#333",
                    fontWeight: 600,
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  "Good food brings people together. That's what Harvest Fresh is all about."
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* WHY CHOOSE US SECTION */}
      <Box
        component="section"
        sx={{
          backgroundColor: "#FAF8F5",
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 660,
              mx: "auto",
              mb: {
                xs: 5,
                md: 7,
              },
            }}
          >
            <Typography
              sx={{
                color: "#BD3447",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              The Harvest Fresh Difference
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: 30,
                  md: 40,
                },
                fontWeight: 700,
                letterSpacing: "-1px",
                color: "#292929",
                mb: 2,
              }}
            >
              Why Shop With Us?
            </Typography>

            <Typography
              sx={{
                color: "#777",
                fontSize: 16,
                lineHeight: 1.8,
              }}
            >
              Every detail matters. From the food on our shelves to the way we welcome our
              customers, we're here to make every visit a little better.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {advantages.map((item) => (
              <Box
                key={item.title}
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #F0EBE6",
                  borderRadius: "18px",
                  px: 3.5,
                  py: 4,
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.07)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 66,
                    height: 66,
                    backgroundColor: "#FCEEF0",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,

                    "& svg": {
                      fontSize: 30,
                      color: "#BD3447",
                    },
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  component="h3"
                  sx={{
                    fontSize: 19,
                    fontWeight: 700,
                    color: "#292929",
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#777",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* VISIT US SECTION */}
      <Box
        component="section"
        sx={{
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: {
                xs: "18px",
                md: "26px",
              },
              background: "linear-gradient(120deg, #7D1928 0%, #BD3447 100%)",
              color: "#fff",
              px: {
                xs: 3,
                sm: 5,
                md: 8,
              },
              py: {
                xs: 7,
                md: 9,
              },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: -80,
                top: -120,
                width: 340,
                height: 340,
                borderRadius: "50%",
                border: "60px solid rgba(255,255,255,0.05)",
                pointerEvents: "none",
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                maxWidth: 700,
                mx: "auto",
              }}
            >
              <Typography
                sx={{
                  color: "#FFD8AA",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                We'd Love to See You
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: 31,
                    sm: 39,
                    md: 46,
                  },
                  fontWeight: 700,
                  letterSpacing: "-1px",
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Come Experience
                <br />
                Harvest Fresh.
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 15,
                    md: 17,
                  },
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.88)",
                  mb: 3,
                }}
              >
                Discover fresh flavors, delicious specialties, and a warm welcome in Arlington
                Heights.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                // alignItems="center"
                // justifyContent="center"
                sx={{
                  mb: 4,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <PlaceOutlined sx={{ fontSize: 20 }} />

                <Typography
                  sx={{
                    fontSize: {
                      xs: 13,
                      md: 15,
                    },
                  }}
                >
                  100 East Rand Rd, Arlington Heights, IL 60004
                </Typography>
              </Stack>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
                // justifyContent="center"
              >
                <Button
                  component="a"
                  href="https://www.google.com/maps/search/?api=1&query=100+East+Rand+Road+Arlington+Heights+IL+60004"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<ArrowForwardRounded />}
                  sx={{
                    backgroundColor: "#fff",
                    color: "#8E1D2E",
                    borderRadius: "40px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor: "#F9EDEB",
                      boxShadow: "none",
                    },
                  }}
                >
                  Get Directions
                </Button>

                <Button
                  component={RouterLink}
                  to="/contacts"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.65)",
                    color: "#fff",
                    borderRadius: "40px",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",

                    "&:hover": {
                      borderColor: "#fff",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
