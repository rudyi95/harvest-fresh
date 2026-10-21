import { useState, type ChangeEvent, type FormEvent } from "react";

import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

const initialForm: ContactForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

export const ContactUsForm = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [subscribe, setSubscribe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms access key is missing");
      }

      const formData = new FormData();

      formData.append("access_key", accessKey);
      formData.append("subject", "New Contact Us Message - Harvest Fresh");
      formData.append("from_name", "Harvest Fresh Website");

      formData.append("name", form.name.trim());
      formData.append("phone", form.phone.trim());
      formData.append("email", form.email.trim());
      formData.append("address", form.address.trim());
      formData.append("message", form.message.trim());
      formData.append("newsletter_subscription", subscribe ? "Yes" : "No");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setStatus("success");
      setForm(initialForm);
      setSubscribe(false);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      borderRadius: "5px",

      "& fieldset": {
        borderColor: "#ddd",
      },

      "&:hover fieldset": {
        borderColor: "#aaa",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#444",
      },
    },

    "& .MuiInputBase-input": {
      fontSize: "14px",
    },
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: "#e60012",
        color: "#fff",
        py: { xs: 6, md: 8 },
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "220px 1fr",
            },
            gap: { xs: 5, md: 7 },
          }}
        >
          {/* LEFT: CONTACT INFORMATION */}
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Contact Us
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Have any questions? Reach out to us from our contact form and we will get back to you
              shortly.
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <LocationOnOutlinedIcon />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Custom Address
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      lineHeight: 1.7,
                    }}
                  >
                    100 East Rand Rd, Arlington Heights, IL 60004
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <PhoneOutlinedIcon />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    Phone
                  </Typography>

                  <Link
                    href="tel:+18472291010"
                    underline="hover"
                    sx={{
                      color: "inherit",
                      fontSize: "13px",
                    }}
                  >
                    (847) 229-1010
                  </Link>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <MailOutlineIcon />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    E-mail
                  </Typography>

                  <Link
                    href="mailto:harvestfresh24@gmail.com"
                    underline="hover"
                    sx={{
                      overflowWrap: "anywhere",
                      color: "inherit",
                      fontSize: "13px",
                    }}
                  >
                    harvestfresh24@gmail.com
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT: CONTACT FORM */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Drop Us a Line
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 1.5,
                }}
              >
                <TextField
                  name="name"
                  placeholder="Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="small"
                  disabled={loading}
                  sx={inputStyles}
                />

                <TextField
                  name="phone"
                  placeholder="Phone Number *"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="small"
                  disabled={loading}
                  sx={inputStyles}
                />

                <TextField
                  name="email"
                  placeholder="Email *"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="small"
                  disabled={loading}
                  sx={inputStyles}
                />

                <TextField
                  name="address"
                  placeholder="Address, City, Zip Code"
                  value={form.address}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  disabled={loading}
                  sx={inputStyles}
                />
              </Box>

              <TextField
                name="message"
                placeholder="Message *"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={5}
                disabled={loading}
                sx={{
                  ...inputStyles,
                  mt: 1.5,
                }}
              />

              <FormControlLabel
                sx={{
                  mt: 1,
                  ml: 0,
                  alignItems: "center",
                }}
                control={
                  <Checkbox
                    checked={subscribe}
                    onChange={(event) => setSubscribe(event.target.checked)}
                    disabled={loading}
                    size="small"
                    sx={{
                      color: "#fff",
                      p: 0.5,
                      mr: 0.5,
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "11px",
                      lineHeight: 1.5,
                    }}
                  >
                    I would like to receive information from XO Deli on exclusive offers that may be
                    of interest to me.
                  </Typography>
                }
              />

              <Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={16} color="inherit" /> : undefined}
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "30px",
                    px: 3,
                    py: 1,
                    fontSize: "13px",
                    textTransform: "none",
                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor: "#222",
                      boxShadow: "none",
                    },

                    "&.Mui-disabled": {
                      backgroundColor: "#555",
                      color: "#fff",
                    },
                  }}
                >
                  {loading ? "Sending..." : "Send message"}
                </Button>
              </Box>

              {status === "success" && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Thank you! Your message has been sent successfully. We'll get back to you shortly.
                </Alert>
              )}

              {status === "error" && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  Something went wrong. Please try again or contact us directly by email.
                </Alert>
              )}

              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                * These fields are required.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
