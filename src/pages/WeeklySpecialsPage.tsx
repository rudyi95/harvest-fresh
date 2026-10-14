import { Box, Container, Grid, Typography } from "@mui/material";

import { CBreadcrumbs } from "../components/common";

interface SpecialProduct {
  id: number;
  name: string;
  discount: number;
  image: string;
}

const products: SpecialProduct[] = [
  {
    id: 1,
    name: "Swiss Cheese",
    discount: 10,
    image: "/specials/cheese.jpg",
  },
  {
    id: 2,
    name: "Fresh Salmon",
    discount: 10,
    image: "/specials/salmon.jpg",
  },
  {
    id: 3,
    name: "Red Apples",
    discount: 10,
    image: "/specials/apples.jpg",
  },
  {
    id: 4,
    name: "Fresh Tomatoes",
    discount: 10,
    image: "/specials/tomatoes.jpg",
  },
  {
    id: 5,
    name: "Fresh Bread",
    discount: 10,
    image: "/specials/bread.jpg",
  },
  {
    id: 6,
    name: "Fresh Oranges",
    discount: 10,
    image: "/specials/oranges.jpg",
  },
];

const WeeklySpecialsPage = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Box
        sx={{
          borderBottom: "1px solid #f1f1f1",
          py: 2,
        }}
      >
        <CBreadcrumbs page="Weekly Specials" />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 5, md: 8 },
          pb: { xs: 7, md: 12 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: 500,
              mb: 2,
              color: "#222",
            }}
          >
            Weekly Specials
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14, md: 17 },
              color: "#666",
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Your favorites, featured fresh. Every week brings a new lineup of standout picks and
            limited-time savings handpicked to offer more taste, more variety, and more reasons to
            swing by.
          </Typography>

          <Typography
            sx={{
              fontSize: 17,
              color: "#555",
              mt: 4,
            }}
          >
            Made Fresh, Right Here
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #eee",
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 280,
                    backgroundColor: "#fafafa",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      backgroundColor: "#c62828",
                      color: "#fff",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      fontSize: 18,
                      fontWeight: 700,
                      boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    -{product.discount}%
                  </Box>
                </Box>

                <Box
                  sx={{
                    p: 2.5,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 19,
                      fontWeight: 600,
                      color: "#222",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WeeklySpecialsPage;
