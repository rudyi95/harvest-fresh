import { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import {
  shawarmaBeef,
  shawarmaChicken,
  shawarmaHawaiian,
  shawarmaMix,
  shawarmaVeggie,
} from "../assets";
import { CBreadcrumbs, OrderButton } from "../components/common";

interface Product {
  id: string;
  name: string;
  image: string;
  orderUrl: string;
  description: string;
}

interface ProductCategory {
  title: string;
  products: Product[];
}

const imagePath = (name: string) => `../assets/products/shawarma/${name}`;

const categories: ProductCategory[] = [
  {
    title: "Shawarma",
    products: [
      {
        id: "chicken",
        name: "Chicken Shawarma",
        image: shawarmaChicken,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/chicken-shawarma-7BW9Z8P63FHRE?menu=RegularHours",
        description:
          "Ingredients: chicken, lavash or pita bread, cabbage, tomatoes, cucumbers, carrots, onions.",
      },
      {
        id: "beef",
        name: "Beef Shawarma",
        image: shawarmaBeef,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/beef-shawarma-X3S8CMX18VNJR?menu=RegularHours",
        description:
          "Ingredients: beef, lavash or pita bread, cabbage, tomatoes, cucumbers, carrots, onions.",
      },
      {
        id: "mix",
        name: "Mix Shawarma",
        image: shawarmaMix,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/mix-shawarmabeefchicken-S6J04PNCYP058?menu=RegularHours",
        description:
          "Ingredients: French fries, grilled chicken or tender beef, cabbage and fresh vegetables.",
      },
      {
        id: "veggie",
        name: "Veggie Shawarma",
        image: shawarmaVeggie,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/veggie-shawarma-TVVPY542Y45QE?menu=RegularHours",
        description:
          "Ingredients: French fries, grilled chicken or tender beef, cabbage and fresh vegetables.",
      },
      {
        id: "hawaiian",
        name: "Hawaiian Shawarma",
        image: shawarmaHawaiian,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/hawaiian-shawarma-KDZVDNDM9P868?menu=RegularHours",
        description:
          "Ingredients: French fries, grilled chicken or tender beef, cabbage and fresh vegetables.",
      },
    ],
  },
  {
    title: "Beverages",
    products: [
      {
        id: "compote",
        name: "Compote (16 oz)",
        image: imagePath("compote.jpg"),
        orderUrl: "",
        description: "Ingredients: water, sugar, and a mix of berries.",
      },
      {
        id: "water",
        name: "Spring Water (16 oz)",
        image: imagePath("water.jpg"),
        orderUrl: "",
        description: "Refreshing bottled spring water.",
      },
      {
        id: "cola",
        name: "Coca-Cola (20 oz - 12 oz)",
        image: imagePath("coca-cola.jpg"),
        orderUrl: "",
        description: "Classic Coca-Cola soft drink.",
      },
      {
        id: "sprite",
        name: "Sprite (20 oz - 12 oz)",
        image: imagePath("sprite.jpg"),
        orderUrl: "",
        description: "Refreshing lemon-lime soda.",
      },
      {
        id: "fanta",
        name: "Fanta (20 oz - 12 oz)",
        image: imagePath("fanta.jpg"),
        orderUrl: "",
        description: "Orange-flavored carbonated soft drink.",
      },
      {
        id: "juice",
        name: "Juices (10 oz)",
        image: imagePath("juice.jpg"),
        orderUrl: "",
        description: "Orange, Apple, Tomato and Multivitamin juices.",
      },
    ],
  },
  {
    title: "Coffee & Tea",
    products: [
      {
        id: "tea",
        name: "Tea (16 oz)",
        image: imagePath("tea.jpg"),
        orderUrl: "",
        description: "Green, Black and Herbal tea.",
      },
      {
        id: "coffee",
        name: "Coffee (16 oz)",
        image: imagePath("coffee.jpg"),
        orderUrl: "",
        description: "Freshly brewed regular or decaf coffee.",
      },
    ],
  },
];

const ProductImage = ({
  product,
  height = 210,
}: {
  product: Product;
  height?: number | string;
}) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Box
      sx={{
        width: "100%",
        height,
        overflow: "hidden",
        borderRadius: "5px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {imageError ? (
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
      )}
    </Box>
  );
};

const ShawarmaPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      {/* Breadcrumb */}

      <Box
        sx={{
          borderBottom: "1px solid #f1f1f1",
          py: 2,
        }}
      >
        <CBreadcrumbs page="Shawarma" />
      </Box>

      <OrderButton />

      {/* Product Sections */}

      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 5, md: 8 },
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.title}
            sx={{
              mb: { xs: 7, md: 10 },
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: 500,
                mb: 4,
                fontSize: {
                  xs: 24,
                  md: 28,
                },
              }}
            >
              {category.title}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 3,
              }}
            >
              {category.products.map((product) => (
                <Card
                  key={product.id}
                  elevation={0}
                  sx={{
                    border: "1px solid #f1f1f1",
                    borderRadius: "6px",
                    backgroundColor: "#fff",
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => handleOpen(product)}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      justifyContent: "flex-start",
                      p: 1.5,
                    }}
                  >
                    <ProductImage product={product} height="auto" />

                    <CardContent
                      sx={{
                        px: 0.5,
                        pt: 2,
                        pb: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          mb: 1,
                        }}
                      >
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Box>
        ))}
      </Container>

      {/* Product Modal */}

      <Dialog
        open={Boolean(selectedProduct)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="product-dialog-title"
        slotProps={{
          paper: {
            sx: {
              borderRadius: "4px",
              p: { xs: 1, md: 3 },
              position: "relative",
            },
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          aria-label="Close product details"
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            zIndex: 2,
            color: "#777",
          }}
        >
          <CloseIcon />
        </IconButton>

        {selectedProduct && (
          <DialogContent sx={{ p: 2 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1.2fr",
                },
                gap: { xs: 3, md: 5 },
                pt: 2,
              }}
            >
              {/* Product Photo */}

              <Box>
                <ProductImage key={selectedProduct.id} product={selectedProduct} height={260} />

                <Box
                  sx={{
                    mt: 2,
                    width: 70,
                    height: 60,
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    overflow: "hidden",
                  }}
                >
                  <ProductImage product={selectedProduct} height={60} />
                </Box>
              </Box>

              {/* Product Information */}

              <Box>
                <Typography
                  id="product-dialog-title"
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    mb: 3,
                    pr: 3,
                  }}
                >
                  {selectedProduct.name}
                </Typography>

                <Stack spacing={2}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#777",
                      lineHeight: 1.8,
                    }}
                  >
                    {selectedProduct.description}
                  </Typography>

                  {selectedProduct?.orderUrl && (
                    <Button
                      component="a"
                      href={selectedProduct.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        mt: 3,
                        px: 4,
                        py: 1.5,
                        backgroundColor: "#874747",
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "8px",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#6d3535",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Make an Order
                    </Button>
                  )}
                </Stack>
              </Box>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default ShawarmaPage;
