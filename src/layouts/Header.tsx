import { useState } from "react";
import type { MouseEvent } from "react";

import { Link as RouterLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Container,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { xo_logo } from "../assets";

const departmentColumns = [
  [
    {
      title: "PRODUCE",
      items: ["Vegetables", "Fruits", "Fresh Herbs"],
    },
    {
      title: "DELI",
      items: ["Meats", "Cheeses", "Sausage"],
    },
  ],
  [
    {
      title: "XO DELICACIES",
      items: [
        "Soups",
        "Salads",
        "Meat",
        "Fish",
        "Semi-finished products",
        "Sides",
        "Sour Vegetables",
      ],
    },
    {
      title: "BAKERY",
      items: ["Bread", "Pastries", "Cakes, cookies", "Buns/Pirozhki", "Pies"],
    },
  ],
  [
    {
      title: "DAIRY",
      items: ["Milk", "Cheese", "Yogurt", "Butter", "Eggs", "Cream"],
    },
    {
      title: "FROZEN FOOD",
      items: ["Premade Food", "Vegetables / Fruits", "Ice Cream"],
    },
    {
      title: "BUTCHER",
      items: ["Raw Meat", "Poultry"],
    },
  ],
  [
    {
      title: "FISH",
      items: ["Fresh Fish", "Frozen Fish", "Smoked Fish", "Caviar", "Seafood"],
    },
    {
      title: "BEVERAGES",
      items: ["Hard Liquor", "Soft Liquor", "Juice", "Water", "Energy Drink"],
    },
  ],
  [
    {
      title: "DRY GOODS",
      items: ["Snacks", "Canned", "Grains / Pasta", "Sweets", "Coffee / Tea"],
    },
    {
      title: "HOUSEHOLD ESSENTIAL",
      items: ["Basic Home Needs", "Personal Care", "Bakery Suppliers"],
    },
    {
      title: "PHARMACY",
      items: [],
    },
    {
      title: "PET SUPPLIES",
      items: [],
    },
    {
      title: "FLORAL",
      items: [],
    },
  ],
];

const pages = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  // { label: "Departments", path: "/departments" },
  { label: "Weekly Specials", path: "/weekly-specials" },
  { label: "Shawarma", path: "/shawarma" },
  // { label: "Catering", path: "/catering" },
  { label: "Contact Us", path: "/contacts" },
];

