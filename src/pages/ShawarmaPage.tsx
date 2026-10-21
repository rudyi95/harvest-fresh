import { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { CategoryNavigation } from "src/components/common";

import {
  shawarmaBeef,
  shawarmaChicken,
  shawarmaHawaiian,
  shawarmaMix,
  shawarmaVeggie,
  cocaCola,
  cocaColaZero,
  compote,
  fanta,
  sprite,
  water,
  americano,
  cappuccino,
  coldBrewCoffee,
  coldTea,
  espresso,
  flatWhite,
  hotLatte,
  icedLatte,
  macchiato,
  mocha,
} from "../assets";

import { CBreadcrumbs, OrderButton } from "../components/common";
import { ItemCard } from "src/components/common/ItemCard";
import type { Nullable } from "src/types/common";

interface Product {
  id: string;
  name: string;
  image: string;
  orderUrl: string;
  description: string;
}

interface ProductCategory {
  id: string;
  title: string;
  products: Product[];
}

const categories: ProductCategory[] = [
  {
    id: "shawarma",
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
    id: "beverages",
    title: "Beverages",
    products: [
      {
        id: "compote",
        name: "Compote (16 oz)",
        image: compote,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/compote-NBBZJYXV3265M?menu=RegularHours",
        description: "Ingredients: water, sugar, and a mix of berries.",
      },
      {
        id: "water",
        name: "Spring Water (16 oz)",
        image: water,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/water-RF46Y7ARSB9YW?menu=RegularHours",
        description: "Refreshing bottled spring water.",
      },
      {
        id: "cola",
        name: "Coca-Cola (20 oz - 12 oz)",
        image: cocaCola,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/coca-cola-8175XK19F3CZ8?menu=RegularHours",
        description: "Classic Coca-Cola soft drink.",
      },
      {
        id: "sprite",
        name: "Sprite (20 oz - 12 oz)",
        image: sprite,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/sprite-F0DFRT8FJ0Z94?menu=RegularHours",
        description: "Refreshing lemon-lime soda.",
      },
      {
        id: "fanta",
        name: "Fanta (20 oz - 12 oz)",
        image: fanta,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/fanta-G9K9Z2D1Q6FQ0?menu=RegularHours",
        description: "Orange-flavored carbonated soft drink.",
      },
      {
        id: "cocaColaZero",
        name: "Coca-Cola Zero (10 oz)",
        image: cocaColaZero,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/coca-zero-sugar-766ZP5ARTCE6G?menu=RegularHours",
        description: "Coca-Cola Zero soft drink.",
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee & Tea",
    products: [
      {
        id: "coldTea",
        name: "Cold Tea",
        image: coldTea,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/cold-tea-34RA9RWFS2ZHP?menu=RegularHours",
        description: "Green, Black and Herbal tea.",
      },
      {
        id: "americano",
        name: "Americano",
        image: americano,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/americano-12-oz-VVEHPKJM8W4DA?menu=RegularHours",
        description: "",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        image: cappuccino,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/capuccino-12-oz-BY2SCTVHH40VC?menu=RegularHours",
        description: "",
      },
      {
        id: "coldBrewCoffee",
        name: "Cold Brew Coffee",
        image: coldBrewCoffee,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/cold-brew-coffee-16-oz-WF4Q7M60YETYW?menu=RegularHours",
        description: "",
      },
      {
        id: "espresso",
        name: "Espresso",
        image: espresso,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/espresso-4-oz-KMVP21JTC4MR0?menu=RegularHours",
        description: "",
      },
      {
        id: "flatWhite",
        name: "Flat White",
        image: flatWhite,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/flat-white-1Q5MY16KBD3YY?menu=RegularHours",
        description: "",
      },
      {
        id: "hotLatte",
        name: "Hot Latte",
        image: hotLatte,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/latte-12-oz-F80PW6504MGX4?menu=RegularHours",
        description: "",
      },
      {
        id: "icedLatte",
        name: "Iced Latte",
        image: icedLatte,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/ice-latte-0E2KE1NDA0EDG?menu=RegularHours",
        description: "",
      },
      {
        id: "macchiato",
        name: "Macchiato",
        image: macchiato,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/macchiato-12-oz-F3JHYDK7CY06C?menu=RegularHours",
        description: "",
      },
      {
        id: "mocha",
        name: "Mocha",
        image: mocha,
        orderUrl:
          "https://harvest-fresh-xo-deli.cloveronline.com/menu/mocha-12-oz-Z90BYYTN9DXKY?menu=RegularHours",
        description: "",
      },
    ],
  },
];

const shawarmaCategories = [
  { id: "shawarma", label: "Shawarma" },
  { id: "beverages", label: "Beverages" },
  { id: "coffee", label: "Coffee" },
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

  const handleAction = (product: Nullable<Product>) =>
    setSelectedProduct(!selectedProduct ? product : null);
  // const handleOpen = (product: Product) => {
  //   setSelectedProduct(product);
  // };

  // const handleClose = () => {
  //   setSelectedProduct(null);
  // };

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

      <CategoryNavigation categories={shawarmaCategories} />

      {/* Product Sections */}

      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 5, md: 8 },
        }}
      >
        {categories.map((category) => (
          <Box
            id={category.id}
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
                <ItemCard product={product} handleAction={handleAction} />
              ))}
            </Box>
          </Box>
        ))}
      </Container>

      {/* Product Modal */}

      <Dialog
        open={Boolean(selectedProduct)}
        onClose={() => handleAction(null)}
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
          onClick={() => handleAction(null)}
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
