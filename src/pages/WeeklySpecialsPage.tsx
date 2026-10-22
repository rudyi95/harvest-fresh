import { Box, Container, Grid, Typography } from "@mui/material";

import { CBreadcrumbs } from "../components/common";

import { amishEggs } from "../assets";

interface SpecialProduct {
  id: number;
  name: string;
  discount: number;
  image: string;
}

const products: SpecialProduct[] = [
  {
    id: 1,
    name: "Amish Eggs",
    discount: 10,
    image: amishEggs,
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
        <CBreadcrumbs page="Holiday Menu" />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 5, md: 8 },
          pb: { xs: 7, md: 12 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2">Holiday Menu</Typography>

          <Typography variant="body1">
            Your favorites, featured fresh. Every week brings a new lineup of standout picks and
            limited-time savings handpicked to offer more taste, more variety, and more reasons to
            swing by.
          </Typography>

          <Typography variant="body1">Made Fresh, Right Here</Typography>
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
                {/* {imageError ? (
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#999",
                      textAlign: "center",
                      p: 2,
                    }}
                  >
                    {product.name}
                  </Typography>
                ) : (
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={() => setImageError(true)}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                      transition: "transform 0.4s ease",
                      ".MuiCardActionArea-root:hover &": {
                        transform: "scale(1.06)",
                      },
                    }}
                  />
                )} */}
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