const Header = () => {
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDepartmentsOpen, setMobileDepartmentsOpen] = useState(false);
  const [cateringAnchor, setCateringAnchor] = useState<HTMLElement | null>(null);

  const closeMenus = () => {
    setDepartmentsOpen(false);
    setMobileOpen(false);
    setCateringAnchor(null);
  };

  const handleCateringClick = (event: MouseEvent<HTMLElement>) => {
    setDepartmentsOpen(false);
    setCateringAnchor(event.currentTarget);
  };

  return (
    <>
      <AppBar
        position='relative'
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#222",
          borderBottom: "1px solid #eee",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        onMouseLeave={() => {
          setDepartmentsOpen(false);
          setCateringAnchor(null);
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 72, md: 90 },
              display: "flex",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box
              component={RouterLink}
              to="/"
              onClick={closeMenus}
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={xo_logo}
                alt="XO Harvest Fresh"
                sx={{
                  width: { xs: 60, md: 80 },
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
                gap: { md: 0.5, lg: 1.5 },
              }}
            >
              {pages.map((page) => {
                const isDepartments = page.label === "Departments";
                const isCatering = page.label === "Catering";
                const hasDropdown = isDepartments || isCatering;

                return (
                  <Button
                    key={page.label}
                    component={isDepartments || isCatering ? "button" : RouterLink}
                    to={hasDropdown ? undefined : page.path}
                    onMouseEnter={(event: MouseEvent<HTMLElement>) => {
                      if (isDepartments) {
                        setDepartmentsOpen(true);
                        setCateringAnchor(null);
                      } else if (isCatering) {
                        handleCateringClick(event);
                      } else {
                        setDepartmentsOpen(false);
                        setCateringAnchor(null);
                      }
                    }}
                    onClick={(event: MouseEvent<HTMLElement>) => {
                      if (isDepartments) {
                        setDepartmentsOpen((previous) => !previous);
                      } else if (isCatering) {
                        handleCateringClick(event);
                      } else {
                        closeMenus();
                      }
                    }}
                    endIcon={
                      hasDropdown ? <KeyboardArrowDownIcon sx={{ fontSize: 17 }} /> : undefined
                    }
                    sx={{
                      color: isDepartments && departmentsOpen ? "#874747" : "#222",
                      textTransform: "none",
                      fontSize: { md: 12, lg: 14 },
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      px: { md: 1, lg: 1.5 },
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#874747",
                      },
                    }}
                  >
                    {page.label}
                  </Button>
                );
              })}
            </Box>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#222",
              }}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        {departmentsOpen && (
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
              borderTop: "1px solid #f1f1f1",
              maxHeight: "calc(100vh - 90px)",
              overflowY: "auto",
              display: { xs: "none", md: "block" },
            }}
          >
            <Container maxWidth="xl">
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                  gap: { md: 2, lg: 5 },
                  px: { md: 1, lg: 3 },
                  py: 4,
                  minHeight: 440,
                }}
              >
                {departmentColumns.map((column, columnIndex) => (
                  <Box key={columnIndex}>
                    {column.map((category) => (
                      <Box key={category.title} sx={{ mb: 3 }}>
                        <Typography
                          sx={{
                            color: "#874747",
                            fontSize: 14,
                            fontWeight: 700,
                            mb: 1.5,
                          }}
                        >
                          {category.title}
                        </Typography>

                        {category.items.map((item) => (
                          <Typography
                            key={item}
                            component="div"
                            sx={{
                              color: "#222",
                              fontSize: 14,
                              fontWeight: 500,
                              mb: 1.5,
                              cursor: "default",
                            }}
                          >
                            • {item}
                          </Typography>
                        ))}
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>
        )}

        {Boolean(cateringAnchor) && (
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              right: { md: "15%", lg: "20%" },
              width: 220,
              backgroundColor: "#fff",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              py: 1,
            }}
          >
            {[
              { label: "Catering Menu", path: "/catering" },
              { label: "Order Catering", path: "/catering" },
            ].map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                onClick={closeMenus}
                fullWidth
                sx={{
                  color: "#222",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  "&:hover": {
                    color: "#874747",
                    backgroundColor: "#fafafa",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "85%", sm: 360 },
            maxWidth: "100%",
            p: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>XO Harvest Fresh</Typography>

          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {pages.map((page) => {
          const isDepartments = page.label === "Departments";

          return (
            <Box key={page.label}>
              <Button
                component={isDepartments ? "button" : RouterLink}
                to={isDepartments ? undefined : page.path}
                fullWidth
                onClick={() => {
                  if (isDepartments) {
                    setMobileDepartmentsOpen((previous) => !previous);
                  } else {
                    closeMenus();
                  }
                }}
                endIcon={isDepartments ? <KeyboardArrowDownIcon /> : undefined}
                sx={{
                  justifyContent: "space-between",
                  color: "#222",
                  textTransform: "none",
                  fontSize: 15,
                  py: 1.5,
                }}
              >
                {page.label}
              </Button>

              {isDepartments && (
                <Collapse in={mobileDepartmentsOpen}>
                  <Box sx={{ pl: 2, pb: 2 }}>
                    {departmentColumns.flat().map((category) => (
                      <Box key={category.title} sx={{ mb: 2 }}>
                        <Typography
                          sx={{
                            color: "#874747",
                            fontWeight: 700,
                            fontSize: 13,
                            mb: 1,
                          }}
                        >
                          {category.title}
                        </Typography>

                        {category.items.map((item) => (
                          <Typography
                            key={item}
                            sx={{
                              fontSize: 13,
                              py: 0.5,
                              pl: 1,
                            }}
                          >
                            • {item}
                          </Typography>
                        ))}
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          );
        })}
      </Drawer>
    </>
  );
};

export default Header;
