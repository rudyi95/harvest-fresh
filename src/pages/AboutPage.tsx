import { Box, Container, Typography } from "@mui/material";

import chefImage from "../assets/aboutUs/vadik_ph.jpg";
import storeImage from "../assets/aboutUs/storeInside.jpg";

import { CBreadcrumbs } from "../components/common";

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
          pt: { xs: 5, md: 8 },
          pb: { xs: 7, md: 12 },
          textAlign: "left",
        }}
      >
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
          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 30, md: 34 },
                fontWeight: 500,
                color: "#333",
                mb: 2,
              }}
            >
              About Us
            </Typography>

            <Typography sx={paragraphStyle}>
              At XO Harvest Fresh & Deli, we believe food should do more than fill your basket. It
              should nourish, inspire, and connect. What began as a small family venture rooted in
              old-world hospitality has grown into a vibrant local destination, serving our
              community with the warmth of tradition and the ease of modern convenience.
            </Typography>

            <Typography sx={paragraphStyle}>
              Every aisle tells a story. From our handmade baked goods and deli favorites to the
              freshest produce and imported specialties, we carefully curate our selection with
              quality and flavor in mind. But we're more than just a grocery store. We're also a
              neighborhood gathering place, where regulars come for freshly carved shawarma, warm
              bread straight from the oven, and that familiar smile at the counter.
            </Typography>

            <Typography sx={paragraphStyle}>
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
                maxHeight: 590,
                width: "100%",
                maxWidth: 420,
                height: "auto",
                display: "block",
                mx: "auto",
                borderRadius: "5px",
                objectFit: "contain",
              }}
            />

            <Typography
              sx={{
                mt: 1.5,
                fontSize: { xs: 20, md: 24 },
                fontWeight: 700,
                fontStyle: "italic",
                color: "#222",
                lineHeight: 1.1,
                transform: "rotate(-3deg)",
              }}
            >
              Bringing the Farm
              <br />
              to Your Table.
            </Typography>
          </Box>
        </Box>

        {/* Why Shop With Us */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1.25fr",
            },
            gap: { xs: 4, md: 7 },
            alignItems: "start",
            mt: { xs: 9, md: 15 },
          }}
        >
          <Box
            component="img"
            src={storeImage}
            alt="Inside XO Harvest Fresh store"
            sx={{
              width: "100%",
              height: { xs: 280, md: 360 },
              objectFit: "cover",
              borderRadius: "6px",
              order: {
                xs: 1,
                md: 0,
              },
            }}
          />

          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 26, md: 30 },
                fontWeight: 500,
                color: "#333",
                mb: 1.5,
              }}
            >
              Why Shop With Us
            </Typography>

            <Typography sx={paragraphStyle}>
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
                <strong>Freshness You Can Taste:</strong> Our fruits, vegetables, meats, and baked
                goods are delivered and prepared daily.
              </li>

              <li>
                <strong>Unique Selection:</strong> From local finds to Eastern European staples and
                global favorites, we carry what big box stores miss.
              </li>

              <li>
                <strong>In-Store Kitchen & Deli:</strong> Craving something hot? Our in-house chefs
                prepare fresh shawarma, soups, sides, and more every day.
              </li>

              <li>
                <strong>Personal Service:</strong> We remember names, offer honest recommendations,
                and treat you like family.
              </li>

              <li>
                <strong>Weekly Deals:</strong> Great prices and rotating specials help you save
                without sacrificing quality.
              </li>
            </Box>

            <Typography sx={paragraphStyle}>
              Whether you're planning a family dinner, hosting guests, or just grabbing something on
              the go, we aim to be the place you trust for food, for service, and for that sense of
              home.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const paragraphStyle = {
  fontSize: { xs: 14, md: 15 },
  lineHeight: 1.8,
  color: "#555",
  mb: 2,
};

export default AboutPage;
