import type { SxProps, Theme } from "@mui/material";

export const adminStyles = {
  root: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f7f8fa",
  },

  // SIDEBAR
  desktopSidebar: {
    width: 260,
    flexShrink: 0,
    display: {
      xs: "none",
      md: "block",
    },
    borderRight: "1px solid #eee",
  },

  sidebarSticky: {
    position: "sticky",
    top: 0,
    height: "100vh",
  },

  sidebar: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  sidebarHeader: {
    px: 3,
    py: 3.5,
  },

  brandTitle: {
    color: "#292929",
  },

  brandSubtitle: {
    color: "#999",
    mt: 0.5,
  },

  sidebarNavigation: {
    px: 2,
    py: 3,
    flex: 1,
  },

  sidebarLabel: {
    px: 2,
    mb: 1.5,
    color: "#aaa",
  },

  menuItem: {
    borderRadius: 2,
    mb: 0.75,
    minHeight: 46,
    color: "#666",

    "&.Mui-selected": {
      backgroundColor: "#fff0f2",
      color: "#b52a3d",
    },

    "&.Mui-selected .MuiListItemText-primary": {
      fontWeight: 700,
    },

    "&.Mui-selected:hover": {
      backgroundColor: "#fce5e9",
    },

    "&:hover": {
      backgroundColor: "#f7f7f7",
    },
  },

  menuIcon: {
    minWidth: 38,
    color: "inherit",
  },

  sidebarFooter: {
    p: 2,
  },

  viewWebsiteButton: {
    justifyContent: "flex-start",
    color: "#555",
    py: 1.5,
  },

  mobileDrawer: {
    display: {
      xs: "block",
      md: "none",
    },

    "& .MuiDrawer-paper": {
      width: 260,
    },
  },

  // MAIN CONTENT
  main: {
    flex: 1,
    minWidth: 0,
  },

  topbar: {
    height: 76,
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: {
      xs: 2,
      md: 4,
    },
  },

  mobileMenuButton: {
    display: {
      xs: "inline-flex",
      md: "none",
    },
  },

  topbarTitle: {
    color: "#292929",
  },

  environmentChip: {
    backgroundColor: "#fff4e5",
    color: "#985d14",
  },

  contentContainer: {
    py: {
      xs: 4,
      md: 6,
    },
    px: {
      xs: 2,
      md: 4,
    },
  },

  pageHeading: {
    mb: 5,
  },

  pageTitle: {
    color: "#292929",
    mb: 1,
  },

  pageDescription: {
    color: "#777",
  },

  // DASHBOARD
  welcomeCard: {
    background: "linear-gradient(120deg, #871b2e, #c53248)",
    color: "#fff",
    borderRadius: 3,
    p: {
      xs: 3,
      md: 5,
    },
    mb: 4,
  },

  welcomeTitle: {
    color: "#fff",
    mb: 1.5,
  },

  welcomeDescription: {
    maxWidth: 560,
    color: "rgba(255,255,255,0.9)",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(3, minmax(0, 1fr))",
    },
    gap: 3,
  },

  managementCard: {
    border: "1px solid #ececec",
    borderRadius: 3,
    p: 3,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    height: "100%",
    transition: "box-shadow 0.2s ease",

    "&:hover": {
      boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
    },
  },

  managementIcon: {
    width: 52,
    height: 52,
    display: "grid",
    placeItems: "center",
    borderRadius: 2,
    backgroundColor: "#fff0f2",
    color: "#b52a3d",
  },

  managementTitle: {
    color: "#292929",
  },

  managementDescription: {
    color: "#777",
    flex: 1,
  },

  managementButton: {
    alignSelf: "flex-start",
    color: "#b52a3d",
    px: 0,
  },

  // EMPTY STATE
  emptyState: {
    minHeight: 350,
    border: "1px solid #ececec",
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    p: 4,
  },

  emptyStateIcon: {
    fontSize: 55,
    color: "#c8c8c8",
  },

  emptyStateTitle: {
    color: "#333",
  },

  emptyStateDescription: {
    maxWidth: 420,
    color: "#888",
  },

  backButton: {
    borderColor: "#b52a3d",
    color: "#b52a3d",
    borderRadius: 2,
  },
} satisfies Record<string, SxProps<Theme>>;
