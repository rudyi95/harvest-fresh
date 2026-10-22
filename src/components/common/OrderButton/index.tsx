import { Box, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export const OrderButton = () => {
  return (
    <Box
      component="a"
      href={"https://harvest-fresh-xo-deli.cloveronline.com/menu/all?menu=RegularHours"}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        top: {
          xs: 90,
          md: 110,
        },
        right: {
          xs: 16,
          md: 32,
        },
        width: {
          xs: 90,
          md: 120,
        },
        height: {
          xs: 90,
          md: 120,
        },
        borderRadius: "50%",
        backgroundColor: "#874747",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
        textDecoration: "none",
        textAlign: "center",
        boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
        zIndex: 1200,
        transition: "transform 0.25s, background-color 0.25s",
        "&:hover": {
          backgroundColor: "#6d3535",
          transform: "scale(1.08)",
        },
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <ShoppingBagOutlinedIcon
        sx={{
          fontSize: {
            xs: 24,
            md: 30,
          },
        }}
      />

      <Typography variant="body1" sx={{ color: "#FFF", lineHeight: 1 }}>
        Make an Order
      </Typography>
    </Box>
  );
};
