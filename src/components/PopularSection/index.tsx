import { Box, Container, Typography } from "@mui/material";

import { deli, bakery, vegetables, meat, fish, fruits } from "../../assets";
import { popularSection } from "src/utils/constants/text/home";

const departments = [
  { title: "DELI", image: deli, slug: "deli" },
  { title: "BAKERY", image: bakery, slug: "bakery" },
  { title: "VEGETABLES", image: vegetables, slug: "vegetables" },
  { title: "MEAT", image: meat, slug: "meat" },
  { title: "FISH", image: fish, slug: "fish" },
  { title: "FRUITS", image: fruits, slug: "fruits" },
];

const PopularSection = () => {
  return (
    <Box
      component="section"
      id="departments"
      sx={{
        backgroundColor: "#f3f3f3",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: 500,
              color: "#555",
              mb: 2,
            }}
          >
            Popular Departments
          </Typography>

          <Typography
            sx={{
              maxWidth: 800,
              mx: "auto",
              color: "#666",
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.8,
            }}
          >
            {popularSection}
          </Typography>
        </Box>

        {/* Departments Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            columnGap: 3,
            rowGap: 4,
          }}
        >
          {departments.map((department) => (
            <Box
              key={department.slug}
              sx={{
                textAlign: "center",
              }}
            >
              {/* Image Card */}
              <Box
                tabIndex={0}
                role="group"
                aria-label={department.title}
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: "8px",
                  cursor: "pointer",
                  outlineOffset: 4,

                  "&:hover .department-image, &:focus-visible .department-image": {
                    transform: "scale(1.08)",
                  },

                  "&:hover .department-overlay, &:focus-visible .department-overlay": {
                    backgroundColor: "rgba(0, 0, 0, 0.45)",
                  },

                  "&:hover .department-text, &:focus-visible .department-text": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  className="department-image"
                  component="img"
                  src={department.image}
                  alt={department.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Dark Overlay */}
                <Box
                  className="department-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    transition: "background-color 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    className="department-text"
                    sx={{
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: 600,
                      opacity: 0,
                      transform: "translateY(10px)",
                      transition: "all 0.4s ease",
                    }}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>

              {/* Category Name */}
              <Typography
                sx={{
                  mt: 2,
                  color: "#666",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                }}
              >
                {department.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PopularSection;
