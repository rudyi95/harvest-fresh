import { useState } from "react";

import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import { adminStyles } from "./styles";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardOutlinedIcon />,
  },
  {
    id: "specials",
    label: "Weekly Specials",
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    id: "promotions",
    label: "Banners & Promotions",
    icon: <CampaignOutlinedIcon />,
  },
  {
    id: "media",
    label: "Media Library",
    icon: <PhotoLibraryOutlinedIcon />,
  },
  {
    id: "pages",
    label: "Pages",
    icon: <ArticleOutlinedIcon />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsOutlinedIcon />,
  },
] as const;

type AdminSection = (typeof menuItems)[number]["id"];

type AdminMenuItem = (typeof menuItems)[number];

const sectionDescriptions: Record<AdminSection, string> = {
  dashboard: "Manage your Harvest Fresh website from one place.",
  specials: "Create and manage weekly offers and featured products.",
  promotions: "Manage homepage banners and seasonal promotions.",
  media: "Organize product images, banners, and videos.",
  pages: "Update website content and page information.",
  settings: "Manage administrative settings.",
};

const isAdminSection = (value: string): value is AdminSection => {
  return menuItems.some((item) => item.id === value);
};

interface AdminSidebarProps {
  activeSection: AdminSection;
  onNavigate: (section: AdminSection) => void;
}

const AdminSidebar = ({ activeSection, onNavigate }: AdminSidebarProps) => {
  return (
    <Box sx={adminStyles.sidebar}>
      <Box sx={adminStyles.sidebarHeader}>
        <Typography variant="h6" sx={adminStyles.brandTitle}>
          HARVEST FRESH
        </Typography>

        <Typography variant="caption" sx={adminStyles.brandSubtitle}>
          Administration Panel
        </Typography>
      </Box>

      <Divider />

      <Box sx={adminStyles.sidebarNavigation}>
        <Typography variant="overline" sx={adminStyles.sidebarLabel}>
          Management
        </Typography>

        <List disablePadding>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.id}
              selected={activeSection === item.id}
              onClick={() => onNavigate(item.id)}
              sx={adminStyles.menuItem}
            >
              <ListItemIcon sx={adminStyles.menuIcon}>{item.icon}</ListItemIcon>

              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    variant: "body2",
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Divider />

      <Box sx={adminStyles.sidebarFooter}>
        <Button
          component={RouterLink}
          to="/"
          fullWidth
          startIcon={<StorefrontOutlinedIcon />}
          sx={adminStyles.viewWebsiteButton}
        >
          View Website
        </Button>
      </Box>
    </Box>
  );
};

interface ManagementCardProps {
  item: AdminMenuItem;
  onOpen: (section: AdminSection) => void;
}

const ManagementCard = ({ item, onOpen }: ManagementCardProps) => {
  return (
    <Paper elevation={0} sx={adminStyles.managementCard}>
      <Box sx={adminStyles.managementIcon}>{item.icon}</Box>

      <Typography variant="h6" sx={adminStyles.managementTitle}>
        {item.label}
      </Typography>

      <Typography variant="body2" sx={adminStyles.managementDescription}>
        {sectionDescriptions[item.id]}
      </Typography>

      <Button
        onClick={() => onOpen(item.id)}
        endIcon={<ArrowForwardRoundedIcon />}
        sx={adminStyles.managementButton}
      >
        Open section
      </Button>
    </Paper>
  );
};

interface EmptyStateProps {
  section: AdminSection;
  onBack: () => void;
}

const EmptyState = ({ section, onBack }: EmptyStateProps) => {
  const item = menuItems.find((menuItem) => menuItem.id === section);

  return (
    <Paper elevation={0} sx={adminStyles.emptyState}>
      <Stack spacing={2}>
        <Inventory2OutlinedIcon sx={adminStyles.emptyStateIcon} />

        <Typography variant="h6" sx={adminStyles.emptyStateTitle}>
          {item?.label}
        </Typography>

        <Typography variant="body2" sx={adminStyles.emptyStateDescription}>
          This section is ready for development. We'll connect its content editor and database next.
        </Typography>

        <Button variant="outlined" onClick={onBack} sx={adminStyles.backButton}>
          Back to Dashboard
        </Button>
      </Stack>
    </Paper>
  );
};

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const pathSection = location.pathname.split("/")[2] ?? "dashboard";

  const activeSection: AdminSection = isAdminSection(pathSection) ? pathSection : "dashboard";

  const activeItem = menuItems.find((item) => item.id === activeSection);

  const handleNavigate = (section: AdminSection) => {
    navigate(section === "dashboard" ? "/admin" : `/admin/${section}`);

    setMobileOpen(false);
  };

  return (
    <Box sx={adminStyles.root}>
      {/* DESKTOP SIDEBAR */}
      <Box component="aside" sx={adminStyles.desktopSidebar}>
        <Box sx={adminStyles.sidebarSticky}>
          <AdminSidebar activeSection={activeSection} onNavigate={handleNavigate} />
        </Box>
      </Box>

      {/* MOBILE SIDEBAR */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={adminStyles.mobileDrawer}
      >
        <AdminSidebar activeSection={activeSection} onNavigate={handleNavigate} />
      </Drawer>

      {/* MAIN CONTENT */}
      <Box component="main" sx={adminStyles.main}>
        {/* TOPBAR */}
        <Box sx={adminStyles.topbar}>
          <Stack direction="row" spacing={2}>
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open admin menu"
              sx={adminStyles.mobileMenuButton}
            >
              <MenuRoundedIcon />
            </IconButton>

            <Typography variant="h6" sx={adminStyles.topbarTitle}>
              {activeItem?.label ?? "Dashboard"}
            </Typography>
          </Stack>

          <Chip label="Development" size="small" sx={adminStyles.environmentChip} />
        </Box>

        <Container maxWidth="xl" sx={adminStyles.contentContainer}>
          {/* PAGE HEADING */}
          <Box sx={adminStyles.pageHeading}>
            <Typography variant="h2" sx={adminStyles.pageTitle}>
              {activeItem?.label ?? "Dashboard"}
            </Typography>

            <Typography variant="body1" sx={adminStyles.pageDescription}>
              {sectionDescriptions[activeSection]}
            </Typography>
          </Box>

          {activeSection === "dashboard" ? (
            <>
              {/* WELCOME */}
              <Paper elevation={0} sx={adminStyles.welcomeCard}>
                <Typography variant="h2" sx={adminStyles.welcomeTitle}>
                  Welcome to Harvest Fresh Admin
                </Typography>

                <Typography variant="body1" sx={adminStyles.welcomeDescription}>
                  Your future content management dashboard. Manage specials, promotions, images, and
                  website content from one place.
                </Typography>
              </Paper>

              {/* MANAGEMENT CARDS */}
              <Box sx={adminStyles.cardsGrid}>
                {menuItems
                  .filter((item) => item.id !== "dashboard")
                  .map((item) => (
                    <ManagementCard key={item.id} item={item} onOpen={handleNavigate} />
                  ))}
              </Box>
            </>
          ) : (
            <EmptyState section={activeSection} onBack={() => handleNavigate("dashboard")} />
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default AdminPage;
