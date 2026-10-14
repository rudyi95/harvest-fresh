import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";

import { CBreadcrumbs } from "../components/common";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
  subscribe: boolean;
}

const ContactPage = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    subscribe: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Connect to backend API
    console.log("Contact form:", form);

    setSubmitted(true);
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
      backgroundColor: "#fff",
      fontSize: 14,
    },
    "& .MuiOutlinedInput-input": {
      py: 1.5,
    },
  };

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      {/* Breadcrumb */}
      <Box
        sx={{
          borderBottom: "1px solid #f1f1f1",
          py: 2,
        }}
      >
        <CBreadcrumbs page="Contact Us" />
      </Box>

      {/* Contact section */}
      <Container
        maxWidth="md"
        sx={{
          pt: { xs: 5, md: 8 },
          pb: { xs: 7, md: 10 },
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.85fr 2fr",
            },
            gap: { xs: 5, md: 7 },
          }}
        >
          {/* Left column */}
          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 26, md: 28 },
                fontWeight: 600,
                color: "#222",
                mb: 1.5,
              }}
            >
              Contact Us
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "#444",
                mb: 4,
              }}
            >
              Have any questions? Reach out to us from our contact form and we will get back to you
              shortly.
            </Typography>

            <Stack spacing={3}>
              {/* Address */}
              <Stack
                sx={{
                  alignItems: "flex-start",
                }}
                direction="row"
                spacing={1.5}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    fontSize: 22,
                    mt: 0.2,
                    color: "#333",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      mb: 0.5,
                    }}
                  >
                    Custom Address
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#555",
                      lineHeight: "1.7",
                    }}
                  >
                    100 East Rand Rd,
                    <br />
                    Arlington Heights, IL 60004
                  </Typography>
                </Box>
              </Stack>

              {/* Phone */}
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <PhoneOutlinedIcon
                  sx={{
                    fontSize: 22,
                    color: "#333",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      mb: 0.5,
                    }}
                  >
                    Phone
                  </Typography>

                  <Link
                    href="tel:+18472291010"
                    underline="hover"
                    sx={{
                      color: "#555",
                      fontSize: 13,
                    }}
                  >
                    (847) 229-1010
                  </Link>
                </Box>
              </Stack>

              {/* Email */}
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <MailOutlineIcon
                  sx={{
                    fontSize: 22,
                    color: "#333",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      mb: 0.5,
                    }}
                  >
                    E-mail
                  </Typography>

                  <Link
                    href="mailto:harvestfresh24@gmail.com"
                    underline="hover"
                    sx={{
                      color: "#555",
                      fontSize: 13,
                      overflowWrap: "anywhere",
                    }}
                  >
                    harvestfresh24@gmail.com
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* Right column */}
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 26, md: 28 },
                fontWeight: 600,
                color: "#222",
                mb: 2,
              }}
            >
              Drop Us a Line
            </Typography>

            {submitted && (
              <Alert severity="info" sx={{ mb: 2 }} onClose={() => setSubmitted(false)}>
                Form validated. Backend submission is not connected yet.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
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
                  sx={inputStyle}
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
                  sx={inputStyle}
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
                  sx={inputStyle}
                />

                <TextField
                  name="address"
                  placeholder="Address, City, Zip Code"
                  value={form.address}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  sx={inputStyle}
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
                sx={{
                  ...inputStyle,
                  mt: 2,
                }}
              />

              <FormControlLabel
                sx={{
                  alignItems: "flex-start",
                  mt: 1,
                  mr: 0,
                }}
                control={
                  <Checkbox
                    size="small"
                    checked={form.subscribe}
                    onChange={(event) => {
                      setForm((prev) => ({
                        ...prev,
                        subscribe: event.target.checked,
                      }));
                    }}
                    sx={{
                      p: 0.5,
                      mr: 0.5,
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#666",
                      lineHeight: 1.5,
                    }}
                  >
                    I would like to receive information from XO Deli on exclusive offers that may be
                    of interest to me. XO Deli records certain usage data for security, support, and
                    reporting purposes.
                  </Typography>
                }
              />

              <Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "30px",
                    textTransform: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    px: 3,
                    py: 1,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#c62828",
                      boxShadow: "none",
                    },
                  }}
                >
                  Send message
                </Button>
              </Box>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#777",
                  mt: 1.5,
                }}
              >
                * These fields are required.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Google Maps */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, md: 400 },
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          title="XO Harvest Fresh Location"
          src="https://www.google.com/maps?q=100+East+Rand+Road+Arlington+Heights+IL+60004&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sx={{
            width: "100%",
            height: "100%",
            border: 0,
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactPage;
