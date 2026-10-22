import { useState } from "react";

import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface IItemCard {
  product: IProduct;
  handleAction: (product: IProduct) => void;
}

interface IProduct {
  id: string;
  name: string;
  image: string;
  orderUrl: string;
  description: string;
}

const ProductImage = ({
  product,
  height = 210,
}: {
  product: IProduct;
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

export const ItemCard = ({ product, handleAction }: IItemCard) => {
  return (
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
        onClick={() => handleAction(product)}
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
          <Typography variant="body1">{product.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
