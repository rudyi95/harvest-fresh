import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export interface Category {
  id: string;
  label: string;
}

interface CategoryNavigationProps {
  categories: Category[];
}

export const CategoryNavigation = ({ categories }: CategoryNavigationProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    const updateActiveCategory = () => {
      const scrollPosition = window.scrollY + 180;

      let currentCategory = categories[0]?.id ?? "";

      categories.forEach((category) => {
        const section = document.getElementById(category.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentCategory = category.id;
        }
      });

      setActiveCategory(currentCategory);
    };

    updateActiveCategory();

    window.addEventListener("scroll", updateActiveCategory, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveCategory);

    return () => {
      window.removeEventListener("scroll", updateActiveCategory);
      window.removeEventListener("resize", updateActiveCategory);
    };
  }, [categories]);

  const scrollToCategory = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveCategory(id);
  };

  return (
    <Box
      component="nav"
      aria-label="Shawarma categories"
      sx={{
        position: "fixed",
        zIndex: 100,
        top: {
          xs: "auto",
          //   lg: "50%",
        },
        bottom: {
          xs: 16,
          //   lg: "auto",
        },
        left: {
          xs: "50%",
          //   lg: 20,
        },
        transform: {
          xs: "translateX(-50%)",
          //   lg: "translateY(-50%)",
        },
        display: "flex",
        flexDirection: {
          xs: "row",
          //   lg: "column",
        },
        alignItems: {
          xs: "center",
          //   lg: "flex-start",
        },
        gap: {
          xs: 1.5,
          //   lg: 2,
        },
        maxWidth: {
          xs: "calc(100vw - 32px)",
          //   lg: 180,
        },
        overflowX: {
          xs: "auto",
          //   lg: "visible",
        },
        p: {
          xs: 1.5,
          //   lg: 2,
        },
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.88)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        backdropFilter: "blur(8px)",
      }}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <Box
            key={category.id}
            component="button"
            type="button"
            onClick={() => scrollToCategory(category.id)}
            aria-current={isActive ? "location" : undefined}
            sx={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              p: 0,
              flexShrink: 0,
              textAlign: "left",
              opacity: isActive ? 1 : 0.35,
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 12,
                  md: 14,
                },
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#874747" : "#222",
                whiteSpace: "nowrap",
              }}
            >
              {category.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
