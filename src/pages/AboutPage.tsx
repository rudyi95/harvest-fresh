import { Box, Container, Typography } from "@mui/material";

import { about2, vadik_ph as chefImage } from "src/assets";

import { CBreadcrumbs } from "src/components/common";

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      {/* Breadcrumb */}
      <Box
        sx={{
          borderBottom: "1px solid #f0f0f0",
          py: 2,
        }}
      >
        <CBreadcrumbs page="About" />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          pt: { xs: 5, md: 8 },
          pb: { xs: 7, md: 12 },
          textAlign: "left",
        }}
      >
        {/* Why Shop With Us */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // display: "grid",
            // gridTemplateColumns: {
            //   xs: "1fr",
            //   md: "1fr 1.25fr",
            // },
            // gap: { xs: 4, md: 7 },
            gap: "20px",
            alignItems: "start",
            // mt: { xs: 9, md: 15 },
          }}
        >
          <Typography variant="h2">Why Shop With Us</Typography>
          <Box
            component="img"
            src={about2}
            alt="Inside XO Harvest Fresh store"
            sx={{
              width: "100%",
              height: { xs: 280, md: 360 },
              objectFit: "cover",
              borderRadius: "20px",
              order: {
                xs: 1,
                md: 0,
              },
            }}
          />

          <Box>
            {/* <Typography
              component="h2"
              sx={{
                fontSize: { xs: 26, md: 30 },
                fontWeight: 500,
                color: "#333",
                mb: 1.5,
              }}
            >
              Why Shop With Us
            </Typography> */}

            <Typography variant="body1">
              We know you have options. That's why we focus on giving you something different: a
              shopping experience that blends convenience, quality, and care in every department.
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: 3,
                my: 2,
                color: "#555",
                "& li": {
                  fontSize: 14,
                  lineHeight: 1.65,
                  mb: 0.5,
                },
              }}
            >
              <li>
                <Typography variant="body1">
                  <strong>Freshness You Can Taste:</strong> Our fruits, vegetables, meats, and baked
                  goods are delivered and prepared daily.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  <strong>Unique Selection:</strong> From local finds to Eastern European staples
                  and global favorites, we carry what big box stores miss.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  <strong>In-Store Kitchen & Deli:</strong> Craving something hot? Our in-house
                  chefs prepare fresh shawarma, soups, sides, and more every day.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  <strong>Personal Service:</strong> We remember names, offer honest
                  recommendations, and treat you like family.
                </Typography>
              </li>

              <li>
                <Typography variant="body1">
                  <strong>Weekly Deals:</strong> Great prices and rotating specials help you save
                  without sacrificing quality.
                </Typography>
              </li>
            </Box>

            <Typography variant="body1">
              Whether you're planning a family dinner, hosting guests, or just grabbing something on
              the go, we aim to be the place you trust for food, for service, and for that sense of
              home.
            </Typography>
          </Box>
        </Box>

        {/* About Us */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.25fr 1fr",
            },
            gap: { xs: 5, md: 8 },
            alignItems: "start",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h2">About Us</Typography>

            <Typography variant="body1">
              At XO Harvest Fresh & Deli, we believe food should do more than fill your basket. It
              should nourish, inspire, and connect. What began as a small family venture rooted in
              old-world hospitality has grown into a vibrant local destination, serving our
              community with the warmth of tradition and the ease of modern convenience.
            </Typography>

            <Typography variant="body1">
              Every aisle tells a story. From our handmade baked goods and deli favorites to the
              freshest produce and imported specialties, we carefully curate our selection with
              quality and flavor in mind. But we're more than just a grocery store. We're also a
              neighborhood gathering place, where regulars come for freshly carved shawarma, warm
              bread straight from the oven, and that familiar smile at the counter.
            </Typography>

            <Typography variant="body1">
              Family-owned and community-driven, XO Harvest Fresh & Deli brings people together
              through shared meals, cultural flavors, and everyday hospitality. Whether you're
              stocking up for the week or stopping in for a quick lunch, we're here to make it feel
              easy and a little special.
            </Typography>
          </Box>

          {/* Chef image */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={chefImage}
              alt="XO Harvest Fresh chef"
              sx={{
                width: "100%",
                maxWidth: 420,
                height: "auto",
                display: "block",
                mx: "auto",
                borderRadius: "20px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
